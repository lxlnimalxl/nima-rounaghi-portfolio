const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIST_DIR = path.join(__dirname, 'dist');
const OUTPUT_PDF_PUBLIC = path.join(__dirname, 'public', 'Seyyed_Nima_Rounaghi_Resume.pdf');
const OUTPUT_PDF_ROOT = path.join(__dirname, 'Seyyed_Nima_Rounaghi_Resume.pdf');
const OUTPUT_PDF_DIST = path.join(__dirname, 'dist', 'Seyyed_Nima_Rounaghi_Resume.pdf');
const PORT = 4175;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Simple static file server
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(DIST_DIR, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    const indexPath = path.join(DIST_DIR, 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(indexPath).pipe(res);
  }
});

async function run() {
  server.listen(PORT, async () => {
    console.log(`Server running at http://localhost:${PORT}`);

    const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1200,1600']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

    try {
      console.log('Navigating to local portfolio server...');
      await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 2000));

      // Make the printable container visible for printing
      await page.evaluate(() => {
        const printEl = document.getElementById('printable-resume');
        const printContainer = document.querySelector('.print-only');
        if (printContainer) {
          printContainer.classList.remove('hidden');
          printContainer.style.display = 'block';
        }
        const noPrintEl = document.querySelector('.no-print');
        if (noPrintEl) {
          noPrintEl.style.display = 'none';
        }
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.color = '#111827';
      });

      console.log('Generating high-resolution A4 PDF Resume (English + Persian)...');
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
          top: '10mm',
          right: '10mm',
          bottom: '10mm',
          left: '10mm'
        }
      });

      fs.writeFileSync(OUTPUT_PDF_PUBLIC, pdfBuffer);
      fs.writeFileSync(OUTPUT_PDF_ROOT, pdfBuffer);
      fs.writeFileSync(OUTPUT_PDF_DIST, pdfBuffer);

      console.log(`PDF Resume successfully generated at:\n1. ${OUTPUT_PDF_ROOT}\n2. ${OUTPUT_PDF_PUBLIC}\n3. ${OUTPUT_PDF_DIST}`);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      await browser.close();
      server.close();
      process.exit(0);
    }
  });
}

run();
