---
layout: docs_layouts/default
title: "GPT_VISION function — analyze images in Google Sheets"
parent: GPT for Sheets
nav_order: 68
permalink: /docs/gpt-for-sheets/gpt-vision
description: "Analyze images by URL with =GPT_VISION() in Google Sheets: extract text, describe products, read screenshots. Syntax, parameters, copy-paste examples."
---

# =GPT_VISION() — ask questions about an image

`=GPT_VISION()` sends an image URL to a vision model and returns the answer to your question about it — read text from a screenshot, describe a product photo, extract fields from a scanned document. Part of <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_VISION(url, prompt)
```

| Parameter | Required | Description |
|---|---|---|
| `url` | yes | A link to the image, e.g. `"https://example.com/someimage.png"` — or a cell with the link. |
| `prompt` | yes | What to do with the image, e.g. `"extract First name and Last name"`. |

## Examples

Write alt text for a column of product image URLs in `A2` (e-commerce SEO):

```
=GPT_VISION(A2, "Write a 10-word alt text describing this product photo")
```

Extract names from scanned business cards:

```
=GPT_VISION(A2, "extract First name and Last name")
```

Pull the total from receipt photos for expense tracking:

```
=GPT_VISION(A2, "Return only the total amount and currency")
```

Audit competitor screenshots — what's the main call to action?

```
=GPT_VISION(A2, "What is the primary call-to-action button text on this page?")
```

## Common errors

- The image URL must be publicly reachable — links behind a login (including private Google Drive files) fail.
- Point the URL at the image file itself, not at an HTML page that displays it.
- Low-resolution photos read poorly; if extraction misses text, try a larger version of the image.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-create-image">=GPT_CREATE_IMAGE()</a> — generate images instead of reading them
- <a href="/docs/gpt-for-sheets/gpt-extract">=GPT_EXTRACT()</a> — extract values from text
- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — text-only prompts

## Try it

`=GPT_VISION()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
