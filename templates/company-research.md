---
layout: page
title: "Company Research — Google Sheets AI Template"
heading: "Company Research Template"
permalink: /templates/company-research/
description: "Research hundreds of companies in Google Sheets with AI: firmographics, funding and news per row via =PERPLEXITY() web answers and =SERP(). Free template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where does the company data come from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "=PERPLEXITY() answers each question with live web knowledge, and =SERP() returns raw Google results when you want sources instead of a synthesized answer. No database subscription involved — it is web research per row."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate are firmographics like headcount and funding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As accurate as the public web. Well-covered companies come back solid; obscure ones may return estimates or blanks. Ask for the year alongside each fact so you can spot stale data, and spot-check before high-stakes use."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a Perplexity API key?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Perplexity is built into GPT for Sheets alongside GPT, Claude and Gemini — install the add-on and =PERPLEXITY() works immediately."
      }
    }
  ]
}
</script>
Turn a column of company names or domains into a firmographic table — what they do, size, HQ, funding, latest news — one web-researched answer per cell, without leaving Google Sheets.

## Layout

| Column | Content | Formula |
|---|---|---|
| A | Company domain | — |
| B | What they do | `=PERPLEXITY("What does this company do? One sentence, no marketing fluff:", A2)` |
| C | Headcount | `=PERPLEXITY("Approximate employee count for "&A2&". Answer like: 250 (2025). If unknown, say unknown.")` |
| D | HQ location | `=PERPLEXITY("Headquarters city and country of "&A2&". Answer as: City, Country")` |
| E | Funding | `=PERPLEXITY("Latest funding round for "&A2&". Answer as: Round, Amount, Year — or 'bootstrapped/unknown'")` |
| F | Latest news | `=PERPLEXITY("Most recent notable news about "&A2&", one line with the year")` |
| G | Industry | `=GPT_CLASSIFY(B2, "SaaS, e-commerce, agency, fintech, healthcare, manufacturing, other")` |

## When you need sources, not answers

`=PERPLEXITY()` synthesizes; `=SERP()` shows you the actual Google results to click through:

```
=SERP(A2&" pricing", 5)
=SERP(A2&" review OR alternative", 5)
```

## Variations

- **Fixed answer formats** — every prompt above dictates its output shape (*"Answer as: City, Country"*). Keep doing that; it is what makes the columns sortable and splittable.
- **Competitive angle** — add a column: `=PERPLEXITY("Who are the top 3 competitors of "&A2&"? Comma-separated names only.")`
- **Your own qualifying question** — *"Does this company sell to enterprises or SMBs?"*, *"Do they have a partner program?"* — anything you would have googled per company.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Paste the formulas into your own sheet with domains in column A.
3. Drag the formulas down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Function references: <a href="/docs/gpt-for-sheets/perplexity-function">=PERPLEXITY()</a> and <a href="/docs/gpt-for-sheets/serp-function">=SERP()</a>. For emails and contacts on top of firmographics, see the <a href="/templates/lead-enrichment/">lead enrichment template</a>.

## FAQ

**Where does the company data come from?**

=PERPLEXITY() answers each question with live web knowledge, and =SERP() returns raw Google results when you want sources instead of a synthesized answer. No database subscription involved — it is web research per row.

**How accurate are firmographics like headcount and funding?**

As accurate as the public web. Well-covered companies come back solid; obscure ones may return estimates or blanks. Ask for the year alongside each fact so you can spot stale data, and spot-check before high-stakes use.

**Do I need a Perplexity API key?**

No. Perplexity is built into GPT for Sheets alongside GPT, Claude and Gemini — install the add-on and =PERPLEXITY() works immediately.
