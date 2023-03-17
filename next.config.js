import compose from 'next-compose-plugins';
import analyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default compose([withBundleAnalyzer], nextConfig);
