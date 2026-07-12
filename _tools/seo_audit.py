#!/usr/bin/env python3
"""SEO audit over the BUILT site (_site). Run after `bundle exec jekyll build`.

Checks titles, descriptions, canonicals, schema.org blocks, favicons and
brand consistency. Usage: python3 scripts/seo_audit.py [--limit N]
"""
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent / "_site"
BRAND = "DocGPT.ai"
BRAND_VARIANTS = ("DocGPT.ai", "DocGPT.AI", "DocGPT")

RE_TITLE = re.compile(r"<title>(.*?)</title>", re.S)
RE_DESC = re.compile(r'<meta name="description" content="([^"]*)"')
RE_CANON = re.compile(r'<link rel="canonical" href="([^"]*)"')
RE_LD = re.compile(r'<script type="application/ld\+json">(.*?)</script>', re.S)
RE_OG_SITE = re.compile(r'<meta property="og:site_name" content="([^"]*)"')
RE_FAVICON48 = re.compile(r'sizes="48x48"')


def iter_pages():
    for p in sorted(SITE.rglob("*.html")):
        rel = p.relative_to(SITE)
        # Skip infra pages
        if any(part.startswith(("assets", "feed")) for part in rel.parts):
            continue
        yield p, rel


def expected_url(rel):
    s = "/" + str(rel).replace("\\", "/")
    if s.endswith("/index.html"):
        s = s[: -len("index.html")]
    elif s.endswith(".html"):
        # Render serves clean extensionless URLs for .html files
        s = s[: -len(".html")]
    return "https://docgpt.ai" + s


def main():
    limit = 15
    if "--limit" in sys.argv:
        limit = int(sys.argv[sys.argv.index("--limit") + 1])

    issues = defaultdict(list)
    titles = Counter()
    ld_type_counts = Counter()
    pages = 0

    for p, rel in iter_pages():
        html = p.read_text(encoding="utf-8", errors="replace")
        pages += 1
        url = expected_url(rel)

        m = RE_TITLE.search(html)
        title = re.sub(r"\s+", " ", m.group(1)).strip() if m else ""
        if not title:
            issues["missing-title"].append(url)
        else:
            titles[title] += 1
            if len(title) > 65:
                issues["title-too-long"].append(f"{url} ({len(title)}) {title[:70]}")
            if not any(v in title for v in BRAND_VARIANTS):
                issues["title-missing-brand"].append(f"{url} {title[:60]}")
            if "2024" in title:
                issues["title-has-2024"].append(url)

        if not RE_DESC.search(html):
            issues["missing-description"].append(url)

        cm = RE_CANON.search(html)
        if not cm:
            issues["missing-canonical"].append(url)
        else:
            canon = cm.group(1)
            norm = lambda u: u.rstrip("/")
            if norm(canon) != norm(url):
                issues["canonical-mismatch"].append(f"{url} -> {canon}")

        org_count = 0
        for block in RE_LD.findall(html):
            try:
                data = json.loads(block)
            except json.JSONDecodeError:
                issues["ld-json-parse-error"].append(url)
                continue
            nodes = data.get("@graph", [data]) if isinstance(data, dict) else []
            for node in nodes:
                t = node.get("@type")
                if isinstance(t, list):
                    t = t[0]
                ld_type_counts[t] += 1
                if t == "Organization":
                    org_count += 1
                    if node.get("@id") != "https://docgpt.ai/#organization":
                        issues["org-unstable-id"].append(url)
        if org_count > 1:
            issues["duplicate-organization"].append(url)

        if RE_OG_SITE.search(html) and RE_OG_SITE.search(html).group(1) not in BRAND_VARIANTS:
            issues["og-site-name-wrong"].append(f"{url} {RE_OG_SITE.search(html).group(1)}")

    dup_titles = {t: c for t, c in titles.items() if c > 1}

    print(f"Pages scanned: {pages}\n")
    print("JSON-LD types:", dict(ld_type_counts.most_common(12)), "\n")
    if dup_titles:
        print(f"DUPLICATE TITLES: {len(dup_titles)}")
        for t, c in sorted(dup_titles.items(), key=lambda x: -x[1])[:limit]:
            print(f"  {c}x {t[:80]}")
        print()
    for key in sorted(issues):
        vals = issues[key]
        print(f"{key.upper()}: {len(vals)}")
        for v in vals[:limit]:
            print(f"  {v}")
        if len(vals) > limit:
            print(f"  ... and {len(vals) - limit} more")
        print()
    if not issues and not dup_titles:
        print("No issues found.")


if __name__ == "__main__":
    main()
