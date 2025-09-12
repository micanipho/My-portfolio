// Centralized project image path handling for GitHub Pages deployment
export function getProjectImagePath(imageName: string): string {
  // Clean the image name (remove leading slash or /projects/ if present)
  const cleanName = imageName.replace(/^(\/projects\/|\/)?/, '');

  if (typeof window !== 'undefined') {
    const isGitHubPages = window.location.hostname.includes('github.io') ||
                         window.location.pathname.startsWith('/My-portfolio');
    return isGitHubPages ? `/My-portfolio/projects/${cleanName}` : `/projects/${cleanName}`;
  }
  return `/projects/${cleanName}`;
}

// Export project image mappings with proper path handling
export const projectImages = {
  agoodmansview: 'agoodmansview.svg',
  fintrack: 'fintrack.svg',
  lms: 'lms.svg',
  portfolio: 'portfolio.svg',
  fallback: 'fallback-project.svg'
};

// Helper function to get a project image with proper path
export function getProjectImage(projectId: keyof typeof projectImages): string {
  const imageName = projectImages[projectId];
  return imageName ? getProjectImagePath(imageName) : getProjectImagePath(projectImages.fallback);
}

// Export available project image names
export const availableProjectImages = Object.keys(projectImages) as Array<keyof typeof projectImages>;
