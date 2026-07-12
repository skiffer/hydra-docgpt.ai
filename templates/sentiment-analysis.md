---
layout: page
title: "Sentiment Analysis — Google Sheets AI Template"
heading: "Sentiment Analysis Template"
permalink: /templates/sentiment-analysis/
description: "Classify reviews and NPS comments in Google Sheets with AI: sentiment, theme and quote extraction with =GPT_CLASSIFY() and =GPT_TAG(). Free template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can one comment get multiple themes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — that is what =GPT_TAG() is for. =GPT_CLASSIFY() picks exactly one category per cell; =GPT_TAG() applies every tag from your list that fits, so 'love the app but support is slow' gets both 'product' and 'support'."
      }
    },
    {
      "@type": "Question",
      "name": "How do I keep the sentiment labels consistent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fix the label set in the formula — 'positive, neutral, negative' — so the model can only answer from your taxonomy. Free-form prompts drift; a closed category list does not."
      }
    },
    {
      "@type": "Question",
      "name": "How many reviews can I analyze at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPT for Sheets processes up to 10,000 results per hour. A few thousand NPS comments with three analysis columns each is a normal batch."
      }
    }
  ]
}
</script>
A thousand NPS comments, app reviews or survey verbatims — labeled by sentiment and theme in the time it takes to pour a coffee. The pattern: closed category lists, one dimension per column.

## Layout

| Column | Content | Formula |
|---|---|---|
| A | Review / NPS comment | — |
| B | Sentiment | `=GPT_CLASSIFY(A2, "positive, neutral, negative")` |
| C | Themes | `=GPT_TAG(A2, "pricing, support, product quality, shipping, onboarding, bugs")` |
| D | Key quote | `=GPT_EXTRACT(A2, "the single most quotable phrase")` |

Pivot on B and C and you have a sentiment-by-theme report your team will actually read.

## Variations

- **Finer scale** — `=GPT_CLASSIFY(A2, "very negative, negative, neutral, positive, very positive")` when three buckets flatten too much.
- **Churn risk flag** — `=GPT_CLASSIFY(A2, "mentions leaving or cancelling, no churn signal")` on support tickets and NPS detractors.
- **Multilingual feedback** — translate first with `=GPT_TRANSLATE(A2, "English")` in a helper column, then classify the translation so one taxonomy covers every market.
- **Executive summary** — one cell over the whole range: `=GPT_SUMMARIZE(TEXTJOIN(" | ", TRUE, A2:A200), "5 bullet points of the main complaints and praises")`.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Paste the formulas next to your feedback column and adjust the category lists to your product.
3. Drag the formulas down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Function reference: <a href="/docs/gpt-for-sheets/gpt-functions">GPT functions for Google Sheets</a>. Coding open-ended survey questions? The <a href="/templates/market-research-survey-coding/">survey coding template</a> goes deeper.

## FAQ

**Can one comment get multiple themes?**

Yes — that is what =GPT_TAG() is for. =GPT_CLASSIFY() picks exactly one category per cell; =GPT_TAG() applies every tag from your list that fits, so "love the app but support is slow" gets both "product" and "support".

**How do I keep the sentiment labels consistent?**

Fix the label set in the formula — "positive, neutral, negative" — so the model can only answer from your taxonomy. Free-form prompts drift; a closed category list does not.

**How many reviews can I analyze at once?**

GPT for Sheets processes up to 10,000 results per hour. A few thousand NPS comments with three analysis columns each is a normal batch.
