---
layout: docs_layouts/default
title: "GPT_FORMAT function — convert formats in Google Sheets"
parent: GPT for Sheets
nav_order: 63
permalink: /docs/gpt-for-sheets/gpt-format
description: "Convert data between formats with =GPT_FORMAT() in Google Sheets — HTML to JSON, Markdown to a table and more. Syntax, parameters, copy-paste examples."
---

# =GPT_FORMAT() — convert data between formats

`=GPT_FORMAT()` rewrites the same content in another format: HTML to JSON, Markdown to HTML, raw text to JSON-LD. The special target `"table"` splits the output across multiple cells. Part of <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_FORMAT(input, target_format, [source_format])
```

| Parameter | Required | Description |
|---|---|---|
| `input` | yes | The text to reformat — a string or a cell reference. |
| `target_format` | yes | Format to convert to: `"html"`, `"json"`, `"json-ld"`, `"markdown"`, `"table"`, … `"table"` spills the output into multiple cells. |
| `source_format` | no | Format to convert from — usually auto-detected. |

## Examples

Turn scraped HTML in `A2` into JSON for an import script:

```
=GPT_FORMAT(A2, "json", "html")
```

Convert an FAQ block into JSON-LD structured data for SEO:

```
=GPT_FORMAT(A2, "json-ld")
```

Convert a Markdown product description to HTML for your e-commerce CMS:

```
=GPT_FORMAT(A2, "html", "markdown")
```

Spread a blob of contact details across cells with the `"table"` target:

```
=GPT_FORMAT(A2, "table")
```

## Tips

- With `target_format` set to `"table"`, keep the cells to the right and below empty — the result spills, and blocked cells cause `#REF!`.
- Name the `source_format` when the input is ambiguous; it removes guesswork and stabilizes output.
- Validate machine-readable outputs (JSON, JSON-LD) before shipping — AI formatting is a draft, not a parser.
- Freeze the converted values with **Replace all GPT formulas with results** in the sidebar.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-extract">=GPT_EXTRACT()</a> — pull specific fields instead of converting everything
- <a href="/docs/gpt-for-sheets/gpt-table">=GPT_TABLE()</a> — generate a table from scratch
- <a href="/docs/gpt-for-sheets/gpt-apply">=GPT_APPLY()</a> — free-form transformations on text

## Try it

`=GPT_FORMAT()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
