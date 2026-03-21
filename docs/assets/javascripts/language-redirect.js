(() => {
  const languages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ""];

  const prefersGerman = languages.some((language) => /^de(?:-|$)/i.test(language));
  if (!prefersGerman) {
    return;
  }

  const normalizedPath = window.location.pathname.replace(/\/index\.html$/, "/");
  const segments = normalizedPath.split("/").filter(Boolean);

  // Only redirect from the English landing page so deep links stay stable.
  const isEnglishHome = normalizedPath.endsWith("/") && segments.length <= 1;
  if (!isEnglishHome) {
    return;
  }

  const basePath = segments.length === 1 ? `/${segments[0]}` : "";
  const targetPath = `${basePath}/de/`;

  if (normalizedPath === targetPath) {
    return;
  }

  window.location.replace(`${targetPath}${window.location.search}${window.location.hash}`);
})();
