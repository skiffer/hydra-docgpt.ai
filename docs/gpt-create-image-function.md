---
layout: docs_layouts/default
title: "GPT_CREATE_IMAGE function — AI images in Google Sheets"
parent: GPT for Sheets
nav_order: 70
permalink: /docs/gpt-for-sheets/gpt-create-image
description: "Generate images from text with =GPT_CREATE_IMAGE() in Google Sheets using DALL·E and GPT image models. Returns an image URL — syntax, sizes, examples."
---

# =GPT_CREATE_IMAGE() — generate images from a prompt

`=GPT_CREATE_IMAGE()` sends a description to OpenAI's image models and returns the URL of the generated image — render it right in the sheet with `=IMAGE()`. Drag it down a column of prompts to batch-produce visuals. Part of <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_CREATE_IMAGE(prompt, [size], [model])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | Description of the image to generate. |
| `size` | no | `"1024x1024"` (default), `"1792x1024"`, `"1024x1792"` for DALL·E 3; `"256x256"`, `"512x512"`, `"1024x1024"` for DALL·E 2; `"1024x1024"`, `"1536x1024"`, `"1024x1536"` for GPT image models. |
| `model` | no | `"dall-e-3"` (default), `"dall-e-2"`, `"gpt-image-2"`, `"gpt-image-1.5"`, `"gpt-image-1"`, `"gpt-image-1-mini"` or `"chatgpt-image-latest"`. |

## Examples

Generate a blog header from the post title in `A2` and preview it:

```
=IMAGE(GPT_CREATE_IMAGE("Minimal flat illustration for a blog post titled: "&A2, "1792x1024"))
```

Batch product-concept mockups for an e-commerce moodboard:

```
=GPT_CREATE_IMAGE("Studio photo of "&A2&" on a white background")
```

Square social-media visuals with a GPT image model:

```
=GPT_CREATE_IMAGE(A2, "1024x1024", "gpt-image-1")
```

Quick low-cost drafts with DALL·E 2 before rendering finals:

```
=GPT_CREATE_IMAGE(A2, "512x512", "dall-e-2")
```

## Tips

- The function returns a URL, not a picture — wrap it in `=IMAGE(...)` to display, or keep the URL column for exporting.
- Generated image URLs are typically temporary — download or re-host images you want to keep.
- Match `size` to `model`: each model accepts only its own size list (see the table above), otherwise the request fails.
- Freeze results with **Replace all GPT formulas with results** in the sidebar so images are not regenerated on refresh.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-vision">=GPT_VISION()</a> — analyze existing images
- <a href="/docs/gpt-for-sheets/gemini-function">=GEMINI()</a> — includes `GEMINI_CREATE_IMAGE()` for Gemini image models
- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — text generation

## Try it

`=GPT_CREATE_IMAGE()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.
