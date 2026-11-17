const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIST_DIR = path.join(__dirname, 'dist');
const SCREENSHOTS_DIR = path.join(__dirname, 'screenshots');
const PORT = 4176;

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

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
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

    try {
      // 1. Hero Overview (English)
      console.log('Capturing 01-executive-hero-overview-en.png...');
      await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({
        path: path.join(SCREENSHOTS_DIR, '01-executive-hero-overview-en.png'),
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });

      // 2. Capabilities Section
      console.log('Capturing 02-core-capabilities-and-services.png...');
      await page.evaluate(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView();
      });
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({
        path: path.join(SCREENSHOTS_DIR, '02-core-capabilities-and-services.png'),
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });

      // 3. Flagship Case Studies Gallery
      console.log('Capturing 03-flagship-case-studies-gallery.png...');
      await page.evaluate(() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView();
      });
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({
        path: path.join(SCREENSHOTS_DIR, '03-flagship-case-studies-gallery.png'),
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });

      // 4. Executive CV / Resume View
      console.log('Capturing 04-executive-cv-resume-en.png...');
      await page.evaluate(() => {
        const el = document.getElementById('resume');
        if (el) el.scrollIntoView();
      });
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({
        path: path.join(SCREENSHOTS_DIR, '04-executive-cv-resume-en.png'),
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });

      // 5. Bilingual Persian View
      console.log('Capturing 05-bilingual-persian-experience-fa.png...');
      await page.evaluate(() => {
        const langBtn = Array.from(document.querySelectorAll('header button')).find(b => b.textContent.includes('فارسی'));
        if (langBtn) langBtn.click();
        window.scrollTo(0, 0);
      });
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({
        path: path.join(SCREENSHOTS_DIR, '05-bilingual-persian-experience-fa.png'),
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });

      console.log('All portfolio screenshots successfully captured!');
    } catch (err) {
      console.error('Screenshot capture error:', err);
    } finally {
      await browser.close();
      server.close();
      process.exit(0);
    }
  });
}

run();
