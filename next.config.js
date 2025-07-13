/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,

  // Configure asset prefix for GitHub Pages
  // This will be automatically set by GitHub Actions
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',

  // Ensure proper base path handling
  basePath: '',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Note: Headers are not supported with static export
  // They would need to be configured at the web server level

  // Optimize package imports for better performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },

  // Turbopack configuration (stable in Next.js 15+)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Enable strict mode for better development experience
  reactStrictMode: true,

  // Enable compression
  compress: true,

  // Bundle analyzer and webpack configuration
  webpack: (config, { isServer }) => {
    // Bundle analyzer (only when ANALYZE=true)
    if (process.env.ANALYZE === 'true' && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: '../bundle-analyzer-report.html',
        })
      );
    }

    // Copy .nojekyll file to output directory
    if (!isServer) {
      const CopyPlugin = require('copy-webpack-plugin');
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: '.nojekyll',
              to: '.nojekyll',
              noErrorOnMissing: true,
            },
          ],
        })
      );
    }

    return config;
  },
}

module.exports = nextConfig