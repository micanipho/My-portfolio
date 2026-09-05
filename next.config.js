/** @type {import('next').NextConfig} */
// GitHub Pages serves this repo from a project subpath (/My-portfolio), and as
// static files only. Both of those are gated behind GITHUB_PAGES=true so a local
// `npm run build` (and CI's build check) stays a normal server build.
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/My-portfolio' : '';

const nextConfig = {
  // Static export — GitHub Pages has no Node runtime.
  output: isGithubPages ? 'export' : undefined,

  // Emit about/index.html rather than about.html, so directory URLs resolve.
  trailingSlash: isGithubPages,

  // next/link and next/image prefix themselves from this. Raw <a>/<link> hrefs
  // to files in public/ do not — those use NEXT_PUBLIC_BASE_PATH below.
  basePath,

  // Exposed to client code so hand-written asset URLs can prefix themselves.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    // next/image's optimizer needs a server; static export has none.
    unoptimized: isGithubPages,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Custom headers require a server, so they are dropped from the export build.
  // Pages sets its own caching; this block only applies on a server deploy.
  ...(isGithubPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/documents/:path*',
              headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }],
            },
          ];
        },
      }),

  reactStrictMode: true,
  compress: true,
};

module.exports = nextConfig;
