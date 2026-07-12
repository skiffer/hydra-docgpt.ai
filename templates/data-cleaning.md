---
layout: page
title: "Data Cleaning — Google Sheets AI Template"
heading: "Data Cleaning Template"
permalink: /templates/data-cleaning/
description: "Clean messy data in Google Sheets with AI: extract entities, normalize formats, dedupe and classify with =GPT_EXTRACT(), =GPT_FORMAT(), =GPT_CLASSIFY(). Free template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is this different from SmartFill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SmartFill guesses from patterns; these functions follow explicit instructions and your taxonomy, which makes results reproducible across the whole column."
      }
    },
    {
      "@type": "Question",
      "name": "Can it dedupe records?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Combine =GPT_FORMAT() normalization with classic UNIQUE()/COUNTIF() — normalize first so near-duplicates become exact duplicates."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data sent anywhere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cell content in the formula is sent to the selected AI model to compute the answer, same as any AI add-on. See the privacy policy for details."
      }
    }
  ]
}
</script>
Fix a messy import without regex gymnastics: extraction, normalization and categorization as drag-down formulas.

## Common fixes

| Problem | Formula |
|---|---|
| Emails buried in text | `=GPT_EXTRACT(A2, "email address")` |
| Inconsistent phone formats | `=GPT_FORMAT(A2, "+1 (XXX) XXX-XXXX")` |
| Mixed-case names | `=GPT_FORMAT(A2, "proper name casing")` |
| Free-text categories | `=GPT_CLASSIFY(A2, $F$1)` — your taxonomy in F1 |
| Ungrouped address parts | `=GPT_HSPLIT(A2, "street, city, zip, country")` |
| Grammar in descriptions | `=GPT_APPLY(A2, "fix grammar and spelling")` |

## Tips

- Work on a copy of the column; compare before/after with a simple `=A2=B2` check column.
- For huge sheets, process in chunks and use **Replace formulas with results** between chunks.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Copy the template or paste the formulas into your own sheet.
3. Drag the formula down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Function reference: <a href="/docs/gpt-for-sheets/data-cleaning-functions">data cleaning functions</a>.

## FAQ

**How is this different from SmartFill?**

SmartFill guesses from patterns; these functions follow explicit instructions and your taxonomy, which makes results reproducible across the whole column.

**Can it dedupe records?**

Combine =GPT_FORMAT() normalization with classic UNIQUE()/COUNTIF() — normalize first so near-duplicates become exact duplicates.

**Is my data sent anywhere?**

Cell content in the formula is sent to the selected AI model to compute the answer, same as any AI add-on. See the privacy policy for details.
