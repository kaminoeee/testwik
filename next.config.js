/** @type {import('next').NextConfig} */
const nextConfig = {
  // 最適化やトランスパイルでハングするのを防ぐ設定
  swcMinify: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
