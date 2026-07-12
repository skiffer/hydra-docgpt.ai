---
layout: page
title: "Candidate Screening — Google Sheets AI Template"
heading: "Candidate Screening Template"
permalink: /templates/candidate-screening/
description: "Screen CVs against job requirements in Google Sheets with AI: fit score, rationale and extracted skills per candidate with =GPT() formulas. Free template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can AI make the hiring decision?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, and it shouldn't — this template orders your reading pile, it does not replace judgment. Every score comes with a rationale column so a human can see and challenge the reasoning. Check the AI-in-hiring regulations that apply in your jurisdiction."
      }
    },
    {
      "@type": "Question",
      "name": "How do I keep the screening fair and comparable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every candidate is scored against the same requirements cell with the same prompt — more consistent than a tired reviewer at CV number 80. Keep the criteria job-related, and review a sample of low scorers to check nothing systematic is being missed."
      }
    },
    {
      "@type": "Question",
      "name": "How many applications can I screen at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPT for Sheets processes up to 10,000 results per hour — a few hundred applications with three or four analysis columns finish comfortably in one run."
      }
    }
  ]
}
</script>
Two hundred applications, one hiring manager, a weekend. Paste CV or profile text into a sheet, score every candidate against the same requirements, and spend your reading time on the top of the ranked list — with a rationale column keeping every score accountable.

## Layout

Put the job requirements in `F1` once, e.g. *"Senior backend engineer: 5+ years Python, production cloud experience, has led projects; nice to have: fintech background"*. Then:

| Column | Content | Formula |
|---|---|---|
| A | Candidate name | — |
| B | CV / profile text | — |
| C | Fit score 1–10 | see below |
| D | Rationale | see below |
| E | Years of experience | `=GPT_EXTRACT(B2, "total years of relevant professional experience, number only")` |

## The formulas

Score, in `C2`:

```
=GPT("Score this candidate 1-10 against these requirements: "&$F$1&". Judge only job-related evidence. Reply with the number only.", B2)
```

Rationale, in `D2`:

```
=GPT("In two sentences: how does this candidate match these requirements — "&$F$1&" — and what is the biggest gap?", B2)
```

## Variations

- **Shortlist bucket** — `=GPT_CLASSIFY(C2, "1-4: decline, 5-7: maybe, 8-10: interview")` turns scores into a pipeline column.
- **Skills checklist** — one column per must-have: `=GPT("Does this CV show evidence of "&G$1&"? Answer yes, weak, or no.", $B2)` and drag across.
- **Screening questions** — `=GPT("Write 3 interview questions probing this candidate's specific gaps against: "&$F$1, B2)` preps the phone screen.
- **Structured summary** — `=GPT_SUMMARIZE(B2, "3 bullets: current role, standout achievement, career trajectory")` for the panel doc.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Paste candidate text into column B and the job requirements into F1.
3. Drag the formulas down your rows, then use **Replace all GPT formulas with results** before sorting by score.

Function reference: <a href="/docs/gpt-for-sheets/gpt-functions">GPT functions for Google Sheets</a>.

## FAQ

**Can AI make the hiring decision?**

No, and it shouldn't — this template orders your reading pile, it does not replace judgment. Every score comes with a rationale column so a human can see and challenge the reasoning. Check the AI-in-hiring regulations that apply in your jurisdiction.

**How do I keep the screening fair and comparable?**

Every candidate is scored against the same requirements cell with the same prompt — more consistent than a tired reviewer at CV number 80. Keep the criteria job-related, and review a sample of low scorers to check nothing systematic is being missed.

**How many applications can I screen at once?**

GPT for Sheets processes up to 10,000 results per hour — a few hundred applications with three or four analysis columns finish comfortably in one run.
