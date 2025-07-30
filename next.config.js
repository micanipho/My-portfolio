/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,

  // Configure asset prefix for GitHub Pages
  // This will be automatically set by GitHub Actions
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My-portfolio' : '',

  // Ensure proper base path handling
  basePath: process.env.NODE_ENV === 'production' ? '/My-portfolio' : '',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Ensure static files are properly handled
  webpack: (config, { isServer }) => {
    // Handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Add headers for better static file serving
  async headers() {
    return [
      {
        source: '/projects/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/documents/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ];
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['react-icons'],
  },

  // Enable strict mode for better development experience
  reactStrictMode: true,

  // Enable compression
  compress: true,
}

module.exports = nextConfig;