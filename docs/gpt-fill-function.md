---
layout: docs_layouts/default
title: "GPT_FILL function in Google Sheets — =GPT_FILL() reference"
parent: GPT for Sheets
nav_order: 66
permalink: /docs/gpt-for-sheets/gpt-fill
description: "Autofill ranges by example with =GPT_FILL() in Google Sheets: show a few sample rows and AI completes the rest — cleanup, enrichment. Syntax and examples."
---

# =GPT_FILL() — autofill a range from examples

`=GPT_FILL()` learns a pattern from a few example rows and applies it to the rest of your data. No prompt writing: your filled-in rows *are* the instruction. It is the closest thing to Smart Fill with an AI brain, inside <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_FILL(examples, inputs)
```

| Parameter | Required | Description |
|---|---|---|
| `examples` | yes | A range with completed examples the AI learns from, e.g. `A1:B3` (inputs + expected outputs). |
| `inputs` | yes | The column of rows to autofill, e.g. `A4:A20`. |

## Examples

Normalize messy company names — fill `B1:B3` by hand ("Apple Inc." → "Apple"), then:

```
=GPT_FILL(A1:B3, A4:A100)
```

Split full names into first names — examples in `A1:B2`, the rest autofilled:

```
=GPT_FILL(A1:B2, A3:A50)
```

Standardize phone numbers to one format for a CRM import:

```
=GPT_FILL(A1:B3, A4:A200)
```

Derive country from city the way your three examples show:

```
=GPT_FILL(A1:B3, A4:A60)
```

## Tips

- 2–3 varied examples usually beat 10 similar ones — show the edge cases, not repetitions.
- Keep `examples` as a block where the left column(s) are inputs and the right column(s) the outputs you expect.
- The result spills next to your inputs — keep the target cells empty to avoid `#REF!`.
- When the fill looks right, run **Replace all GPT formulas with results** in the sidebar so values stop recomputing.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-table">=GPT_TABLE()</a> — generate a table from a prompt
- <a href="/docs/gpt-for-sheets/gpt-list">=GPT_LIST()</a> — generate a vertical list
- <a href="/docs/gpt-for-sheets/gpt-extract">=GPT_EXTRACT()</a> — targeted extraction with an explicit instruction

## Try it

`=GPT_FILL()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
