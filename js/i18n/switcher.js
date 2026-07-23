// Language dropdown in the menu bar: rewrites its links to the equivalent
// page in each other language, and remembers the pick for the landing page.
// Translations are not guaranteed to be 1:1 with the English source (a page
// or image may not exist yet in every language), so before navigating we
// check the target page actually exists and fall back to that language's
// home page otherwise.
(function () {
    const toggle = document.getElementById('mdbook-language-toggle');
    const popup = document.getElementById('mdbook-language-list');
    if (!toggle || !popup) return;

    const currentLang = document.documentElement.lang || 'en';
    const languageRoot = new URL(path_to_root, window.location.href);
    const siteRoot = new URL('../', languageRoot);
    const relativePath = window.location.pathname.slice(languageRoot.pathname.length);

    popup.querySelectorAll('[data-lang]').forEach(function (el) {
        const lang = el.getAttribute('data-lang');
        if (lang === currentLang) {
            el.classList.add('theme-selected');
            return;
        }
        const target = new URL(lang + '/' + relativePath, siteRoot);
        const fallback = new URL(lang + '/', siteRoot);
        el.href = target.href;
        el.addEventListener('click', function (e) {
            e.preventDefault();
            try { localStorage.setItem('hb-manual-lang', lang); } catch (err) { /* ignore */ }
            fetch(target.href, { method: 'HEAD' })
                .then(function (res) {
                    window.location.href = res.ok ? target.href : fallback.href;
                })
                .catch(function () {
                    window.location.href = fallback.href;
                });
        });
    });

    function closePopup() {
        popup.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const open = popup.style.display === 'block';
        popup.style.display = open ? 'none' : 'block';
        toggle.setAttribute('aria-expanded', String(!open));
    });
    document.addEventListener('click', function (e) {
        if (!popup.contains(e.target) && e.target !== toggle) closePopup();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closePopup();
    });
})();
