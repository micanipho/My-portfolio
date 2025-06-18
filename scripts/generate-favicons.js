// Simple favicon generator script
// This creates basic placeholder favicons to prevent 404 errors

const fs = require('fs');
const path = require('path');

// Create a simple SVG favicon
const svgFavicon = `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#15142b"/>
  <circle cx="16" cy="16" r="12" fill="none" stroke="#00FFFF" stroke-width="2"/>
  <text x="16" y="20" text-anchor="middle" fill="#00FFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">N</text>
</svg>
`;

// Create a simple PNG data URL (1x1 transparent pixel)
const pngDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

// Create directories if they don't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write SVG favicon
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgFavicon);

console.log('✅ Basic favicon files created!');
console.log('📁 Files created:');
console.log('  - favicon.svg (SVG favicon)');
console.log('');
console.log('🔧 To create proper favicon files:');
console.log('  1. Create a 512x512 PNG logo');
console.log('  2. Use an online favicon generator');
console.log('  3. Replace the placeholder files');
console.log('  4. Uncomment favicon links in SEO.tsx');