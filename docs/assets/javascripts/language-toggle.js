(() => {
  const LANGUAGE_PREFERENCE_KEY = "nm-tutorials-language";

  const normalizePathname = (value) =>
    (value || "/").replace(/\/index\.html$/, "/").replace(/\/+$/, "") || "/";

  const buildTargetUrl = (href) => {
    try {
      const target = new URL(href, window.location.origin);
      target.search = window.location.search;
      target.hash = window.location.hash;
      return target.pathname + target.search + target.hash;
    } catch (_error) {
      return href;
    }
  };

  const decorateLanguageSelect = (languageSelect) => {
    if (!languageSelect || languageSelect.dataset.toggleReady === "true") {
      return;
    }

    const languageLinks = Array.from(languageSelect.querySelectorAll(".md-select__link"));
    if (languageLinks.length !== 2) {
      return;
    }

    const currentPath = normalizePathname(window.location.pathname);
    const currentLanguage = document.documentElement.lang || "";

    let activeLink = languageLinks.find(
      (link) => normalizePathname(new URL(link.href, window.location.origin).pathname) === currentPath
    );

    if (!activeLink && currentLanguage) {
      activeLink = languageLinks.find(
        (link) => (link.getAttribute("hreflang") || "").toLowerCase() === currentLanguage.toLowerCase()
      );
    }

    if (!activeLink) {
      activeLink = languageLinks[0];
    }

    const inactiveLink = languageLinks.find((link) => link !== activeLink);
    if (!inactiveLink) {
      return;
    }

    const activeLabel = activeLink.textContent.trim();
    const inactiveLabel = inactiveLink.textContent.trim();
    const activeShort = (activeLink.getAttribute("hreflang") || activeLabel).toUpperCase();
    const inactiveShort = (inactiveLink.getAttribute("hreflang") || inactiveLabel).toUpperCase();

    const toggle = document.createElement("a");
    toggle.className = "md-header__button md-language-toggle";
    toggle.href = buildTargetUrl(inactiveLink.href);
    toggle.setAttribute("aria-label", `Switch language to ${inactiveLabel}`);
    toggle.title = `${activeLabel}/${inactiveLabel}`;
    toggle.innerHTML = `<span class="md-language-toggle__active">${activeShort}</span><span class="md-language-toggle__sep">/</span><span class="md-language-toggle__inactive">${inactiveShort}</span>`;
    toggle.addEventListener("click", () => {
      const nextLanguage = (inactiveLink.getAttribute("hreflang") || "").toLowerCase();
      if (!nextLanguage) {
        return;
      }

      try {
        window.localStorage.setItem(LANGUAGE_PREFERENCE_KEY, nextLanguage);
      } catch (_error) {
        // Ignore storage errors so navigation still works.
      }
    });

    languageSelect.dataset.toggleReady = "true";
    languageSelect.replaceWith(toggle);
    document.documentElement.classList.add("md-language-toggle-ready");
  };

  const initLanguageToggle = () => {
    const allLanguageSelects = document.querySelectorAll(".md-header__option .md-select");
    allLanguageSelects.forEach(decorateLanguageSelect);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageToggle, { once: true });
  } else {
    initLanguageToggle();
  }

  // Material can re-render header controls after navigation; re-apply each time.
  if (typeof document$ !== "undefined" && typeof document$.subscribe === "function") {
    document$.subscribe(() => {
      initLanguageToggle();
    });
  }

  const observer = new MutationObserver(() => {
    initLanguageToggle();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
