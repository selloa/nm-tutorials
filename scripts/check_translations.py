from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = REPO_ROOT / "docs"
TRANSLATION_PATTERN = re.compile(
    r"^(?P<stem>.+)\.(?P<locale>[a-z]{2}(?:_[A-Z]{2})?)\.md$"
)
METADATA_PATTERN = re.compile(r"<!--\s*translation-sync:\s*(\{.+\})\s*-->")


def normalize_text(path: Path) -> str:
    return path.read_text(encoding="utf-8").replace("\r\n", "\n")


def compute_hash(path: Path) -> str:
    content = normalize_text(path).encode("utf-8")
    return hashlib.sha256(content).hexdigest()


def find_translation_files() -> list[Path]:
    matches: list[Path] = []
    for path in DOCS_DIR.rglob("*.md"):
        if TRANSLATION_PATTERN.match(path.name):
            matches.append(path)
    return sorted(matches)


def source_for_translation(path: Path) -> tuple[str, Path]:
    match = TRANSLATION_PATTERN.match(path.name)
    if not match:
        raise ValueError(f"Not a localized markdown file: {path}")
    source_name = f"{match.group('stem')}.md"
    return match.group("locale"), path.with_name(source_name)


def read_metadata(path: Path) -> tuple[dict[str, str] | None, int]:
    lines = normalize_text(path).split("\n")
    scan_limit = min(len(lines), 5)
    for index in range(scan_limit):
        line = lines[index].strip()
        match = METADATA_PATTERN.fullmatch(line)
        if match:
            try:
                return json.loads(match.group(1)), index
            except json.JSONDecodeError as exc:
                raise ValueError(f"Invalid translation metadata in {path}: {exc}") from exc
    return None, -1


def build_metadata(source: Path) -> dict[str, str]:
    relative_source = source.relative_to(DOCS_DIR).as_posix()
    return {
        "source": relative_source,
        "source_hash": f"sha256:{compute_hash(source)}",
    }


def metadata_line(source: Path) -> str:
    return f"<!-- translation-sync: {json.dumps(build_metadata(source), ensure_ascii=True)} -->"


def update_translation_metadata(path: Path) -> None:
    _locale, source = source_for_translation(path)
    if not source.exists():
        raise FileNotFoundError(f"Missing source file for {path}: {source}")

    lines = normalize_text(path).split("\n")
    metadata, metadata_index = read_metadata(path)
    new_line = metadata_line(source)

    if metadata is None:
        insert_at = 1 if lines and lines[0].startswith("# ") else 0
        lines.insert(insert_at, new_line)
        if insert_at == 1 and (len(lines) <= insert_at + 1 or lines[insert_at + 1] != ""):
            lines.insert(insert_at + 1, "")
    else:
        lines[metadata_index] = new_line

    path.write_text("\n".join(lines).rstrip("\n") + "\n", encoding="utf-8")


def check_translation(path: Path) -> str | None:
    locale, source = source_for_translation(path)
    if not source.exists():
        return (
            f"{path.relative_to(REPO_ROOT)}: missing English source "
            f"{source.relative_to(REPO_ROOT)}"
        )

    metadata, _metadata_index = read_metadata(path)
    if metadata is None:
        return (
            f"{path.relative_to(REPO_ROOT)}: missing translation-sync metadata. "
            f"Run `python scripts/check_translations.py --write {path.relative_to(REPO_ROOT).as_posix()}`"
        )

    expected_source = source.relative_to(DOCS_DIR).as_posix()
    if metadata.get("source") != expected_source:
        return (
            f"{path.relative_to(REPO_ROOT)}: metadata source is "
            f"{metadata.get('source')!r}, expected {expected_source!r}"
        )

    expected_hash = f"sha256:{compute_hash(source)}"
    if metadata.get("source_hash") != expected_hash:
        return (
            f"{path.relative_to(REPO_ROOT)}: {locale} translation is out of sync with "
            f"{source.relative_to(REPO_ROOT)}. Update the translation, then run "
            f"`python scripts/check_translations.py --write {path.relative_to(REPO_ROOT).as_posix()}`"
        )

    return None


def write_targets(targets: list[Path]) -> int:
    for path in targets:
        update_translation_metadata(path)
        print(f"Updated metadata: {path.relative_to(REPO_ROOT)}")
    return 0


def check_targets(targets: list[Path]) -> int:
    failures = [message for path in targets if (message := check_translation(path))]
    if failures:
        print("Translation sync check failed:", file=sys.stderr)
        for failure in failures:
            print(f"- {failure}", file=sys.stderr)
        return 1

    print(f"Translation sync check passed for {len(targets)} localized file(s).")
    return 0


def resolve_targets(requested_paths: list[str]) -> list[Path]:
    if not requested_paths:
        return find_translation_files()

    resolved: list[Path] = []
    for value in requested_paths:
        candidate = (REPO_ROOT / value).resolve()
        if not candidate.exists():
            raise FileNotFoundError(f"File not found: {value}")
        resolved.append(candidate)
    return resolved


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Check whether localized Markdown files match their English source."
    )
    parser.add_argument(
        "paths",
        nargs="*",
        help="Optional translated Markdown files to check or update.",
    )
    parser.add_argument(
        "--write",
        action="store_true",
        help="Write the current English source hash into the translation metadata.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        targets = resolve_targets(args.paths)
        if args.write:
            return write_targets(targets)
        return check_targets(targets)
    except (FileNotFoundError, ValueError) as exc:
        print(str(exc), file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
