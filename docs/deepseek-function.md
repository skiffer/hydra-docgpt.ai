---
layout: docs_layouts/default
title: "DEEPSEEK function in Google Sheets — =DEEPSEEK() reference"
parent: GPT for Sheets
nav_order: 72
permalink: /docs/gpt-for-sheets/deepseek-function
description: "Use DeepSeek in Google Sheets with the =DEEPSEEK() formula. Syntax, model choice, API key setup and copy-paste examples for low-cost bulk runs."
---

# =DEEPSEEK() — use DeepSeek in Google Sheets

`=DEEPSEEK()` runs DeepSeek models from a cell in Google Sheets. DeepSeek's API pricing is among the lowest of any capable model, which makes it attractive for very large bulk runs on your own key.

## Syntax

```
=DEEPSEEK(prompt, [value])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | The instruction for DeepSeek. |
| `value` | no | Extra input appended to the prompt, usually a cell reference. |

## Requirements

Like `=GROK()`, this is a bring-your-own-key function:

1. A **User Pro or Business plan** of GPT for Sheets.
2. A **DeepSeek API key** from platform.deepseek.com.

Add it via **Extensions → GPT for Sheets → Set Up API Key → DeepSeek**. Requests are billed by DeepSeek on your key.

## Model options

| Model | When to use |
|---|---|
| `deepseek-chat` (default) | Writing, extraction, classification and everyday spreadsheet text tasks. |
| `deepseek-reasoner` | Logic, math, planning and multi-step prompts — slower but more careful. |

## Examples

Summarize feedback in `A2`:

```
=DEEPSEEK("Summarize in one sentence, keep the customer's main complaint", A2)
```

Extract fields from messy text in `A2`:

```
=DEEPSEEK("Extract the email address. Return only the email or 'none'.", A2)
```

Bulk-translate descriptions in `A2`:

```
=DEEPSEEK("Translate to German, return only the translation", A2)
```

## Tips

- `deepseek-chat` covers most spreadsheet tasks; switch to `deepseek-reasoner` only when rows need multi-step logic — it is slower.
- For bulk runs, freeze results with **Replace all GPT formulas with results** when done.
- No key and no paid plan? The built-in `=GPT()`, `=CLAUDE()`, `=GEMINI()` and `=MISTRAL()` need no configuration.

## Related functions

- <a href="/docs/gpt-for-sheets/grok-function">=GROK()</a> — the other bring-your-own-key model function
- <a href="/docs/gpt-for-sheets/mistral-function">=MISTRAL()</a> — built-in fast, low-cost option
- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — built-in default

## Try it

<a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a>. See also: <a href="/can-deepseek-edit-google-sheets-ai/">can DeepSeek edit Google Sheets?</a>
