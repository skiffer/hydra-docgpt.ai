---
layout: docs_layouts/default
title: "GPT_TABLE function in Google Sheets — =GPT_TABLE() reference"
parent: GPT for Sheets
nav_order: 59
permalink: /docs/gpt-for-sheets/gpt-table
description: "Generate full tables in Google Sheets with =GPT_TABLE(): one formula spills rows and columns. Syntax, the headers parameter and copy-paste examples."
---

# =GPT_TABLE() — generate a whole table from one prompt

`=GPT_TABLE()` asks the AI for structured data and spills the answer into multiple rows and columns, starting from the cell that holds the formula. It is the fastest way in <a href="/gpt-for-sheets/">GPT for Sheets</a> to draft datasets, comparison tables and content plans.

## Syntax

```
=GPT_TABLE(prompt, [headers])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | What table to generate. A string or a cell reference. |
| `headers` | no | One cell or a range containing the column headers you want, e.g. `A1:D1`. |

## Examples

Draft a competitor comparison for research:

```
=GPT_TABLE("top 10 CRM tools with vendor, founding year and target audience")
```

Reuse your own headers — put `Keyword`, `Intent`, `Suggested title` in `A1:C1` and generate an SEO content plan under them:

```
=GPT_TABLE("20 blog post ideas about email marketing", A1:C1)
```

Build a product attribute sheet for an e-commerce category:

```
=GPT_TABLE("15 popular running shoe models with brand, drop in mm and cushioning type")
```

Seed test data for a demo file:

```
=GPT_TABLE("8 fictional customers with name, company, country and industry")
```

## Tips

- The output needs empty cells below and to the right of the formula — clear the area first or Sheets shows `#REF!`.
- Passing `headers` keeps columns in a fixed order, so you can drag other formulas against them safely.
- Once the table looks right, use **Replace all GPT formulas with results** in the sidebar so the data stops regenerating on refresh.
- AI-generated facts are drafts — verify numbers before publishing. For live data, combine with <a href="/docs/gpt-for-sheets/gpt-web-search">=GPT_WEB_SEARCH()</a>.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-list">=GPT_LIST()</a> — a single vertical list instead of a table
- <a href="/docs/gpt-for-sheets/gpt-fill">=GPT_FILL()</a> — autofill a range from examples
- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — one answer in one cell

## Try it

`=GPT_TABLE()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
