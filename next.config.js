/** @type {import('next').NextConfig} */
// Only apply GitHub Pages-specific settings when an explicit env var is set.
// This avoids adding a basePath/assetPrefix during Vercel (or other) deployments.
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // Enable static export when deploying to GitHub Pages (optional)
  // Keep as-is for GH Pages, but allow other platforms (Vercel) to run normally.
  output: isGithubPages ? 'export' : undefined,

  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: isGithubPages ? true : false,

  // Configure asset prefix & basePath only for GitHub Pages
  assetPrefix: isGithubPages ? '/My-portfolio' : '',
  basePath: isGithubPages ? '/My-portfolio' : '',

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