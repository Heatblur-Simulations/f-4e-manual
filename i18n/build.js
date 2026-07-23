#!/usr/bin/env node
// Builds every language listed in i18n/languages.json with a single command.
// Each language is a normal mdbook build (src/<code> -> book/html/<code>,
// book/pdf/output.pdf), pointed at via MDBOOK_* env overrides so book.toml
// stays untouched. See i18n/README.md for how this fits together.

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const languages = JSON.parse(fs.readFileSync(path.join(__dirname, 'languages.json'), 'utf8'));

const bookOut = path.join(root, 'book');
const htmlOut = path.join(bookOut, 'html');
const pdfOut = path.join(bookOut, 'pdf');
fs.rmSync(bookOut, { recursive: true, force: true });
fs.mkdirSync(htmlOut, { recursive: true });
fs.mkdirSync(pdfOut, { recursive: true });

// Translations don't have to be complete: any page (.md) or image missing
// under src/<lang>/ is filled in from the default language for the duration
// of that language's build and removed again straight after, so a
// not-yet-translated page still builds and shows the English content instead
// of breaking the build or 404ing. Anything actually committed under
// src/<lang>/ (a real translation, or a translated image with on-image text)
// is never touched.
const defaultLang = languages.find((l) => l.default) || languages[0];
const sharedSrc = path.join(root, 'src', defaultLang.code);

function listFiles(dir, base = dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) listFiles(full, base, out);
    else out.push(path.relative(base, full));
  }
  return out;
}

function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) removeEmptyDirs(path.join(dir, entry.name));
  }
  if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

for (const lang of languages) {
  console.log(`\n==> Building ${lang.code} (${lang.native})`);

  const langSrc = path.join(root, 'src', lang.code);
  const isDefault = lang.code === defaultLang.code;
  const filledIn = [];
  if (!isDefault) {
    for (const rel of listFiles(sharedSrc)) {
      const dest = path.join(langSrc, rel);
      if (fs.existsSync(dest)) continue; // real translation/override, keep it
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(path.join(sharedSrc, rel), dest);
      filledIn.push(dest);
    }
  }

  const langBuildDir = `book/.${lang.code}`;
  const env = {
    ...process.env,
    MDBOOK_BOOK__SRC: `src/${lang.code}`,
    MDBOOK_BOOK__LANGUAGE: lang.mdbookLang,
    MDBOOK_BOOK__TITLE: lang.title,
  };

  try {
    execFileSync('mdbook', ['build', '--dest-dir', langBuildDir], { cwd: root, env, stdio: 'inherit' });
  } finally {
    for (const file of filledIn) fs.rmSync(file, { force: true });
    if (!isDefault) removeEmptyDirs(langSrc);
  }

  fs.renameSync(path.join(root, langBuildDir, 'html'), path.join(htmlOut, lang.code));

  const builtPdf = path.join(root, langBuildDir, 'pdf', 'output.pdf');
  if (fs.existsSync(builtPdf)) {
    fs.renameSync(builtPdf, path.join(pdfOut, lang.pdfName));
  }
  fs.rmSync(path.join(root, langBuildDir), { recursive: true, force: true });
}

const chooserTemplate = fs.readFileSync(path.join(__dirname, 'index.template.html'), 'utf8');
const chooser = chooserTemplate
  .replace('__BOOK_TITLE__', languages[0].title)
  .replace('__DEFAULT_LANG__', defaultLang.code)
  .replace(
    '__LANGUAGE_LINKS__',
    languages
      .map((l) => `<a class="lang-option" href="./${l.code}/" data-lang="${l.code}">${l.native}</a>`)
      .join('\n        ')
  )
  .replace('__LANGUAGE_JSON__', JSON.stringify(languages.map((l) => l.code)));

fs.writeFileSync(path.join(htmlOut, 'index.html'), chooser);

console.log('\ni18n build complete.');
