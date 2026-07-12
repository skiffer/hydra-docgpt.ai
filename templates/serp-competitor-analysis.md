---
layout: page
title: "SERP Competitor Analysis — Google Sheets AI Template"
heading: "SERP Competitor Analysis Template"
permalink: /templates/serp-competitor-analysis/
description: "Analyze the top 10 ranking pages per keyword in Google Sheets: pull live titles with =SERP(), summarize angles and find gaps with =GPT(). Free template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where does the SERP data come from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "=SERP() fetches live Google search results — titles, links and snippets — directly into the sheet. No separate rank tracker or scraper needed."
      }
    },
    {
      "@type": "Question",
      "name": "How many keywords can I analyze in one run?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One row per keyword, so as many as your sheet holds. Formulas process at up to 10,000 results per hour — a 200-keyword competitive sweep completes in minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Can it tell me what angle to take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That's the point of the gap column: =GPT() reads the ten ranking titles and snippets and names the angle none of them own — your differentiation before you write a word."
      }
    }
  ]
}
</script>
Before you write a page, look at who you have to beat. This template pulls the live top 10 for each keyword and has AI read the SERP for you: what formats rank, what angle everyone repeats, and what's missing.

## Layout

| Column | Content | Formula |
|---|---|---|
| A | Keyword | — |
| B | Top 10 results | `=SERP(A2, 10)` |
| C | What ranks | generated |
| D | Common angle | generated |
| E | The gap | generated |

## The formulas

Format and page-type read-out (`C2`):

```
=GPT("These are the top Google results for '"&A2&"'. What content formats dominate — guides, listicles, tools, product pages? One line.", B2)
```

The angle everyone repeats (`D2`):

```
=GPT("Summarize the shared angle and promise across these ranking titles and snippets in one sentence.", B2)
```

The gap a new page could own (`E2`):

```
=GPT("What angle, audience or format is missing from these results that a new page could own? Be specific, one sentence.", B2)
```

## Variations

- **Title pattern mining**: `=GPT("Extract the recurring title patterns (numbers, years, power words) from these results as a bullet list.", B2)` — useful before writing your own meta titles.
- **Question research**: `=PERPLEXITY("What questions do people ask about "&A2&"? List 5.")` adds web-sourced questions next to the SERP snapshot.
- **Track over time**: paste values weekly (Replace formulas with results) into dated tabs and diff the SERPs to spot new entrants.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Copy the template or paste the formulas into your own sheet.
3. Drag the formula down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Related: <a href="/docs/gpt-for-sheets/serp-function">=SERP() reference</a>, <a href="/docs/gpt-for-sheets/get-list-of-competitors-from-the-web-search-in-google-sheets">get competitors from web search</a>, <a href="/templates/programmatic-seo-pages/">programmatic SEO template</a>.

## FAQ

**Where does the SERP data come from?**

=SERP() fetches live Google search results — titles, links and snippets — directly into the sheet. No separate rank tracker or scraper needed.

**How many keywords can I analyze in one run?**

One row per keyword, so as many as your sheet holds. Formulas process at up to 10,000 results per hour — a 200-keyword competitive sweep completes in minutes.

**Can it tell me what angle to take?**

That's the point of the gap column: =GPT() reads the ten ranking titles and snippets and names the angle none of them own — your differentiation before you write a word.
