# i18n

## Launching it

```
npm run build   # -> book/html/en, book/html/fr, book/pdf/*.pdf
npm run serve   # builds, then serves book/html on http://localhost:3000
```

(`npm run build` is `node i18n/build.js`, `npm run serve` is `node i18n/serve.js` —
no npm dependencies are involved, `npm` is only used to remember the commands.)

Do **not** use plain `mdbook serve` to test the language switcher or the
landing page: it only serves a single language directly at the site root
(no `/en/`, `/fr/`, ... siblings), so switching language 404s. `mdbook
serve`/`mdbook build` are still fine for iterating on the English text
itself (book.toml defaults `src` to `src/en`).

## How it works

- `src/<code>/` holds a full copy of the book for language `<code>` (e.g. `src/en`,
  `src/fr`). Files must keep the exact same relative paths across languages —
  the language switcher swaps the `/en/`/`/fr/` prefix in the URL and expects
  the rest of the path to match.
- Translations don't need to be 1:1 with the English source. Any file missing
  under `src/<code>/` (a page that hasn't been translated yet, or an image
  with on-image text that hasn't been redone) is filled in from the default
  language for the duration of that language's build and removed again
  straight after — mdbook only bundles what lives inside the src directory
  it's building, and needs every page listed in `SUMMARY.md` to actually
  exist. The result: an untranslated page still builds and shows the English
  content instead of breaking the build. To ship a real translation of a page
  or image, just commit a real file at the same relative path under
  `src/<code>/` — the build never overwrites or removes anything that's
  actually there.
- On top of that, the language switcher (`js/i18n/switcher.js`) checks the
  target page actually exists before navigating, and falls back to that
  language's home page instead of a 404 in the rare case a language's own
  `SUMMARY.md` doesn't reference the equivalent path at all.
- `i18n/languages.json` lists the languages to build.
- `i18n/build.js` runs a normal `mdbook build` once per language (overriding
  `book.src`, `book.language` and `book.title` via env vars), collects each
  into `book/html/<code>` and `book/pdf/<pdfName>`, then writes
  `book/html/index.html` from `i18n/index.template.html` — a small language
  picker that also auto-redirects returning visitors to their last choice.
- `i18n/serve.js` runs the build above and serves `book/html` with a plain
  Node http server, so the multi-language layout can be clicked through
  locally exactly as it will be deployed.
- The in-page language dropdown (`js/i18n/switcher.js`, menu bar, next to the
  theme toggle) is wired up from the `<li data-lang="...">` entries in
  `theme/index.hbs`.

## Adding a language

1. Add an entry to `i18n/languages.json`.
2. Copy `src/en` (without `img/`) to `src/<code>` and translate it
   (`SUMMARY.md` included). Keep every image reference's `../` depth
   unchanged — it must still count the file's own depth under `src/<code>`.
3. Add a matching `<li role="none"><a role="menuitem" class="theme" data-lang="<code>">...</a></li>`
   entry to the language list in `theme/index.hbs`.
4. Run `npm run serve` and click through `book/html/<code>`.
