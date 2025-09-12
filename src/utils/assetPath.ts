// Utility to handle asset paths for GitHub Pages deployment
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // For Next.js static export with GitHub Pages
  // The assetPrefix in next.config.js handles this automatically in production
  // But we need to be explicit for client-side usage

  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io') ||
                         window.location.pathname.includes('/My-portfolio');

    if (isGitHubPages) {
      console.log(`Loading image from GitHub Pages: /My-portfolio/${cleanPath}`);
      return `/My-portfolio/${cleanPath}`;
    }
  } else {
    // Server-side: check NODE_ENV and process.env
    if (process.env.NODE_ENV === 'production') {
      console.log(`Loading image from production: /My-portfolio/${cleanPath}`);
      return `/My-portfolio/${cleanPath}`;
    }
  }

  // Development fallback
  console.log(`Loading image from development: /${cleanPath}`);
  return `/${cleanPath}`;
}
