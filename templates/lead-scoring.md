---
layout: page
title: "Lead Scoring — Google Sheets AI Template"
heading: "Lead Scoring Template"
permalink: /templates/lead-scoring/
description: "Score leads 1-10 against your ICP in Google Sheets with AI. Free template with =GPT() formulas: numeric score plus a reasoning column, no API keys needed."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the AI know what a good lead looks like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You write your ICP criteria into one cell — industry, company size, role, region, whatever defines fit — and every formula references it. Change the criteria cell and re-run to re-score the whole list."
      }
    },
    {
      "@type": "Question",
      "name": "Are the scores consistent across rows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consistent enough to rank a list when the criteria are explicit and the prompt demands a bare number. For borderline calls, the reasoning column shows why a lead scored the way it did, so you can sanity-check before acting."
      }
    },
    {
      "@type": "Question",
      "name": "How large a list can I score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPT for Sheets processes up to 10,000 results per hour. Drag the formulas down your whole list and results fill in as they complete."
      }
    }
  ]
}
</script>
Rank an inbound list or a cold prospect dump by fit — a 1–10 score plus a one-line reason per lead, so your team calls the top of the list first instead of working alphabetically.

## Layout

Put your ICP definition in `G1` once, e.g. *"B2B SaaS, 20–500 employees, US or EU, buyer is Head of Sales or above"*. Then:

| Column | Content | Formula |
|---|---|---|
| A | Company | — |
| B | Contact title | — |
| C | Notes (size, industry, source) | — |
| D | Score 1–10 | see below |
| E | Reasoning | see below |
| F | Tier | `=GPT_CLASSIFY(D2, "1-3: cold, 4-7: warm, 8-10: hot")` |

## The formulas

Score, in `D2`:

```
=GPT("Score this lead 1-10 for fit against this ICP: "&$G$1&". Reply with the number only.", A2&" — "&B2&" — "&C2)
```

Reasoning, in `E2`:

```
=GPT("In one sentence, explain how well this lead fits the ICP: "&$G$1, A2&" — "&B2&" — "&C2)
```

## Variations

- **Weighted criteria** — spell out weights in the ICP cell: *"industry fit matters twice as much as company size"*. The model follows plain-English weighting surprisingly well.
- **Disqualifiers** — add *"score 1 if the company is an agency or a student project"* to catch hard no-gos.
- **Missing data** — append *"If information is missing, say what you'd need to know"* to the reasoning prompt so gaps surface instead of hiding behind a middling score.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Paste the formulas into your own sheet and write your ICP into `G1`.
3. Drag the formulas down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Function reference: <a href="/docs/gpt-for-sheets/gpt-functions">GPT functions for Google Sheets</a>. Need to enrich the list first? Start with the <a href="/templates/lead-enrichment/">lead enrichment template</a>.

## FAQ

**How does the AI know what a good lead looks like?**

You write your ICP criteria into one cell — industry, company size, role, region, whatever defines fit — and every formula references it. Change the criteria cell and re-run to re-score the whole list.

**Are the scores consistent across rows?**

Consistent enough to rank a list when the criteria are explicit and the prompt demands a bare number. For borderline calls, the reasoning column shows why a lead scored the way it did, so you can sanity-check before acting.

**How large a list can I score?**

GPT for Sheets processes up to 10,000 results per hour. Drag the formulas down your whole list and results fill in as they complete.
