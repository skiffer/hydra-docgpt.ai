---
layout: docs_layouts/default
title: "GPT_LIST function in Google Sheets — =GPT_LIST() reference"
parent: GPT for Sheets
nav_order: 65
permalink: /docs/gpt-for-sheets/gpt-list
description: "Generate vertical lists with =GPT_LIST() in Google Sheets — keyword ideas, product names and FAQ questions spill down a column. Syntax and examples."
---

# =GPT_LIST() — generate a vertical list from a prompt

`=GPT_LIST()` asks the AI for a list and spills each item into its own cell, straight down the column. Ideas, keywords, questions, names — one formula, one ready-to-use column. Part of <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_LIST(prompt, [value])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | What list to generate — a string or a cell reference. |
| `value` | no | One cell or a range with extra input appended to the prompt. |

## Examples

Brainstorm long-tail keywords around a seed keyword in `A1` (SEO):

```
=GPT_LIST("15 long-tail keyword ideas for", A1)
```

Draft FAQ questions for a product page:

```
=GPT_LIST("10 questions customers ask before buying", A2)
```

Build an outreach angle list for a sales campaign:

```
=GPT_LIST("8 pain points of e-commerce managers that our mail merge tool solves")
```

Generate name candidates for a new feature:

```
=GPT_LIST("12 short names for a Google Sheets AI autofill feature")
```

## Tips

- Items spill downward — leave the cells below the formula empty or Sheets shows `#REF!`.
- Say how many items you want in the prompt ("10 questions") — you get a predictable range size.
- Need the list to go sideways instead? `=GPT_HLIST()` takes the same arguments and spills horizontally.
- Happy with the list? Use **Replace all GPT formulas with results** in the sidebar to freeze it before sorting or editing.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-table">=GPT_TABLE()</a> — multiple columns, not just one list
- <a href="/docs/gpt-for-sheets/gpt-fill">=GPT_FILL()</a> — continue a pattern from examples
- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — one answer in one cell

## Try it

`=GPT_LIST()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
