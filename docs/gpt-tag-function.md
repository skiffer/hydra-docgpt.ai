---
layout: docs_layouts/default
title: "GPT_TAG function in Google Sheets — =GPT_TAG() reference"
parent: GPT for Sheets
nav_order: 64
permalink: /docs/gpt-for-sheets/gpt-tag
description: "Auto-tag rows of text with =GPT_TAG() in Google Sheets: apply your own labels to reviews, tickets and products in bulk. Syntax, parameters and examples."
---

# =GPT_TAG() — apply all relevant labels to a text

`=GPT_TAG()` reads a text and attaches every label that fits — unlike <a href="/docs/gpt-for-sheets/gpt-classify">=GPT_CLASSIFY()</a>, which picks exactly one. Feed it your own tag list or let the model tag freely. Part of <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_TAG(value, [tags])
```

| Parameter | Required | Description |
|---|---|---|
| `value` | yes | The text to tag — a string or a cell reference. |
| `tags` | no | The tags to choose from, e.g. `"food, positive, negative"`. Comma-separated values or a range. Empty = the model picks tags itself. |

## Examples

Tag app-store reviews in `A2` with your feedback taxonomy:

```
=GPT_TAG(A2, "pricing, performance, design, support, feature request")
```

Tag products for filtered navigation in an online store:

```
=GPT_TAG(A2, "vegan, gluten-free, organic, sugar-free")
```

Keep the tag list in a range (`F1:F15`) so the whole team edits one place:

```
=GPT_TAG(A2, $F$1:$F$15)
```

Let the model suggest tags freely for a first pass over blog posts:

```
=GPT_TAG(A2)
```

## Tips

- Providing a fixed `tags` list keeps output consistent — free tagging is great for discovery, bad for filters.
- Count rows per tag afterwards with `COUNTIF(B:B, "*pricing*")` since several tags share a cell.
- Drag the formula down for bulk tagging — up to 10,000 results per hour — then use **Replace all GPT formulas with results** in the sidebar.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-classify">=GPT_CLASSIFY()</a> — exactly one category per row
- <a href="/docs/gpt-for-sheets/gpt-extract">=GPT_EXTRACT()</a> — pull values out of text
- <a href="/docs/gpt-for-sheets/gpt-list">=GPT_LIST()</a> — generate a list of ideas or items

## Try it

`=GPT_TAG()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
