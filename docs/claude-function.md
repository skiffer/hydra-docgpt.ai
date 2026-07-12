---
layout: docs_layouts/default
title: "CLAUDE function in Google Sheets \u2014 =CLAUDE() reference"
parent: GPT for Sheets
nav_order: 51
permalink: /docs/gpt-for-sheets/claude-function
description: "Use Anthropic Claude in Google Sheets with the =CLAUDE() formula. Syntax, parameters, examples and when to pick Claude over GPT."
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

## When to pick Claude

- Long inputs: Claude handles large text fragments (reports, transcripts) well.
- Careful rewriting and summarization where tone and nuance matter.
- Cross-checking: run `=GPT()` and `=CLAUDE()` on the same rows and compare answers side by side — switching models is just a different formula name.

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. Full walkthrough: <a href="/docs/gpt-for-sheets/how-to-use-claude-in-google-sheets-in-2024">How to use Claude in Google Sheets</a>.
