---
layout: docs_layouts/default
title: "Data cleaning AI functions \u2014 GPT_EXTRACT, GPT_CLASSIFY, GPT_TAG, GPT_FORMAT"
parent: GPT for Sheets
nav_order: 57
permalink: /docs/gpt-for-sheets/data-cleaning-functions
description: "Clean and structure messy data in Google Sheets with AI functions: =GPT_EXTRACT(), =GPT_CLASSIFY(), =GPT_TAG(), =GPT_FORMAT(), =GPT_SPLIT(), =GPT_APPLY(), =GPT_SUMMARIZE()."
---

# Data cleaning functions — extract, classify, tag, format

A family of functions in <a href="/gpt-for-sheets/">GPT for Sheets</a> for turning messy text into structured columns. All of them take a cell as input and are built to be dragged down thousands of rows.

## The functions

| Function | What it does |
|---|---|
| `=GPT_EXTRACT(text, to_extract)` | Pull entities out of text: emails, names, prices, SKUs. |
| `=GPT_CLASSIFY(value, categories)` | Assign one category from your list. |
| `=GPT_TAG(value, tags)` | Apply multiple tags from your list. |
| `=GPT_FORMAT(input, target_format, [source_format])` | Normalize dates, phones, addresses, casing. |
| `=GPT_SPLIT(text, split_by)` / `=GPT_HSPLIT()` | Split text into rows / columns by meaning. |
| `=GPT_APPLY(text, [task])` | Apply an edit like "fix grammar and spelling". |
| `=GPT_SUMMARIZE(text, [format])` | Summarize into a given shape ("three sentences"). |

## Examples

Extract the email from a messy signature in `A2`:

```
=GPT_EXTRACT(A2, "email address")
```

Classify leads by industry with your own taxonomy in `$F$1`:

```
=GPT_CLASSIFY(A2, $F$1)
```

Normalize phone numbers:

```
=GPT_FORMAT(A2, "+1 (XXX) XXX-XXXX")
```

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. Recipe: <a href="/templates/data-cleaning/">data cleaning template</a>.
