---
layout: docs_layouts/default
title: "GPT_TRANSLATE function \u2014 AI translation in Google Sheets"
parent: GPT for Sheets
nav_order: 56
permalink: /docs/gpt-for-sheets/gpt-translate-function
description: "Translate cells in Google Sheets with =GPT_TRANSLATE(): 100+ languages, context-aware, better than GOOGLETRANSLATE for marketing copy. Syntax and examples."
---

# =GPT_TRANSLATE() — AI translation in Google Sheets

`=GPT_TRANSLATE()` translates cell content with an LLM. Unlike `GOOGLETRANSLATE()`, it keeps tone, handles idioms, and can follow instructions ("keep brand names in English") — which is why teams use it to localize catalogs and marketing copy in bulk.

## Syntax

```
=GPT_TRANSLATE(text, [target_language], [source_language])
```

| Parameter | Required | Description |
|---|---|---|
| `text` | yes | Text or cell to translate. |
| `target_language` | no | Defaults to English. |
| `source_language` | no | Auto-detected when empty. |

## Examples

Translate a product description in `A2` to German:

```
=GPT_TRANSLATE(A2, "German")
```

Localize a whole catalog: put languages in row 1 (`B1`=Spanish, `C1`=French…) and drag both ways:

```
=GPT_TRANSLATE($A2, B$1)
```

Pin the source language when short strings are ambiguous (e.g. UI labels):

```
=GPT_TRANSLATE(A2, "English", "Spanish")
```

Translate customer support replies to the customer's language kept in `C2`:

```
=GPT_TRANSLATE(A2, C2)
```

## Tips

- `target_language` defaults to English — `=GPT_TRANSLATE(A2)` is a quick "translate anything to English" column.
- Leave `source_language` empty for auto-detection; set it when inputs are short or mixed-language.
- Drag the formula down to localize thousands of rows — up to 10,000 results per hour — then use **Replace all GPT formulas with results** in the sidebar.
- Need custom instructions ("keep brand names in English")? Use <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> with a translation prompt instead.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-apply">=GPT_APPLY()</a> — apply any rewriting task to a column
- <a href="/docs/gpt-for-sheets/gpt-format">=GPT_FORMAT()</a> — convert between data formats
- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — free-form prompts, including translation with special rules

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. Recipe: <a href="/templates/bulk-translation/">bulk translation template</a>.
