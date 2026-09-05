// scripts/generate-resume-pdf.js
//
// Renders public/documents/resume.html to public/documents/resume.pdf using the
// print stylesheet, driven by the Chrome that's already installed on the machine.
//
//   npm run resume:pdf
//
// Deliberately not wired into `npm run build` — the deploy environment has no
// Chrome, and the résumé changes rarely. Regenerate locally and commit the PDF
// alongside the HTML whenever the résumé content changes.

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE = path.join(ROOT, 'public', 'documents', 'resume.html');
const OUTPUT = path.join(ROOT, 'public', 'documents', 'resume.pdf');

// Candidate Chrome locations, in order. CHROME_PATH wins if set.
const CANDIDATES = [
  process.env.CHROME_PATH,
  // Windows
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA &&
    path.join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe'),
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  // macOS
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // Linux
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].filter(Boolean);

function findChrome() {
  const found = CANDIDATES.find((candidate) => fs.existsSync(candidate));
  if (!found) {
    throw new Error(
      'No Chrome or Edge found. Set CHROME_PATH to the browser executable and re-run.\nLooked in:\n  ' +
        CANDIDATES.join('\n  ')
    );
  }
  return found;
}

function main() {
  if (!fs.existsSync(SOURCE)) {
    throw new Error(`Source résumé not found: ${SOURCE}`);
  }

  const chrome = findChrome();
  console.log(`Chrome:  ${chrome}`);
  console.log(`Source:  ${SOURCE}`);

  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      // Let webfonts load and layout settle before the snapshot.
      '--virtual-time-budget=8000',
      '--no-pdf-header-footer',
      `--print-to-pdf=${OUTPUT}`,
      `file://${SOURCE.split(path.sep).join('/')}`,
    ],
    { stdio: ['ignore', 'inherit', 'inherit'] }
  );

  if (!fs.existsSync(OUTPUT)) {
    throw new Error('Chrome exited without writing a PDF.');
  }

  const kb = (fs.statSync(OUTPUT).size / 1024).toFixed(1);
  console.log(`Written: ${OUTPUT} (${kb} KB)`);
}

try {
  main();
} catch (error) {
  console.error(`\nresume:pdf failed — ${error.message}`);
  process.exit(1);
}
