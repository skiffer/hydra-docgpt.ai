---
layout: page
title: "Bulk Image Alt Text — Google Sheets AI Template"
heading: "Image Alt Text Template"
permalink: /templates/image-alt-text/
description: "Write SEO alt text for hundreds of images in Google Sheets with AI. Free template turns product data and page context into concise, length-safe alt tags."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does the AI look at the actual image?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — the formula works from the context you give it: product name, attributes, page topic. For catalogs and CMS exports that context is exactly what the alt text should describe, so results are accurate and consistent."
      }
    },
    {
      "@type": "Question",
      "name": "Will alt text stay under 125 characters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The prompt asks for it, and a LEN() check catches any overflow: =IF(LEN(D2)>125, GPT(\"Shorten to under 125 characters, keep meaning\", D2), D2)."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an API key?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. GPT, Claude, Gemini, Mistral and Perplexity models are built into GPT for Sheets — install the add-on and the formulas work immediately."
      }
    }
  ]
}
</script>
Missing alt text is one of the most common findings in any site audit — and one of the most tedious to fix by hand. This template writes descriptive, keyword-aware alt attributes for an entire image list from the data you already have about each image.

## Layout

| Column | Content |
|---|---|
| A | Image filename or URL |
| B | What the image shows (product name, attributes, page context) |
| C | Target keyword (optional) |
| D | Generated alt text |

Column B is the key: for e-commerce it's usually a straight paste from the product feed (name + material + color); for blog images it's the article title plus a short note like "screenshot of the settings panel".

## The formula

In `D2`, then drag down:

```
=GPT("Write alt text under 125 characters for this image. Describe what it shows, plainly and specifically. No 'image of', no keyword stuffing. Include '"&C2&"' only if it fits naturally. Return only the alt text.", A2&" — "&B2)
```

Enforce the length limit after generation:

```
=IF(LEN(D2)>125, GPT("Shorten to under 125 characters, keep meaning", D2), D2)
```

## Variations

- **Decorative images**: add a triage column — `=GPT("Is this image informative or decorative? Answer one word.", B2)` — and leave alt text empty for decorative ones (empty alt is correct there).
- **Multilingual sites**: add the language to the prompt ("Write the alt text in German") or generate once and translate in a second column.
- **Audit mode**: paste existing alt text into a column and ask `=GPT("Rate this alt text 1-10 for accessibility and specificity, then suggest a better version.", D2)`.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Copy the template or paste the formulas into your own sheet.
3. Drag the formula down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Related: <a href="/docs/ai-prompts/craft-seo-blog-image-briefs-in-2024">SEO blog image briefs</a>, <a href="/templates/bulk-product-descriptions/">bulk product descriptions template</a>.

## FAQ

**Does the AI look at the actual image?**

No — the formula works from the context you give it: product name, attributes, page topic. For catalogs and CMS exports that context is exactly what the alt text should describe, so results are accurate and consistent.

**Will alt text stay under 125 characters?**

The prompt asks for it, and a LEN() check catches any overflow: =IF(LEN(D2)>125, GPT("Shorten to under 125 characters, keep meaning", D2), D2).

**Do I need an API key?**

No. GPT, Claude, Gemini, Mistral and Perplexity models are built into GPT for Sheets — install the add-on and the formulas work immediately.
