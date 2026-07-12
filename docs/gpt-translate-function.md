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

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. Recipe: <a href="/templates/bulk-translation/">bulk translation template</a>.
