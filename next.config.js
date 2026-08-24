/** @type {import('next').NextConfig} */
// Deploys to Vercel only — no GitHub Pages basePath/assetPrefix branching.
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: '/documents/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  },

  reactStrictMode: true,
  compress: true,
};

module.exports = nextConfig;
