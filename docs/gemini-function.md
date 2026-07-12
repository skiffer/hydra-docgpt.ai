---
layout: docs_layouts/default
title: "GEMINI function in Google Sheets \u2014 =GEMINI() reference"
parent: GPT for Sheets
nav_order: 52
permalink: /docs/gpt-for-sheets/gemini-function
description: "Use Google Gemini in Google Sheets with =GEMINI(). Syntax, examples, custom API keys with GEMINI_CUSTOM and image generation with GEMINI_CREATE_IMAGE."
---

# =GEMINI() — use Google Gemini in Google Sheets

`=GEMINI()` runs Google's Gemini models from a cell. Gemini is fast and cost-effective for high-volume tasks like classification, tagging and short-form generation.

## Syntax

```
=GEMINI(prompt, [value])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | The instruction for Gemini. |
| `value` | no | Extra input appended to the prompt. |

## Related Gemini functions

```
=GEMINI_CUSTOM(apiKey, model, prompt, [value])
```

Runs Gemini with **your own Google AI API key** and an exact model name — useful when you need a specific model version or your own billing.

```
=GEMINI_CREATE_IMAGE(prompt, [aspectRatio], [model])
```

Generates an image with Gemini image models and returns a URL you can render with `=IMAGE()`. Default aspect ratio is `1:1`.

## Examples

Classify support tickets in `A2`:

```
=GEMINI("Classify as billing, bug, feature request or other. Return one word.", A2)
```

Generate a thumbnail illustration:

```
=GEMINI_CREATE_IMAGE("Flat illustration of a mail merge robot, purple palette", "16:9")
```

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. See also: <a href="/docs/gpt-for-sheets/how-to-use-gemini-in-google-sheets-in-2024">How to use Gemini in Google Sheets</a>.
