---
layout: page
title: "Internal Linking Suggestions — Google Sheets AI Template"
heading: "Internal Linking Suggestions Template"
permalink: /templates/internal-linking-suggestions/
description: "Get internal link suggestions in Google Sheets: AI picks target pages and anchor text from your own URL list with =GPT(). Free SEO template, no crawler."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will it invent URLs that don't exist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not if you constrain it: the prompt includes your actual page list and instructs the model to only pick from it. That's why the template keeps the site inventory in a dedicated cell every formula references."
      }
    },
    {
      "@type": "Question",
      "name": "Where do I get my page list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Export it from your sitemap.xml, CMS or a crawl (Screaming Frog, Search Console pages report). URL plus title per line is enough — titles are what the model matches topics against."
      }
    },
    {
      "@type": "Question",
      "name": "Does it vary the anchor text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the prompt asks for descriptive, natural anchors rather than repeating the target page's exact-match keyword, and you can add your own anchor rules to the prompt text."
      }
    }
  ]
}
</script>
Internal links are the cheapest SEO win nobody gets around to — because matching every article against every other page is an N×N chore. This template does the matching: give it your page inventory once, and it suggests where each article should link, with ready-to-use anchor text.

## Setup

Put your site inventory — one `URL — page title` per line — into a single cell, `$G$1` (or a separate tab joined with `=TEXTJOIN(CHAR(10), TRUE, Pages!A:B)`).

## Layout

| Column | Content |
|---|---|
| A | Article URL or topic |
| B | Suggested internal links (generated) |

## The formula

In `B2`, then drag down:

```
=GPT("Here is my site's page list: "&$G$1&". Pick the 3 pages most relevant to link to from an article about '"&A2&"'. Only use URLs from the list. For each, return: anchor text (natural, descriptive, not exact-match) — URL — one line on where in the article it fits.")
```

## Variations

- **Reverse direction**: launching a new page? Ask which existing pages should link *to* it: `=GPT("From this page list: "&$G$1&", pick 5 pages that should add a link to my new page about '"&A2&"'. Return page URL + suggested anchor.")`.
- **Orphan check**: add a column of current inlink counts from your crawl and filter to zero — those pages go first through the reverse-direction formula.
- **Anchor diversity audit**: paste existing anchors for a target page and ask `=GPT("Do these anchors over-repeat the same phrase? Suggest 3 alternative anchors.", C2)`.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Copy the template or paste the formulas into your own sheet.
3. Drag the formula down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Related: <a href="/templates/keyword-clustering/">keyword clustering template</a> (clusters double as linking hubs), <a href="/templates/programmatic-seo-pages/">programmatic SEO template</a>, <a href="/docs/gpt-for-sheets">GPT for Sheets docs</a>.

## FAQ

**Will it invent URLs that don't exist?**

Not if you constrain it: the prompt includes your actual page list and instructs the model to only pick from it. That's why the template keeps the site inventory in a dedicated cell every formula references.

**Where do I get my page list?**

Export it from your sitemap.xml, CMS or a crawl (Screaming Frog, Search Console pages report). URL plus title per line is enough — titles are what the model matches topics against.

**Does it vary the anchor text?**

Yes — the prompt asks for descriptive, natural anchors rather than repeating the target page's exact-match keyword, and you can add your own anchor rules to the prompt text.
