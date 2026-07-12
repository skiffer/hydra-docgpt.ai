---
layout: docs_layouts/default
title: "List and table AI functions \u2014 GPT_LIST, GPT_TABLE, GPT_FILL"
parent: GPT for Sheets
nav_order: 58
permalink: /docs/gpt-for-sheets/list-and-table-functions
description: "Generate structured data in Google Sheets: =GPT_LIST() for idea lists, =GPT_TABLE() for whole tables with headers, =GPT_FILL() to continue patterns from examples."
---

# List and table functions — generate structured data

Three functions in <a href="/gpt-for-sheets/">GPT for Sheets</a> that return **ranges**, not single cells — for brainstorming, dataset scaffolding and pattern completion.

## The functions

| Function | What it does |
|---|---|
| `=GPT_LIST(prompt, [value])` | Returns a vertical list, one item per row. |
| `=GPT_HLIST(prompt, [value])` | Same, horizontally. |
| `=GPT_TABLE(prompt, headers)` | Generates a whole table under your headers. |
| `=GPT_FILL(examples, inputs)` | Learns from example rows and fills the rest. |

## Examples

20 long-tail keyword ideas:

```
=GPT_LIST("20 long-tail keywords for 'ai in google sheets', one per line")
```

A content calendar table (headers in `A1:D1`: Date, Topic, Format, CTA):

```
=GPT_TABLE("30-day content calendar for a B2B SaaS about spreadsheets", A1:D1)
```

Complete a pattern — give it 3 done rows and let it fill 300:

```
=GPT_FILL(A2:B4, A5:A305)
```

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. Recipe: <a href="/templates/social-media-calendar/">content calendar template</a>.
