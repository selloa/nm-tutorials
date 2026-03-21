# Night of the Meteor — music collaboration tutorials

This repository holds the **source text and tooling** for a public tutorial site. The goal is to give community composers a clear, repeatable path to contribute music to [*Night of the Meteor*](https://www.maniac-mansion-mania.de/index.php?page=projekt_night_of_the_meteor) in a meaningful way—something the project has not formally opened before (unlike collaborative graphics and animation).

The published site is built from Markdown in [`docs/`](docs/) using [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme. You can edit these files locally or with the [Cursor](https://cursor.com/) editor and its AI features; nothing here is Cursor-specific beyond that workflow.

## Live site

**Canonical URL:** [https://selloa.github.io/nm-tutorials/](https://selloa.github.io/nm-tutorials/)

The site is built and deployed by [GitHub Actions](.github/workflows/deploy.yml) on every push to `main`.

## Related links

- [Night of the Meteor project site](https://night-of-the-meteor.de/)
- [Maniac Mansion Mania community website](https://www.maniac-mansion-mania.de/)
- [Maniac Mansion Mania forum](http://www.maniac-mansion-mania.de/forum/index.php)
- [German Night of the Meteor developer forum](https://www.maniac-mansion-mania.de/forum/index.php?board=18.0)
- [English Night of the Meteor thread](https://www.maniac-mansion-mania.de/forum/index.php?board=19.0)

## Who this is for

- Composers and arrangers who want to help with the game’s music.
- Forum readers (e.g. [Maniac Mansion Mania](https://www.maniac-mansion-mania.de/)) who need a single place to read setup, formats, and process.
- Maintainers extending or translating the tutorials.

## What you will find in the tutorials

| Topic | Description |
|--------|-------------|
| Introduction | Scope of collaboration, how to get in touch, what “done” means. |
| Technical setup | Lead composer workflow: DAW habits, export mindset, references. |
| Alternatives | Other tools that can still meet the same deliverables. |
| File formats & specs | What to hand off (extensions, rates, naming)—with engine notes where verified. |
| Production pipeline | From idea → review → final files → integration. |
| Glossary | Terms that come up in SCUMM-style adventure audio discussion. |

## Repository layout

| Path | Purpose |
|------|--------|
| [`docs/`](docs/) | Tutorial Markdown (`index.md`, `setup.md`, …). |
| [`docs/assets/`](docs/assets/) | Small images or diagrams referenced from pages. |
| [`mkdocs.yml`](mkdocs.yml) | Site name, theme, navigation, plugins. |
| [`requirements.txt`](requirements.txt) | Python dependencies to build the site. |
| [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) | Builds and deploys to GitHub Pages on push to `main`. |

This repo is **documentation and static-site source only**. It is not the game repository and does not ship game binaries or full music masters unless you deliberately add small examples under `docs/assets/`.

## Local preview

Requires Python 3.10+ (recommended).

```bash
cd nm-tutorials
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python -m mkdocs serve
```

Open the URL shown in the terminal (usually `http://127.0.0.1:8000/`). On Windows, if `mkdocs` is not on your `PATH`, use `python -m mkdocs` as shown.

## Build a static site locally

```bash
python -m mkdocs build
```

Output is written to `site/`.

## Contributing

- **Small fixes** (typos, clarity): pull requests to this repo are welcome if you use GitHub; otherwise follow whatever process the project announces on the forums.
- **Substantive pipeline or format changes** should be agreed with the music lead so the docs stay aligned with the real import/build path.

## Translation sync workflow

English Markdown files in [`docs/`](docs/) are the **source of truth**. Localized pages live next to them with a locale suffix such as [`docs/index.de.md`](docs/index.de.md).

Each localized page carries a hidden `translation-sync` comment near the top that stores the hash of the English source file it currently matches. This comment does not render on the public site.

When you update an English page:

1. Update the corresponding localized page if a translation exists.
2. Refresh its sync metadata:

```bash
python scripts/check_translations.py --write docs/index.de.md
```

To check all translations locally:

```bash
python scripts/check_translations.py
```

The GitHub Actions build runs this check before `mkdocs build --strict`, so the deploy will fail if a translated page is out of sync with its English source.

## Deploy to GitHub Pages

Hosting uses **GitHub Actions** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): each push to **`main`** runs `mkdocs build --strict` and publishes to Pages. In the repo, **Settings → Pages** should use **Source: GitHub Actions**.

A **forum-ready announcement** draft lives in [`docs/forum-post-draft.md`](docs/forum-post-draft.md) (also included in the site nav).

## License

Unless you add a `LICENSE` file, clarify ownership with the *Night of the Meteor* team. Tutorial text is meant for the community; do not assume a particular license until one is chosen.
