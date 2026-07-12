---
layout: page
title: "Google Ads Copy — Google Sheets AI Template"
heading: "Google Ads Copy Template"
permalink: /templates/google-ads-copy/
description: "Generate Google Ads RSA copy in Google Sheets with AI: 30-character headlines and 90-character descriptions from your keywords. Free =GPT() template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are the 30/90 character limits actually enforced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The prompt states them explicitly, but language models occasionally run a character or two over. Add a =LEN() helper column, filter for headlines above 30 or descriptions above 90, and regenerate just those few cells before importing."
      }
    },
    {
      "@type": "Question",
      "name": "How many headlines does a responsive search ad need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An RSA accepts up to 15 headlines and 4 descriptions. The template generates 10 headlines per ad group so you can drop the weakest and still give Google plenty of distinct combinations to rotate."
      }
    },
    {
      "@type": "Question",
      "name": "Can I generate copy for hundreds of ad groups at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — one row per ad group, drag the formulas down. GPT for Sheets processes up to 10,000 results per hour, and the finished sheet maps directly onto Google Ads Editor's import format."
      }
    }
  ]
}
</script>
Fill every ad group's RSA slots from a sheet: one row per keyword theme returns ten 30-character headlines and four 90-character descriptions, ready for Google Ads Editor.

## What you need in your sheet

| Column | Content |
|---|---|
| A | Keyword / ad group theme |
| B | Landing page offer (what it promises, in one line) |
| C | Generated headlines |
| D | Generated descriptions |
| E | Length check (optional `=LEN()` helper) |

## The formula

In `C2`, then drag down:

```
=GPT("Write 10 Google Ads RSA headlines, numbered, each 30 characters or fewer including spaces. Include '"&A2&"' in at least 3. Mix benefit, feature and CTA headlines; at most one exclamation mark across the set.", "Landing page offer: "&B2)
```

In `D2` for the descriptions:

```
=GPT("Write 4 Google Ads RSA descriptions, numbered, each 90 characters or fewer including spaces. Each states one concrete benefit and ends with a call to action. No superlatives you can't prove.", A2&" — "&B2)
```

Variations: push the count to 15 headlines to fill every RSA slot, pin a brand headline by adding "headline 1 must contain [brand]" to the prompt, or generate sitelink descriptions (25-character titles, 35-character lines) in extra columns.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. List one ad group per row with its keyword and landing page offer.
3. Drag the formulas down, check lengths with `=LEN()`, then use **Replace all GPT formulas with results** in the sidebar before importing.

Full guide: <a href="/docs/ai-prompts/google-ads-headlines-and-descriptions-for-2024">Google Ads headlines and descriptions</a>.

## FAQ

**Are the 30/90 character limits actually enforced?**

The prompt states them explicitly, but language models occasionally run a character or two over. Add a `=LEN()` helper column, filter for headlines above 30 or descriptions above 90, and regenerate just those few cells before importing.

**How many headlines does a responsive search ad need?**

An RSA accepts up to 15 headlines and 4 descriptions. The template generates 10 headlines per ad group so you can drop the weakest and still give Google plenty of distinct combinations to rotate.

**Can I generate copy for hundreds of ad groups at once?**

Yes — one row per ad group, drag the formulas down. GPT for Sheets processes up to 10,000 results per hour, and the finished sheet maps directly onto Google Ads Editor's import format.
