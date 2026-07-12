---
layout: page
title: "SEO Meta Titles & Descriptions — Google Sheets AI Template"
heading: "SEO Meta Tags Template"
permalink: /templates/seo-meta-tags/
description: "Generate meta titles and descriptions for hundreds of pages in Google Sheets with AI. Free template with length-safe =GPT() formulas for CTR-oriented snippets."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can it audit existing meta tags?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — import your pages with URL and current title, then ask: =GPT(\"Rate this meta title 1-10 for CTR and suggest a better one\", A2)."
      }
    },
    {
      "@type": "Question",
      "name": "Will titles stay under 60 characters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The prompt asks for it and the LEN() check catches overflows — combine both for a guaranteed-safe column."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work for descriptions in other languages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, add the language to the prompt or chain =GPT_TRANSLATE() after generation."
      }
    }
  ]
}
</script>
Write meta titles and descriptions for an entire site in one sheet — length-safe, keyword-aware, ready to paste into your CMS.

## Layout

| Column | Content |
|---|---|
| A | Page URL or topic |
| B | Target keyword |
| C | Meta title (generated) |
| D | Meta description (generated) |

## The formulas

```
=GPT("Write a meta title under 60 characters with the keyword '"&B2&"' near the start. Compelling, no clickbait. Return only the title.", A2)
```

```
=GPT("Write a meta description under 155 characters for this page. Include '"&B2&"' and a reason to click. Return only the description.", A2)
```

Enforce limits after generation: `=IF(LEN(C2)>60, GPT("Shorten to under 60 chars, keep meaning", C2), C2)`.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Copy the template or paste the formulas into your own sheet.
3. Drag the formula down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Related: <a href="/docs/ai-prompts/boost-clicks-with-high-ctr-meta-descriptions">high-CTR meta descriptions prompts</a>, <a href="/templates/programmatic-seo-pages/">programmatic SEO template</a>.

## FAQ

**Can it audit existing meta tags?**

Yes — import your pages with URL and current title, then ask: =GPT("Rate this meta title 1-10 for CTR and suggest a better one", A2).

**Will titles stay under 60 characters?**

The prompt asks for it and the LEN() check catches overflows — combine both for a guaranteed-safe column.

**Does it work for descriptions in other languages?**

Yes, add the language to the prompt or chain =GPT_TRANSLATE() after generation.
