---
layout: docs_layouts/default
title: "GPT_EXTRACT function — extract data in Google Sheets"
parent: GPT for Sheets
nav_order: 60
permalink: /docs/gpt-for-sheets/gpt-extract
description: "Pull emails, names, prices or any field out of messy text with =GPT_EXTRACT() in Google Sheets. Syntax, parameters and examples for lead lists and cleanup."
---

# =GPT_EXTRACT() — pull structured values out of messy text

`=GPT_EXTRACT()` reads a text and returns just the values you ask for, comma-separated. Where `REGEXEXTRACT()` needs a pattern, `=GPT_EXTRACT()` understands meaning — "company names", "the price", "the person's role" — which makes it the go-to cleanup formula in <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_EXTRACT(text, to_extract)
```

| Parameter | Required | Description |
|---|---|---|
| `text` | yes | The input text to extract from — usually a cell reference. |
| `to_extract` | yes | What to pull out, e.g. `"email, country"`. Comma-separated values or a range. |

## Examples

Get emails out of scraped "Contact us" text in `A2` (lead list building):

```
=GPT_EXTRACT(A2, "email")
```

Pull company names from a LinkedIn bio:

```
=GPT_EXTRACT("I worked at Apple for 5 years and at Amazon for 3 years.", "companies")
```

Extract several fields at once from an order confirmation email in `A2`:

```
=GPT_EXTRACT(A2, "order number, total amount, delivery date")
```

Mine product specs from an e-commerce description:

```
=GPT_EXTRACT(A2, "material, color, weight")
```

## Tips

- Multiple fields come back comma-separated — wrap the result with `SPLIT(cell, ",")` to break them into columns.
- If a field is missing from the text, the model may say so in words; add "return N/A if not found" style instructions via <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> when you need strict output.
- Drag the formula down to process a whole column — GPT for Sheets handles up to 10,000 results per hour.
- Finished extracting? Use **Replace all GPT formulas with results** in the sidebar to freeze the values.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-classify">=GPT_CLASSIFY()</a> — put each row into one category
- <a href="/docs/gpt-for-sheets/gpt-tag">=GPT_TAG()</a> — apply multiple labels to a text
- <a href="/docs/gpt-for-sheets/gpt-format">=GPT_FORMAT()</a> — convert between data formats

## Try it

`=GPT_EXTRACT()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
