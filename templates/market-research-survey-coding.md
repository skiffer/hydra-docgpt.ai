---
layout: page
title: "Survey Coding for Market Research — Google Sheets AI Template"
heading: "Survey Coding Template"
permalink: /templates/market-research-survey-coding/
description: "Code open-ended survey answers into themes in Google Sheets with AI. Free template: codebook in one cell, =GPT_CLASSIFY() and =GPT_TAG() do the labeling."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I build the codebook if I don't have one yet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Let the data propose it: run =GPT(\"Read these answers and propose 6-10 recurring themes, comma-separated\") over a sample of 100-200 responses, edit the list by hand, then code the full set against your edited codebook."
      }
    },
    {
      "@type": "Question",
      "name": "Is AI coding as good as human coders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is far more consistent than tired humans on repetitive labels, and it never drifts mid-dataset. Best practice stays the same as with human coders: spot-check a sample, refine ambiguous code definitions, and re-run — a full re-code costs minutes, not days."
      }
    },
    {
      "@type": "Question",
      "name": "How many responses can I code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPT for Sheets processes up to 10,000 results per hour, so typical survey datasets — hundreds to a few thousand verbatims — code in a single run."
      }
    }
  ]
}
</script>
The verbatims question is always the most interesting and the last one analyzed — because hand-coding 2,000 open ends takes days. With a codebook in one cell and two formulas, it takes one pass.

## Layout

Put your codebook in `E1`, e.g. *"price, missing features, ease of use, support experience, performance, other"*. Then:

| Column | Content | Formula |
|---|---|---|
| A | Open-ended answer | — |
| B | Primary code | `=GPT_CLASSIFY(A2, $E$1)` |
| C | All applicable codes | `=GPT_TAG(A2, $E$1)` |
| D | Sentiment | `=GPT_CLASSIFY(A2, "positive, neutral, negative, mixed")` |

Column B gives you clean frequency counts; column C catches answers that touch several themes. Pivot on B x D for the classic theme-by-sentiment grid.

## Building the codebook from the data

No predefined codes? Sample first:

```
=GPT("Read these survey answers and propose 6-10 recurring themes as a comma-separated list, most frequent first.", TEXTJOIN(" ||| ", TRUE, A2:A150))
```

Edit the proposal by hand — merge overlaps, rename vague codes — put it in `E1`, and code the full dataset against it.

## Variations

- **Code definitions** — ambiguous themes? Define them inline: `"price: cost or value complaints, usability: hard to learn or navigate, ..."` — the classifier follows definitions, not just labels.
- **Representative quotes** — `=GPT_EXTRACT(A2, "the most vivid phrase")` gives you the quote bank for the report.
- **Multilingual surveys** — `=GPT_TRANSLATE(A2, "English")` in a helper column, then code translations so one codebook covers all markets.
- **Report paragraph** — `=GPT_SUMMARIZE(TEXTJOIN(" | ", TRUE, A2:A500), "one paragraph of key findings with rough proportions")` drafts the writeup.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Paste responses into column A, your codebook into E1, then add the formulas.
3. Drag the formulas down your rows, then use **Replace all GPT formulas with results** before pivoting.

Function reference: <a href="/docs/gpt-for-sheets/gpt-functions">GPT functions for Google Sheets</a>. For review and NPS data specifically, see the <a href="/templates/sentiment-analysis/">sentiment analysis template</a>.

## FAQ

**How do I build the codebook if I don't have one yet?**

Let the data propose it: run =GPT("Read these answers and propose 6-10 recurring themes, comma-separated") over a sample of 100-200 responses, edit the list by hand, then code the full set against your edited codebook.

**Is AI coding as good as human coders?**

It is far more consistent than tired humans on repetitive labels, and it never drifts mid-dataset. Best practice stays the same as with human coders: spot-check a sample, refine ambiguous code definitions, and re-run — a full re-code costs minutes, not days.

**How many responses can I code?**

GPT for Sheets processes up to 10,000 results per hour, so typical survey datasets — hundreds to a few thousand verbatims — code in a single run.
