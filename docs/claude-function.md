---
layout: docs_layouts/default
title: "CLAUDE function in Google Sheets \u2014 =CLAUDE() reference"
parent: GPT for Sheets
nav_order: 51
permalink: /docs/gpt-for-sheets/claude-function
description: "Use Anthropic Claude in Google Sheets with the =CLAUDE() formula — summarize feedback and rewrite copy in bulk. Syntax, examples, no API key needed."
---

# =CLAUDE() — use Anthropic Claude in Google Sheets

`=CLAUDE()` sends a prompt to Anthropic's Claude models and returns the answer in the cell. No Anthropic API key is required — the model is built into <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=CLAUDE(prompt, [value])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | The instruction for Claude. A string or a cell reference. |
| `value` | no | Extra input appended to the prompt — usually a cell with your data. |

## Examples

Summarize customer feedback in `A2`:

```
=CLAUDE("Summarize this feedback in one sentence and name the main complaint", A2)
```

Rewrite marketing copy in a specific tone:

```
=CLAUDE("Rewrite in a friendly, non-salesy tone, keep under 30 words", A2)
```

Digest long call transcripts pasted in `A2` (Claude handles long inputs well):

```
=CLAUDE("List the action items from this transcript as short bullet points", A2)
```

Localize marketing copy with tone preserved:

```
=CLAUDE("Translate to German, keep the playful tone and brand names in English", A2)
```

## When to pick Claude

- Long inputs: Claude handles large text fragments (reports, transcripts) well.
- Careful rewriting and summarization where tone and nuance matter.
- Cross-checking: run `=GPT()` and `=CLAUDE()` on the same rows and compare answers side by side — switching models is just a different formula name.
- Drag the formula down for bulk runs, then use **Replace all GPT formulas with results** in the sidebar to freeze the answers.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — the default model function, same arguments
- <a href="/docs/gpt-for-sheets/gemini-function">=GEMINI()</a> — Google's Gemini models
- <a href="/docs/gpt-for-sheets/mistral-function">=MISTRAL()</a> — fast, low-cost bulk tasks

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. Full walkthrough: <a href="/docs/gpt-for-sheets/how-to-use-claude-in-google-sheets-in-2024">How to use Claude in Google Sheets</a>.
