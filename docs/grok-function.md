---
layout: docs_layouts/default
title: "GROK function in Google Sheets — =GROK() reference"
parent: GPT for Sheets
nav_order: 71
permalink: /docs/gpt-for-sheets/grok-function
description: "Use Grok (xAI) in Google Sheets with the =GROK() formula. Syntax, model options, API key setup and copy-paste examples for bulk rows."
---

# =GROK() — use Grok (xAI) in Google Sheets

`=GROK()` runs xAI's Grok models from a cell in Google Sheets. Type a prompt, reference your data, drag the formula down — Grok fills the column. There is no native Grok integration for Google Workspace, so the add-on formula is the practical way to use Grok on spreadsheet data.

## Syntax

```
=GROK(prompt, [value])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | The instruction for Grok. |
| `value` | no | Extra input appended to the prompt, usually a cell reference. |

## Requirements

Unlike `=GPT()`, `=CLAUDE()` and `=GEMINI()` (built in, no keys), `=GROK()` uses **your own xAI API key**:

1. A **User Pro or Business plan** of GPT for Sheets — bring-your-own-key functions are a paid feature.
2. An **xAI API key** — see [how to get a Grok API key](/grok-api-key-google-sheets-setup/).

Add the key via **Extensions → GPT for Sheets → Set Up API Key → Grok (xAI)**. Requests then go to xAI on your key, billed by xAI at their API rates.

## Model options

Pick the model in the same Set Up API Key dialog:

| Model | When to use |
|---|---|
| `grok-4.3` | Newest flagship — hardest reasoning and writing tasks. |
| `grok-4-latest` | Best current general option. |
| `grok-3` (default) | Legacy default; stable for everyday tasks. |
| `grok-3-mini` / `grok-3-fast` / `grok-3-mini-fast` | Cheaper and faster legacy options for simple bulk transformations. |

## Examples

Research a company in `A2`:

```
=GROK("In 20 words, what does this company do and who are its customers?", A2)
```

Classify support tickets in `A2`:

```
=GROK("Classify as Billing, Bug, Feature request or Other. Return one word.", A2)
```

Draft a reply to a review in `A2`:

```
=GROK("Write a two-sentence reply to this customer review, friendly and specific", A2)
```

Score a lead row (company in `A2`, title in `B2`):

```
=GROK("Score 1-10 how well this fits an ICP of B2B SaaS marketing teams. Return the number, then a 10-word reason.", A2&" — "&B2)
```

## Tips

- Grok error in the cell usually means the key is missing or invalid — re-check **Set Up API Key**; the formula tells you which step failed.
- Costs are controlled by xAI's API pricing on your key, so `grok-3-mini` variants can make large bulk runs significantly cheaper.
- Drag down for bulk runs, then use **Replace all GPT formulas with results** in the sidebar to freeze the output and stop re-computation.
- Prefer no API keys at all? `=GPT()`, `=CLAUDE()`, `=GEMINI()`, `=MISTRAL()` and `=PERPLEXITY()` run without any key on all plans.

## Related functions

- <a href="/docs/gpt-for-sheets/deepseek-function">=DEEPSEEK()</a> — another bring-your-own-key model function
- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — built-in default, no key required
- <a href="/docs/gpt-for-sheets/perplexity-function">=PERPLEXITY()</a> — built-in web-aware research

## Try it

<a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a>. Guides: <a href="/grok-for-google-sheets-how-to-guide/">connect Grok to Google Sheets</a>, <a href="/grok-for-google-sheets-lead-enrichment/">Grok lead-enrichment formulas</a>, <a href="/grok-edit-google-sheets-ai/">can Grok edit Google Sheets?</a>
