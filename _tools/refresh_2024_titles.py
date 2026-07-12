#!/usr/bin/env python3
"""Remove stale '2024' from docs front matter titles/descriptions and first H1.

Slugs, filenames and permalinks are never touched, so URLs stay unchanged.
Usage: python3 scripts/refresh_2024_titles.py [--apply]
Without --apply runs as a dry run and prints planned changes.
"""
import re
import sys
from pathlib import Path

DOCS = Path(__file__).resolve().parent.parent / "docs"
APPLY = "--apply" in sys.argv

# Order matters: longer patterns first. All case-insensitive.
PATTERNS = [
    (r"\s*[-–—:|(\[]\s*updated\s+(january|february|march|april|may|june|july|august|september|october|november|december)?\s*2024\s*[)\]]?", ""),
    (r"\s+in\s+2024\b", ""),
    (r"\s+for\s+2024\b", ""),
    (r"\s+2024\s+(guide|edition|version)\b", r" \1"),
    (r"\s*[-–—:|]\s*2024\s*$", ""),
    (r"\s*\(\s*2024\s*\)", ""),
    (r"\s+2024\s+best\s+practices\b", " Best Practices"),
    (r"\s+2024\b", ""),
]


def clean(text):
    out = text
    for pat, repl in PATTERNS:
        out = re.sub(pat, repl, out, flags=re.IGNORECASE)
    out = re.sub(r"\s{2,}", " ", out).strip()
    # Orphaned "Updated May" left after the year was removed
    out = re.sub(r"\s+updated\s+(january|february|march|april|may|june|july|august|september|october|november|december)\s*[.!\"]?\s*$", "", out, flags=re.IGNORECASE)
    out = re.sub(r'updated\s+(january|february|march|april|may|june|july|august|september|october|november|december)\s*\.?"', '"', out, flags=re.IGNORECASE)
    # Trailing separators left after removing the year
    out = re.sub(r"\s*[-–—:|,]\s*$", "", out).strip()
    return out


def process(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    if not m:
        return None
    fm, body = m.group(1), m.group(2)
    changes = []

    def fix_field(field, fm_text):
        pat = re.compile(rf"^({field}:\s*)(.+)$", re.M)
        fm_match = pat.search(fm_text)
        if not fm_match:
            return fm_text
        value = fm_match.group(2).strip()
        if "2024" not in value:
            return fm_text
        quote = ""
        raw = value
        if raw[0] in "\"'" and raw[-1] == raw[0]:
            quote = raw[0]
            raw = raw[1:-1]
        new_raw = clean(raw)
        if new_raw != raw:
            changes.append((field, raw, new_raw))
            return pat.sub(lambda mm: mm.group(1) + quote + new_raw + quote, fm_text, count=1)
        return fm_text

    fm = fix_field("title", fm)
    fm = fix_field("description", fm)

    # First markdown H1 in the body
    h1 = re.compile(r"^(#\s+)(.+)$", re.M)
    h1_match = h1.search(body)
    if h1_match and "2024" in h1_match.group(2):
        new_h1 = clean(h1_match.group(2))
        if new_h1 != h1_match.group(2):
            changes.append(("h1", h1_match.group(2), new_h1))
            body = body[: h1_match.start(2)] + new_h1 + body[h1_match.end(2):]

    if not changes:
        return None
    new_text = f"---\n{fm}\n---\n{body}"
    return new_text, changes


def main():
    touched = 0
    total_changes = 0
    for path in sorted(DOCS.glob("*.md")):
        result = process(path)
        if not result:
            continue
        new_text, changes = result
        touched += 1
        total_changes += len(changes)
        if APPLY:
            path.write_text(new_text, encoding="utf-8")
        if touched <= 15 or not APPLY and touched <= 30:
            print(f"\n{path.name}")
            for field, old, new in changes:
                print(f"  {field}: {old!r}\n    -> {new!r}")
    mode = "APPLIED" if APPLY else "DRY RUN"
    print(f"\n[{mode}] files: {touched}, field changes: {total_changes}")


if __name__ == "__main__":
    main()
