/** @type {import('next').Next.jsConfig} */
const nextConfig = {
  // 静的最適化やサーバーサイドの重い処理をバイパスする設定
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
