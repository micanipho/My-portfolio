import React, { useState, useEffect } from 'react';
import { projectImages } from '../data/projectImages';

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
    
    // Test direct SVG loading
    svgFiles.forEach(file => {
      const img = new Image();
      img.onload = () => {
        setTestResults(prev => ({...prev, [file]: true}));
      };
      img.onerror = () => {
        setTestResults(prev => ({...prev, [file]: false}));
      };
      img.src = `/projects/${file}`;
    });
    
    // Test base64 SVG loading
    Object.keys(projectImages).forEach(key => {
      const img = new Image();
      img.onload = () => {
        setTestResults(prev => ({...prev, [`base64_${key}`]: true}));
      };
      img.onerror = () => {
        setTestResults(prev => ({...prev, [`base64_${key}`]: false}));
      };
      img.src = projectImages[key];
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