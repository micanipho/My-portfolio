#!/usr/bin/env node

/**
 * Deployment Test Script
 * Verifies that the build output is ready for GitHub Pages deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Testing deployment readiness...\n');

const outDir = path.join(process.cwd(), 'out');
const requiredFiles = [
  'index.html',
  '_next',
  '.nojekyll'
];

const requiredDirectories = [
  '_next/static',
  'about',
  'projects',
  'contact',
  'documents',

];

let allTestsPassed = true;

// Test 1: Check if out directory exists
console.log('📁 Checking output directory...');
if (!fs.existsSync(outDir)) {
  console.log('❌ Output directory "out" does not exist. Run "npm run build" first.');
  allTestsPassed = false;
} else {
  console.log('✅ Output directory exists');
}

// Test 2: Check required files
console.log('\n📄 Checking required files...');
requiredFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} is missing`);
    allTestsPassed = false;
  }
});

// Test 3: Check required directories
console.log('\n📂 Checking required directories...');
requiredDirectories.forEach(dir => {
  const dirPath = path.join(outDir, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir}/ exists`);
  } else {
    console.log(`❌ ${dir}/ is missing`);
    allTestsPassed = false;
  }
});

// Test 4: Check for CSS files
console.log('\n🎨 Checking CSS files...');
const nextStaticDir = path.join(outDir, '_next', 'static');
if (fs.existsSync(nextStaticDir)) {
  const staticContents = fs.readdirSync(nextStaticDir);
  const hasCSS = staticContents.some(item => {
    const itemPath = path.join(nextStaticDir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const subContents = fs.readdirSync(itemPath);
      return subContents.some(file => file.endsWith('.css'));
    }
    return false;
  });
  
  if (hasCSS) {
    console.log('✅ CSS files found in _next/static');
  } else {
    console.log('❌ No CSS files found in _next/static');
    allTestsPassed = false;
  }
} else {
  console.log('❌ _next/static directory not found');
  allTestsPassed = false;
}

// Test 5: Check for JavaScript files
console.log('\n📜 Checking JavaScript files...');
if (fs.existsSync(nextStaticDir)) {
  const staticContents = fs.readdirSync(nextStaticDir);
  const hasJS = staticContents.some(item => {
    const itemPath = path.join(nextStaticDir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const subContents = fs.readdirSync(itemPath);
      return subContents.some(file => file.endsWith('.js'));
    }
    return false;
  });
  
  if (hasJS) {
    console.log('✅ JavaScript files found in _next/static');
  } else {
    console.log('❌ No JavaScript files found in _next/static');
    allTestsPassed = false;
  }
}

// Test 6: Check .nojekyll content
console.log('\n🚫 Checking .nojekyll file...');
const nojekyllPath = path.join(outDir, '.nojekyll');
if (fs.existsSync(nojekyllPath)) {
  const stats = fs.statSync(nojekyllPath);
  if (stats.size === 0) {
    console.log('✅ .nojekyll file is empty (correct)');
  } else {
    console.log('⚠️  .nojekyll file has content (should be empty)');
  }
} else {
  console.log('❌ .nojekyll file is missing');
  allTestsPassed = false;
}

// Final result
console.log('\n' + '='.repeat(50));
if (allTestsPassed) {
  console.log('🎉 All tests passed! Your site is ready for GitHub Pages deployment.');
  console.log('\nNext steps:');
  console.log('1. git add .');
  console.log('2. git commit -m "Fix deployment configuration"');
  console.log('3. git push origin main');
  console.log('4. Wait for GitHub Actions to deploy');
} else {
  console.log('❌ Some tests failed. Please fix the issues above before deploying.');
  process.exit(1);
}
