---
layout: docs_layouts/default
title: "GPT_SUMMARIZE function — summarize text in Google Sheets"
parent: GPT for Sheets
nav_order: 62
permalink: /docs/gpt-for-sheets/gpt-summarize
description: "Summarize reviews, tickets and long text with =GPT_SUMMARIZE() in Google Sheets. Control the length ('two sentences', '50 words') — syntax and examples."
---

# =GPT_SUMMARIZE() — condense long text in a cell

`=GPT_SUMMARIZE()` turns long text — reviews, call notes, article drafts — into a short summary, in the format you choose. By default it returns three sentences. Part of <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_SUMMARIZE(text, [format])
```

| Parameter | Required | Description |
|---|---|---|
| `text` | yes | The text to summarize — a string or a cell reference. |
| `format` | no | The shape of the summary, e.g. `"two sentences"`, `"up to 100 words"`. Default: `"three sentences"`. |

## Examples

Boil each customer review in `A2` down to one line for a report:

```
=GPT_SUMMARIZE(A2, "one sentence")
```

Summarize sales-call notes for a CRM field with a word budget:

```
=GPT_SUMMARIZE(A2, "up to 50 words")
```

Turn a long article draft into bullet points:

```
=GPT_SUMMARIZE(A2, "3 bullet points")
```

Default format — three sentences:

```
=GPT_SUMMARIZE(A2)
```

## Tips

- The `format` argument is free text — "one tweet", "TL;DR in plain English", "an executive summary" all work.
- Summarize first, then run <a href="/docs/gpt-for-sheets/gpt-classify">=GPT_CLASSIFY()</a> on the summary column — shorter inputs classify more consistently.
- Drag the formula down to summarize a whole column of feedback, then use **Replace all GPT formulas with results** in the sidebar so the summaries stop re-running.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-extract">=GPT_EXTRACT()</a> — pull specific values instead of a summary
- <a href="/docs/gpt-for-sheets/gpt-apply">=GPT_APPLY()</a> — rewrite text with any instruction
- <a href="/docs/gpt-for-sheets/gpt-classify">=GPT_CLASSIFY()</a> — sort summaries into categories

## Try it

`=GPT_SUMMARIZE()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
