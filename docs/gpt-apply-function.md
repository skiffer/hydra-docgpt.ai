---
layout: docs_layouts/default
title: "GPT_APPLY function in Google Sheets — =GPT_APPLY() reference"
parent: GPT for Sheets
nav_order: 67
permalink: /docs/gpt-for-sheets/gpt-apply
description: "Apply one instruction to many cells with =GPT_APPLY() in Google Sheets — it fixes grammar by default, or rewrites, shortens, normalizes. Syntax, examples."
---

# =GPT_APPLY() — run one instruction over your text

`=GPT_APPLY()` takes a text and a task and returns the transformed text. Without a task it defaults to fixing grammar and spelling — the fastest proofreading formula in <a href="/gpt-for-sheets/">GPT for Sheets</a>. With a task, it becomes a general-purpose rewriter you drag down a column.

## Syntax

```
=GPT_APPLY(text, [task])
```

| Parameter | Required | Description |
|---|---|---|
| `text` | yes | The input text — a string or a cell reference. |
| `task` | no | What to do with the text — one cell or a string. Default: `"fix grammar and spelling"`. |

## Examples

Proofread user-submitted content in `A2` (the default task):

```
=GPT_APPLY(A2)
```

Shorten product titles for an e-commerce feed:

```
=GPT_APPLY(A2, "shorten to under 60 characters, keep brand and model")
```

Rewrite support macros in a friendlier tone:

```
=GPT_APPLY(A2, "rewrite in a warm, apologetic tone, keep it under 50 words")
```

Keep the task in one cell (`D1`) so you can change it for the whole column at once:

```
=GPT_APPLY(A2, $D$1)
```

## Tips

- `=GPT_APPLY(text, task)` is `=GPT(prompt, value)` with the arguments flipped — handy when you map it over an existing data column.
- Be explicit about what must *not* change: "keep brand names and numbers as is".
- Drag down for bulk edits — up to 10,000 results per hour — then use **Replace all GPT formulas with results** in the sidebar.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — free-form prompt plus value
- <a href="/docs/gpt-for-sheets/gpt-translate-function">=GPT_TRANSLATE()</a> — language translation
- <a href="/docs/gpt-for-sheets/gpt-summarize">=GPT_SUMMARIZE()</a> — condense instead of rewrite

## Try it

`=GPT_APPLY()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
