---
layout: page
title: "Deduplication &amp; Normalization — Google Sheets AI Template"
heading: "Deduplication &amp; Normalization Template"
permalink: /templates/deduplication-normalization/
description: "Find near-duplicate rows in Google Sheets with AI: normalize company names with =GPT(), then flag fuzzy matches that COUNTIF misses. Free template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why can't COUNTIF find these duplicates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "COUNTIF only matches exact strings. 'ACME Inc.', 'Acme Incorporated' and 'acme.com' are three different strings but one company. The trick is to normalize every row to a canonical form with AI first — then the duplicates become exact and classic formulas catch them."
      }
    },
    {
      "@type": "Question",
      "name": "Does the AI delete rows for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — and that is deliberate. The template flags duplicates in a column so you decide which record to keep. Sort by the canonical-name column to see duplicate groups next to each other."
      }
    },
    {
      "@type": "Question",
      "name": "How big a list can I process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPT for Sheets processes up to 10,000 results per hour. Normalization is one formula per row, so even large CRM exports finish in a reasonable time."
      }
    }
  ]
}
</script>
"ACME Inc.", "Acme Incorporated" and "acme.com" are the same customer three times — and no exact-match formula will ever tell you. Normalize first with AI, then let plain spreadsheet functions do the flagging.

## Layout

| Column | Content | Formula |
|---|---|---|
| A | Raw company name | — |
| B | Canonical name | `=GPT("Normalize this company name: lowercase, strip legal suffixes like Inc/LLC/GmbH, strip 'www.' and '.com'. Return the canonical name only.", A2)` |
| C | Duplicate? | `=IF(COUNTIF(B:B, B2)>1, "DUPLICATE", "")` |
| D | Group size | `=COUNTIF(B:B, B2)` |

Sort by column B and duplicate groups line up next to each other for manual merge decisions.

## Fuzzy pair check

When two rows look suspicious but normalize differently ("Acme Labs" vs "Acme Laboratories"), ask directly:

```
=GPT("Are these two names the same company? Consider abbreviations and legal forms. Answer yes or no only.", A2&" ||| "&A3)
```

## Variations

- **People, not companies** — normalize to `last name, first initial` and combine with the email domain for a stronger key.
- **Addresses** — canonicalize to *"street number + street, city"* before comparing; abbreviation chaos (St/Street, Ave/Avenue) disappears.
- **Keep the winner** — add `=IF(D2>1, GPT("Which of these is the cleanest, most complete record? Reply with the exact text of the best one.", TEXTJOIN(" ||| ", TRUE, FILTER(A:A, B:B=B2))), "")` to nominate a survivor per group.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Paste the formulas into your own sheet next to the raw names.
3. Drag the formulas down your rows, then use **Replace all GPT formulas with results** in the sidebar before sorting.

Function reference: <a href="/docs/gpt-for-sheets/data-cleaning-functions">data cleaning functions</a>. Messy fields inside the surviving rows? See the <a href="/templates/contact-data-cleaning/">contact data cleaning template</a>.

## FAQ

**Why can't COUNTIF find these duplicates?**

COUNTIF only matches exact strings. "ACME Inc.", "Acme Incorporated" and "acme.com" are three different strings but one company. The trick is to normalize every row to a canonical form with AI first — then the duplicates become exact and classic formulas catch them.

**Does the AI delete rows for me?**

No — and that is deliberate. The template flags duplicates in a column so you decide which record to keep. Sort by the canonical-name column to see duplicate groups next to each other.

**How big a list can I process?**

GPT for Sheets processes up to 10,000 results per hour. Normalization is one formula per row, so even large CRM exports finish in a reasonable time.
