import React, { useState, useEffect } from 'react';

interface InlineSvgProps {
  name: string;
  className?: string;
  fallback?: React.ReactNode;
}

const InlineSvg: React.FC<InlineSvgProps> = ({ 
  name, 
  className = '', 
  fallback = null 
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    // Determine the correct image path based on environment
    const getImagePath = () => {
      if (typeof window !== 'undefined') {
        const isGitHubPages = window.location.hostname.includes('github.io') ||
                             window.location.pathname.startsWith('/My-portfolio');
        return isGitHubPages ? `/My-portfolio/projects/${name}` : `/projects/${name}`;
      }
      return `/projects/${name}`;
    };

    const finalPath = getImagePath();
    setImagePath(finalPath);
    setSvgContent(`<img src="${finalPath}" alt="${name}" class="w-full h-full" />`);

    // Add error handling for the image
    const img = new window.Image();
    img.onload = () => {
      console.log(`Successfully loaded project image: ${name}`);
    };
    img.onerror = () => {
      console.error(`Failed to load project SVG: ${name} from ${finalPath}`);
      // Try fallback path
      if (!finalPath.includes('/My-portfolio/')) {
        const fallbackPath = `/My-portfolio/projects/${name}`;
        setSvgContent(`<img src="${fallbackPath}" alt="${name}" class="w-full h-full" />`);
        const fallbackImg = new window.Image();
        fallbackImg.onerror = () => setError(true);
        fallbackImg.src = fallbackPath;
      } else {
        setError(true);
      }
    };
    img.src = finalPath;
  }, [name]);

  if (error) return <>{fallback}</>;
  if (!svgContent) return null;
  return <span className={className} dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default InlineSvg;