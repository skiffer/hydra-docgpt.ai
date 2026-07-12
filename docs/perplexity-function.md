---
layout: docs_layouts/default
title: "PERPLEXITY function in Google Sheets \u2014 =PERPLEXITY() reference"
parent: GPT for Sheets
nav_order: 54
permalink: /docs/gpt-for-sheets/perplexity-function
description: "Use Perplexity in Google Sheets with =PERPLEXITY() to answer questions with live web knowledge: company research, fact lookups and data enrichment."
---

# =PERPLEXITY() — web-aware AI answers in Google Sheets

`=PERPLEXITY()` is different from the other model functions: Perplexity answers with **live web knowledge**, which makes it the go-to formula for research and data enrichment — the kind of company lookups people otherwise do in tools like Clay.

## Syntax

```
=PERPLEXITY(prompt, [value])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | The question or research instruction. |
| `value` | no | Extra input appended to the prompt — e.g. a company name or domain. |

## Examples

Enrich a company list (`A2` = domain):

```
=PERPLEXITY("What does this company do? One sentence, no fluff:", A2)
```

Find the latest funding round:

```
=PERPLEXITY("Latest funding round and amount for "&A2&". Answer in the form: Round, Amount, Year")
```

## Tips

- Ask for a fixed answer format — it keeps columns consistent and easy to split.
- Combine with <a href="/docs/gpt-for-sheets/serp-function">=SERP()</a> when you need raw Google results instead of a synthesized answer.
- For emails and contacts, see the <a href="/templates/lead-enrichment/">lead enrichment template</a>.

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>.
