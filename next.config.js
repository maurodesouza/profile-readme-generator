import compose from 'next-compose-plugins';

import analyzer from '@next/bundle-analyzer';
import pwa from 'next-pwa';

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = pwa({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es', 'pt-BR', 'fr', 'de'],
    defaultLocale: 'en',
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default compose([withBundleAnalyzer, withPWA], nextConfig);
