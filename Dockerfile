# ============================================
# Stage 1: Dependencies Installation Stage
# ============================================
# IMPORTANT: Node.js Version Maintenance
# This Dockerfile uses Node.js 22.16.0-slim, which was the latest LTS version at the time of writing.
# To ensure security and compatibility, regularly update the NODE_VERSION ARG to the latest LTS version.
ARG NODE_VERSION=22.16.0-slim
FROM node:${NODE_VERSION} AS dependencies

# Set working directory
WORKDIR /app

# Copy package-related files first to leverage Docker's caching mechanism
COPY package.json pnpm-lock.yaml* .npmrc* ./

# Enable Corepack and install pnpm with the version specified in package.json (pnpm@10.12.4)
RUN corepack enable pnpm && corepack prepare pnpm@10.12.4 --activate

# Install project dependencies with frozen lockfile for reproducible builds
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
  pnpm install --frozen-lockfile

# ============================================
# Stage 2: Build Next.js application in standalone mode
# ============================================
FROM node:${NODE_VERSION} AS builder

# Set working directory
WORKDIR /app

# Enable Corepack and install pnpm
RUN corepack enable pnpm && corepack prepare pnpm@10.12.4 --activate

# Copy project dependencies from dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy application source code
COPY . .

# Build-time arguments can be injected by Coolify from configured environment variables.
# Add any NEXT_PUBLIC_* variables here if your app needs them at build time.
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

ENV NODE_ENV=production

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

# Build Next.js application
RUN pnpm build

# ============================================
# Stage 3: Run Next.js application
# ============================================
FROM node:${NODE_VERSION} AS runner

# Set working directory
WORKDIR /app

# Set production environment variables
# HOSTNAME=0.0.0.0 is required so the Coolify proxy can reach the container
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the run time.
# ENV NEXT_TELEMETRY_DISABLED=1

# Install tini for proper signal handling and graceful shutdowns
RUN apt-get update && apt-get install -y --no-install-recommends tini && rm -rf /var/lib/apt/lists/*

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown node:node .next

# Copy production assets
COPY --from=builder --chown=node:node /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# If you want to persist the fetch cache generated during the build so that
# cached responses are available immediately on startup, uncomment this line:
# COPY --from=builder --chown=node:node /app/.next/cache ./.next/cache

# Switch to non-root user for security best practices
USER node

# Expose port 3000 to allow HTTP traffic
EXPOSE 3000

# Healthcheck to verify the application is running
# HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
#   CMD node -e "const http=require('http'); http.get('http://localhost:3000/',(res)=>{process.exit(res.statusCode>=200&&res.statusCode<300?0:1)}).on('error',()=>process.exit(1))" || exit 1

# Use tini as init to handle signals properly, then start Next.js standalone server
ENTRYPOINT ["tini", "--"]
CMD ["node", "server.js"]
