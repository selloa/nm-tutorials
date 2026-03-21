(() => {
  const LANGUAGE_PREFERENCE_KEY = "nm-tutorials-language";

  const wireLanguageSelect = (languageSelect) => {
    if (!languageSelect || languageSelect.dataset.preferenceReady === "true") {
      return;
    }

    const languageLinks = Array.from(languageSelect.querySelectorAll(".md-select__link"));
    languageLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const nextLanguage = (link.getAttribute("hreflang") || "").toLowerCase();
        if (!nextLanguage) {
          return;
        }

        try {
          window.localStorage.setItem(LANGUAGE_PREFERENCE_KEY, nextLanguage);
        } catch (_error) {
          // Ignore storage errors so navigation still works.
        }
      });
    });

    // Persist the currently active language too, so first load from /de/ is remembered.
    const currentLanguage = (document.documentElement.lang || "").toLowerCase();
    if (currentLanguage) {
      try {
        window.localStorage.setItem(LANGUAGE_PREFERENCE_KEY, currentLanguage);
      } catch (_error) {
        // Ignore storage errors so page rendering is unaffected.
      }
    }

    languageSelect.dataset.preferenceReady = "true";
  };

  const initLanguageToggle = () => {
    const allLanguageSelects = document.querySelectorAll(".md-header__option .md-select");
    allLanguageSelects.forEach(wireLanguageSelect);
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
