#!/usr/bin/env node

/**
 * SVG to Base64 Converter
 * Converts SVG files to base64 data URLs for embedding directly in components
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 Converting SVG files to base64 data URLs...\n');

const projectsDir = path.join(process.cwd(), 'public', 'projects');
const svgFiles = [
  'agoodmansview.svg',
  'fintrack.svg', 
  'lms.svg',
  'portfolio.svg',
  'fallback-project.svg'
];

const base64Images = {};

svgFiles.forEach(file => {
  const filePath = path.join(projectsDir, file);
  if (fs.existsSync(filePath)) {
    const svgContent = fs.readFileSync(filePath, 'utf8');
    const base64 = Buffer.from(svgContent).toString('base64');
    const dataUrl = `data:image/svg+xml;base64,${base64}`;
    
    const varName = file.replace('.svg', '').replace(/[^a-zA-Z0-9]/g, '');
    base64Images[varName] = dataUrl;
    
    console.log(`✅ Converted ${file} -> ${varName}`);
  } else {
    console.log(`❌ Missing ${file}`);
  }
});

// Generate TypeScript/JavaScript file with base64 images
const outputContent = `// Auto-generated base64 encoded project images
// This ensures images are bundled with the app and always available

export const projectImages = {
${Object.entries(base64Images).map(([key, value]) => 
  `  ${key}: "${value}"`
).join(',\n')}
};

// Usage example:
// import { projectImages } from './projectImages';
// <img src={projectImages.fintrack} alt="FinTrack" />
`;

const outputPath = path.join(process.cwd(), 'src', 'data', 'projectImages.ts');

// Create directory if it doesn't exist
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, outputContent);

console.log(`\n📄 Generated: ${outputPath}`);
console.log('\n🎯 To use base64 images:');
console.log('1. Import: import { projectImages } from "../src/data/projectImages";');
console.log('2. Use: <img src={projectImages.fintrack} alt="FinTrack" />');
console.log('\n✅ Base64 conversion completed!');
