import React, { useState, useEffect } from 'react';

const SvgTester: React.FC = () => {
  const [testResults, setTestResults] = useState<{[key: string]: boolean}>({});
  
  useEffect(() => {
    const svgFiles = [
      'agoodmansview.svg',
      'fintrack.svg',
      'lms.svg',
      'portfolio.svg',
      'fallback-project.svg'
    ];
    
    const results: {[key: string]: boolean} = {};
    
    // Determine the correct path based on environment
    const getBasePath = () => {
      if (typeof window !== 'undefined') {
        const isGitHubPages = window.location.hostname.includes('github.io') ||
                             window.location.pathname.startsWith('/My-portfolio');
        return isGitHubPages ? '/My-portfolio/projects/' : '/projects/';
      }
      return '/projects/';
    };

    const basePath = getBasePath();
    console.log('SvgTester using base path:', basePath);

    // Test direct SVG loading
    svgFiles.forEach(file => {
      const img = new Image();
      img.onload = () => {
        setTestResults(prev => ({...prev, [file]: true}));
      };
      img.onerror = () => {
        console.error(`Failed to load ${file} from ${basePath}${file}`);
        setTestResults(prev => ({...prev, [file]: false}));

        // Try fallback path if not already using GitHub Pages path
        if (!basePath.includes('/My-portfolio/')) {
          const fallbackImg = new Image();
          fallbackImg.onload = () => {
            setTestResults(prev => ({...prev, [`${file} (fallback)`]: true}));
          };
          fallbackImg.onerror = () => {
            setTestResults(prev => ({...prev, [`${file} (fallback)`]: false}));
          };
          fallbackImg.src = `/My-portfolio/projects/${file}`;
        }
      };
      img.src = `${basePath}${file}`;
    });
    
  }, []);
  
  return (
    <div className="fixed bottom-0 right-0 p-4 bg-black/80 text-white text-xs z-50 max-w-xs max-h-48 overflow-auto">
      <h3 className="font-bold mb-2">SVG Test Results:</h3>
      <ul>
        {Object.entries(testResults).map(([key, success]) => (
          <li key={key} className={success ? "text-green-400" : "text-red-400"}>
            {key}: {success ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SvgTester;