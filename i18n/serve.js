#!/usr/bin/env node
// Builds every language (node i18n/build.js) then serves book/html as one
// static site, so the language switcher and the landing page work exactly
// like they will once deployed. `mdbook serve` on its own only serves a
// single language at the site root, with no /en/, /fr/, ... siblings for
// the switcher to link to — that's what causes 404s when testing locally
// with just `mdbook serve`.

const { execFileSync } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const htmlOut = path.join(root, 'book', 'html');
const port = Number(process.env.PORT) || 3000;

execFileSync('node', [path.join(__dirname, 'build.js')], { cwd: root, stdio: 'inherit' });

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
};

http
  .createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';

    let filePath = path.join(htmlOut, reqPath);
    if (!filePath.startsWith(htmlOut)) {
      res.writeHead(400);
      res.end();
      return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        const notFound = path.join(htmlOut, path.dirname(reqPath), '404.html');
        fs.readFile(notFound, (err2, data2) => {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(err2 ? 'Not found' : data2);
        });
        return;
      }
      res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream' });
      res.end(data);
    });
  })
  .listen(port, () => {
    console.log(`\nServing book/html at http://localhost:${port}/`);
  });
