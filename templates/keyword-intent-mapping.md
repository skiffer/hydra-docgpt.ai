---
layout: page
title: "Keyword Intent Mapping — Google Sheets AI Template"
heading: "Keyword Intent Mapping Template"
permalink: /templates/keyword-intent-mapping/
description: "Map keywords to search intent and funnel stage in Google Sheets: =SERP() shows what really ranks, =GPT() assigns intent, stage and page format. Free template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is this different from guessing intent from the keyword?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The template classifies intent from what Google actually ranks — =SERP() pulls the top results and =GPT() reads them. A keyword that looks informational but ranks product pages gets labeled commercial, matching reality."
      }
    },
    {
      "@type": "Question",
      "name": "What funnel stages does it assign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TOFU, MOFU or BOFU by default, based on intent plus the ranking evidence. Swap in your own stage names by editing the label list in the prompt."
      }
    },
    {
      "@type": "Question",
      "name": "Should I cluster keywords before or after mapping intent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cluster first, then map intent per cluster representative — it cuts formula volume and keeps stage labels consistent across a topic. Our keyword clustering template handles the first step."
      }
    }
  ]
}
</script>
Intent guessed from keyword wording is wrong surprisingly often — "best crm" looks informational and ranks listicles built to sell. This template maps every keyword to intent, funnel stage and page format using the SERP as evidence, so your content plan matches what Google actually rewards.

## Layout

| Column | Content | Formula |
|---|---|---|
| A | Keyword | — |
| B | What ranks now | `=SERP(A2, 5)` |
| C | Intent (SERP-validated) | generated |
| D | Funnel stage | generated |
| E | Page format to build | generated |

## The formulas

Intent, validated against the live SERP (`C2`):

```
=GPT("Classify the search intent of '"&A2&"' as informational, commercial, transactional or navigational. Base your answer on what actually ranks: "&B2&". Return only the label.")
```

Funnel stage (`D2`):

```
=GPT("Assign a funnel stage for the keyword '"&A2&"' with intent '"&C2&"': TOFU, MOFU or BOFU. Return only the label.")
```

Page format that fits both (`E2`):

```
=GPT("Given intent '"&C2&"' and stage '"&D2&"', what page should target '"&A2&"'? Answer in 5 words max, e.g. 'comparison page', 'how-to guide', 'pricing page'.")
```

Then filter by column D to hand TOFU keywords to content and BOFU keywords to landing pages.

## Variations

- **Mismatch finder**: add `=GPT("Does the wording of '"&A2&"' suggest a different intent than these results show? Answer Yes/No plus one line.", B2)` — mismatches are often the easiest wins, since the SERP is weakly aligned.
- **Custom taxonomy**: keep your allowed labels in a cell (`$G$1`) and reference it in every prompt so a 3,000-row map never drifts into invented categories.
- **Priority score**: `=GPT("Score 1-5 how directly this keyword signals buying intent. Return only the number.", A2)` gives you a sortable column for roadmap order.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Copy the template or paste the formulas into your own sheet.
3. Drag the formula down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Related: <a href="/templates/keyword-clustering/">keyword clustering template</a>, <a href="/docs/ai-prompts/search-intent-based-keyword-ideas-for-2024">search-intent keyword ideas</a>, <a href="/docs/gpt-for-sheets/serp-function">=SERP() reference</a>.

## FAQ

**How is this different from guessing intent from the keyword?**

The template classifies intent from what Google actually ranks — =SERP() pulls the top results and =GPT() reads them. A keyword that looks informational but ranks product pages gets labeled commercial, matching reality.

**What funnel stages does it assign?**

TOFU, MOFU or BOFU by default, based on intent plus the ranking evidence. Swap in your own stage names by editing the label list in the prompt.

**Should I cluster keywords before or after mapping intent?**

Cluster first, then map intent per cluster representative — it cuts formula volume and keeps stage labels consistent across a topic. Our keyword clustering template handles the first step.
