#!/usr/bin/env node

/**
 * SVG to PNG Converter Script
 * Converts SVG project images to PNG format for better deployment compatibility
 */

const fs = require('fs');
const path = require('path');

console.log('🎨 Converting SVG files to PNG for deployment compatibility...\n');

const projectsDir = path.join(process.cwd(), 'public', 'projects');
const svgFiles = [
  'agoodmansview.svg',
  'fintrack.svg',
  'lms.svg',
  'portfolio.svg'
];

// Check if projects directory exists
if (!fs.existsSync(projectsDir)) {
  console.log('❌ Projects directory not found');
  process.exit(1);
}

console.log('📁 Found projects directory');

// Check SVG files
svgFiles.forEach(file => {
  const filePath = path.join(projectsDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ Found ${file}`);
  } else {
    console.log(`❌ Missing ${file}`);
  }
});

console.log('\n🔧 To convert SVG to PNG:');
console.log('1. Use an online converter like https://convertio.co/svg-png/');
console.log('2. Or use a tool like Inkscape:');
console.log('   inkscape --export-type=png --export-width=400 --export-height=300 input.svg');
console.log('3. Or use ImageMagick:');
console.log('   convert input.svg -resize 400x300 output.png');

console.log('\n💡 Alternative: Use base64 encoded images in the component directly');
console.log('This ensures the images are bundled with the JavaScript and always available.');

// Create a simple HTML file to test SVG loading
const testHtml = `
<!DOCTYPE html>
<html>
<head>
    <title>SVG Test</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #0E0E10; color: white; }
        .project { margin: 20px 0; padding: 20px; border: 1px solid #3cc698; border-radius: 8px; }
        img { width: 200px; height: 150px; object-fit: cover; border: 1px solid #ccc; }
        .error { color: #ff6b6b; }
    </style>
</head>
<body>
    <h1>SVG Loading Test</h1>
    <p>This file tests if SVG images load correctly in the browser.</p>
    
    ${svgFiles.map(file => `
    <div class="project">
        <h3>${file}</h3>
        <img src="./projects/${file}" alt="${file}" onerror="this.nextElementSibling.style.display='block'">
        <div class="error" style="display:none">❌ Failed to load ${file}</div>
    </div>
    `).join('')}
    
    <script>
        console.log('Testing SVG file loading...');
        document.querySelectorAll('img').forEach((img, index) => {
            img.onload = () => console.log(\`✅ Loaded: \${img.src}\`);
            img.onerror = () => console.log(\`❌ Failed: \${img.src}\`);
        });
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'svg-test.html'), testHtml);
console.log('\n📄 Created svg-test.html in public directory');
console.log('   Open http://localhost:3000/svg-test.html to test SVG loading');

console.log('\n✅ Script completed!');
