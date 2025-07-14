import React, { useState, useEffect } from 'react';
import { projectImages } from '../data/projectImages';

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
    // Try to get the image key from the name
    const imageKey = name.replace('.svg', '').replace(/[^a-zA-Z0-9]/g, '');
    
    // Check if we have a base64 version in projectImages
    if (projectImages[imageKey]) {
      setSvgContent(`<img src="${projectImages[imageKey]}" alt="${name}" class="w-full h-full" />`);
      return;
    }
    
    // If no base64 version, try to load directly as an image tag
    setSvgContent(`<img src="/projects/${name}" alt="${name}" class="w-full h-full" />`);
    
    // Add error handling for the image
    const img = new Image();
    img.onload = () => {
      // Image loaded successfully, no need to do anything
    };
    img.onerror = () => {
      console.error(`Failed to load SVG: ${name}`);
      setError(true);
    };
    img.src = `/projects/${name}`;
  }, [name]);

  if (error) {
    return <>{fallback}</>;
  }

  if (!svgContent) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-pulse bg-gray-700 rounded w-full h-full" />
      </div>
    );
  }

  // Render the SVG content directly in the DOM
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }} 
    />
  );
};

export default InlineSvg;