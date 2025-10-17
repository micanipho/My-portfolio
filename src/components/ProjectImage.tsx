import React, { useState, useEffect } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset state when src changes
  useEffect(() => {
    setImageSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Try fallback SVG first
      if (!imageSrc.includes('fallback-project')) {
        setImageSrc('/projects/fallback-project.svg');
      } else {
        // If fallback also fails, use inline SVG
        setImageSrc('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTkxRjNBIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjM2NjNjk4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD4KPC9zdmc+');
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#191F3A] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3cc698]"></div>
        </div>
      )}
    </div>
  );
};

export default ProjectImage;
