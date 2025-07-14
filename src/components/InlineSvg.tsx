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

  useEffect(() => {
    // Always try to load directly as an image tag from /projects
    setSvgContent(`<img src="/projects/${name}" alt="${name}" class="w-full h-full" />`);
    // Add error handling for the image
    const img = new window.Image();
    img.onload = () => {};
    img.onerror = () => {
      console.error(`Failed to load SVG: ${name}`);
      setError(true);
    };
    img.src = `/projects/${name}`;
  }, [name]);

  if (error) return <>{fallback}</>;
  if (!svgContent) return null;
  return <span className={className} dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default InlineSvg;