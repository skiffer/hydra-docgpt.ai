---
layout: docs_layouts/default
title: "GPT function in Google Sheets \u2014 =GPT() reference"
parent: GPT for Sheets
nav_order: 50
permalink: /docs/gpt-for-sheets/gpt-function
description: "Syntax, parameters and examples for the =GPT() formula in Google Sheets. Generate text with AI in any cell and drag the formula down to process thousands of rows."
---

# =GPT() — generate text with AI in a cell

`=GPT()` is the core function of <a href="/gpt-for-sheets/">GPT for Sheets</a>. It sends a prompt to the model and returns the answer into the cell. Drag the formula down a column to run the same prompt against every row — that is how bulk generation works.

## Syntax

```
=GPT(prompt, [value])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | The instruction for the AI. A string or a cell reference. |
| `value` | no | Extra input appended to the prompt — usually a cell with your data. |

## Examples

Write a product description from a product name in `A2`:

```
=GPT("Write a 40-word product description for", A2)
```

Combine several cells into one prompt:

```
=GPT("Write a cold-email opening line for "&A2&", who works at "&B2)
```

Fix grammar in a column:

```
=GPT("Fix grammar and spelling, return only the corrected text", A2)
```

## Tips

- Put the instruction in row 1 once and reference it: `=GPT($D$1, A2)` — change the prompt in one place, refresh the whole column.
- Be explicit about the output: "return only X, no explanations" keeps cells clean.
- After generating, use **Replace all GPT formulas with results** in the sidebar so Sheets does not re-run formulas on refresh.
- No API key is needed — models are built in. To switch models, use <a href="/docs/gpt-for-sheets/claude-function">=CLAUDE()</a>, <a href="/docs/gpt-for-sheets/gemini-function">=GEMINI()</a>, <a href="/docs/gpt-for-sheets/mistral-function">=MISTRAL()</a> or <a href="/docs/gpt-for-sheets/perplexity-function">=PERPLEXITY()</a> with the same arguments.

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the GPT for Sheets template</a> with ready-made examples, or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install the add-on</a>.

## Related functions

- <a href="/docs/gpt-for-sheets/list-and-table-functions">=GPT_LIST(), =GPT_TABLE(), =GPT_FILL()</a> — lists and tables
- <a href="/docs/gpt-for-sheets/data-cleaning-functions">=GPT_EXTRACT(), =GPT_CLASSIFY(), =GPT_TAG()</a> — data operations
- <a href="/docs/gpt-for-sheets/gpt-translate-function">=GPT_TRANSLATE()</a> — translation
