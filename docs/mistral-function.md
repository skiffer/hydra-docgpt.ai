---
layout: docs_layouts/default
title: "MISTRAL function in Google Sheets \u2014 =MISTRAL() reference"
parent: GPT for Sheets
nav_order: 53
permalink: /docs/gpt-for-sheets/mistral-function
description: "Use Mistral AI in Google Sheets with the =MISTRAL() formula. Syntax, parameters and copy-paste examples for fast, low-cost bulk tasks like feed cleanup."
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

Normalize category labels in a product feed:

```
=MISTRAL("Map this category to one of: Apparel, Footwear, Accessories. Return one word.", A2)
```

Draft short LinkedIn comment replies from post text in `A2`:

```
=MISTRAL("Write a friendly one-sentence reply agreeing with this post", A2)
```

## Tips

- Mistral is a good default for simple, repetitive transformations where speed matters more than nuance — save GPT or Claude for the hard rows.
- No Mistral API key is needed — the model is built into the add-on.
- Drag down for bulk runs — up to 10,000 results per hour — then use **Replace all GPT formulas with results** in the sidebar to freeze the output.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — the default model function, same arguments
- <a href="/docs/gpt-for-sheets/gemini-function">=GEMINI()</a> — another fast option for bulk work
- <a href="/docs/gpt-for-sheets/claude-function">=CLAUDE()</a> — for tone-sensitive rewriting

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. See also: <a href="/docs/gpt-for-sheets/how-to-use-mistral-in-google-sheets-in-2024">How to use Mistral in Google Sheets</a>.
