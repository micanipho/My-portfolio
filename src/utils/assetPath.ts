// Utility to handle asset paths for GitHub Pages deployment
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // In production (GitHub Pages), prefix with repository name
  if (process.env.NODE_ENV === 'production') {
    return `/My-portfolio/${cleanPath}`;
  }

  // In development, use the path as-is with leading slash
  return `/${cleanPath}`;
}

