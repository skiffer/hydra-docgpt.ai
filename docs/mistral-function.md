---
layout: docs_layouts/default
title: "MISTRAL function in Google Sheets \u2014 =MISTRAL() reference"
parent: GPT for Sheets
nav_order: 53
permalink: /docs/gpt-for-sheets/mistral-function
description: "Use Mistral AI in Google Sheets with the =MISTRAL() formula. Syntax, parameters and examples for fast, low-cost bulk text tasks."
---

# =MISTRAL() — use Mistral AI in Google Sheets

`=MISTRAL()` runs Mistral models from a cell. Mistral is a strong choice for fast, low-cost bulk processing and for European data-residency preferences.

## Syntax

```
=MISTRAL(prompt, [value])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | The instruction for Mistral. |
| `value` | no | Extra input appended to the prompt. |

## Examples

Bulk-shorten titles in `A2` to 60 characters:

```
=MISTRAL("Shorten to under 60 characters, keep the key message", A2)
```

Translate French product feedback to English:

```
=MISTRAL("Translate to English, return only the translation", A2)
```

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. See also: <a href="/docs/gpt-for-sheets/how-to-use-mistral-in-google-sheets-in-2024">How to use Mistral in Google Sheets</a>.
