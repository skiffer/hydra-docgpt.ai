---
layout: page
title: "Product Titles Optimization — Google Sheets AI Template"
heading: "Product Titles Optimization Template"
permalink: /templates/product-titles-optimization/
description: "Clean up messy product titles for marketplaces with AI in Google Sheets. Free =GPT() template: one attribute order, casing and length across your feed."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which marketplace's title rules does the template follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Whichever you tell it. Limits differ — Amazon allows up to 200 characters, Google Shopping 150, Etsy 140 — so the prompt takes the cap as a parameter. Duplicate the output column once per channel to feed each from the same raw titles."
      }
    },
    {
      "@type": "Question",
      "name": "Will it invent attributes my titles are missing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It shouldn't, and the prompt tells it to use only the supplied text — but that means the fix for missing brands or sizes is upstream: fill the brand and category columns before running, because the model can't know what isn't in the row."
      }
    },
    {
      "@type": "Question",
      "name": "How big a feed can I clean in one run?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPT for Sheets processes up to 10,000 results per hour, so a full supplier feed normalizes in one session. Free tier included, no API keys — GPT, Claude, Gemini, Mistral and Perplexity are built in."
      }
    }
  ]
}
</script>
Supplier feeds arrive with titles like "NEW!! t-shirt blue XL cotton mens BEST PRICE" — this sheet rewrites every one into a consistent Brand–Type–Attribute–Size pattern your marketplace listings can actually rank with.

## What you need in your sheet

| Column | Content |
|---|---|
| A | Raw title (as imported) |
| B | Brand |
| C | Category / product type |
| D | Optimized title |

## The formula

In `D2`, then drag down:

```
=GPT("Rewrite this raw product title for a marketplace feed. Order: Brand, Product Type, Key Attribute, Size/Color. Title Case, no ALL-CAPS words, no promo phrases (NEW, BEST PRICE), no symbols like ~ or !!, no repeated words, under 150 characters. Use only information present in the input.", "Brand: "&B2&". Category: "&C2&". Raw title: "&A2)
```

Variations: change the cap per channel (200 characters for Amazon, 150 for Google Shopping, 140 for Etsy) and keep one output column per marketplace, or — if you maintain a keyword column — extend the prompt with `"Include the keyword '"&E2&"'."`. A `=LEN(D2)` helper flags the rare over-length result.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Import your feed and make sure brand and category columns are filled — the rewrite is only as complete as the row.
3. Drag the formula down the feed, then use **Replace all GPT formulas with results** in the sidebar before re-exporting.

Full guide: <a href="/docs/ai-prompts/optimizing-ecommerce-seo-titles-and-descriptions">Optimizing e-commerce SEO titles and descriptions</a>.

## FAQ

**Which marketplace's title rules does the template follow?**

Whichever you tell it. Limits differ — Amazon allows up to 200 characters, Google Shopping 150, Etsy 140 — so the prompt takes the cap as a parameter. Duplicate the output column once per channel to feed each from the same raw titles.

**Will it invent attributes my titles are missing?**

It shouldn't, and the prompt tells it to use only the supplied text — but that means the fix for missing brands or sizes is upstream: fill the brand and category columns before running, because the model can't know what isn't in the row.

**How big a feed can I clean in one run?**

GPT for Sheets processes up to 10,000 results per hour, so a full supplier feed normalizes in one session. Free tier included, no API keys — GPT, Claude, Gemini, Mistral and Perplexity are built in.
