---
layout: page
title: "Lead List to Outreach — Google Sheets AI Playbook"
heading: "Playbook: Lead List → Personalized Outreach"
permalink: /playbooks/lead-list-to-outreach/
description: "Turn a lead CSV into personalized outreach in Google Sheets: enrich with =PERPLEXITY(), score with =GPT_CLASSIFY(), write openers with =GPT(), then mail merge."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where does the enrichment data come from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "=PERPLEXITY() answers with live web knowledge, so company summaries and recent news come from the web at the time you run the formula. It is the one model function in GPT for Sheets with web access — the others answer from training data."
      }
    },
    {
      "@type": "Question",
      "name": "Can I really personalize 2,000 emails at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The processing is arithmetic: 2,000 leads with three AI columns each is 6,000 results, about 36 minutes at up to 10,000 results per hour. Quality still needs you — review a random sample of openers and tighten the prompt before sending anything."
      }
    },
    {
      "@type": "Question",
      "name": "How do I send the emails afterwards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Convert formulas to plain text with Replace all GPT formulas with results, then use Mail Merge for Gmail and Sheets — each column becomes a merge field, so the opener column drops into your email template per recipient."
      }
    }
  ]
}
</script>
You have a CSV with company names and emails; you want outreach that doesn't read like a blast. This playbook runs the whole pipeline inside Google Sheets: enrich → score → write → merge. The arithmetic first: 2,000 leads with three AI columns each is 6,000 results — about **36 minutes of processing** at up to 10,000 results per hour. Done by hand at 5 minutes of research plus 3 minutes of writing per lead, the same list is 2,000 × 8 minutes ≈ **267 hours**, about 33 working days. Those are calculations from the rate limit and stated assumptions, not claimed results.

## Step 0 — import the CSV

**File → Import** in Google Sheets. You need at minimum: first name, email, company name or domain. Layout for this playbook:

| Column | Content |
|---|---|
| A | First name |
| B | Email |
| C | Company domain |
| D | What they do (AI) |
| E | Fit score (AI) |
| F | Personalized opener (AI) |

## Step 1 — enrich with =PERPLEXITY()

`=PERPLEXITY()` is the one function with live web access, which makes it the enrichment tool. In `D2`, drag down:

```
=PERPLEXITY("What does this company do? Answer in 15 words, plain and specific:", C2)
```

Keeping answers to ~15 words is deliberate: short summaries are cheaper to scan, and they feed cleanly into the scoring and opener prompts below. Add a second research column if you want recent news: `=PERPLEXITY("Most recent notable news about "&C2&", one line with the year")`.

## Step 2 — score with =GPT_CLASSIFY()

Define your fit criteria once, then classify every lead into fixed buckets. In `E2`:

```
=GPT_CLASSIFY("Our ideal customer: B2B teams that live in spreadsheets and send outbound email. Lead: "&D2, "high fit, medium fit, low fit")
```

Fixed categories beat free-form scoring: `=GPT_CLASSIFY()` must pick one of your labels, so you can filter and sort on the result. Sort by column E and decide where to cut — there is no point writing openers for low-fit rows.

## Step 3 — write openers with =GPT()

For the rows that survived scoring, in `F2`:

```
=GPT("Write a one-sentence cold email opener for "&A2&" based on what their company does. Reference something specific from the summary. No flattery, no 'I hope this finds you well', under 25 words. Summary: "&D2)
```

The opener is grounded in the enrichment column, so each one is specific to that company — this is what separates the result from a template blast. Review a random sample of 20–30 before trusting the batch; if a pattern annoys you, fix the prompt and re-run the column, not individual cells.

## Step 4 — freeze results and merge

1. Filter to `high fit` rows.
2. Run **Replace all GPT formulas with results** in the sidebar, so nothing recalculates when the sheet is edited later.
3. Send with <a href="/mail-merge-for-gmail-and-sheets/">Mail Merge for Gmail and Sheets</a>: every column becomes a merge field, so your email template can open with the `F` column — first line personalized per recipient, the rest of the template shared.

## The math, side by side

| | AI pipeline in Sheets | Manual research + writing |
|---|---|---|
| 2,000 leads × 3 columns | 6,000 results ≈ 36 min of processing | 2,000 × 8 min ≈ 267 hours |
| Your time | prompt design + sample review | all of it |
| Output | filterable scores, per-lead openers | the same, 33 working days later |

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Import your CSV and add the three formula columns above — or start from the <a href="/templates/lead-enrichment/">lead enrichment template</a>.
3. Score, filter, freeze results, then send via <a href="/mail-merge-for-gmail-and-sheets/">Mail Merge for Gmail</a>.

Related: <a href="/docs/gpt-for-sheets/perplexity-function">=PERPLEXITY() reference</a>, <a href="/docs/gpt-for-sheets/gpt-functions">all GPT functions</a>.

## FAQ

**Where does the enrichment data come from?**

=PERPLEXITY() answers with live web knowledge, so company summaries and recent news come from the web at the time you run the formula. It is the one model function in GPT for Sheets with web access — the others answer from training data.

**Can I really personalize 2,000 emails at once?**

The processing is arithmetic: 2,000 leads with three AI columns each is 6,000 results, about 36 minutes at up to 10,000 results per hour. Quality still needs you — review a random sample of openers and tighten the prompt before sending anything.

**How do I send the emails afterwards?**

Convert formulas to plain text with Replace all GPT formulas with results, then use Mail Merge for Gmail and Sheets — each column becomes a merge field, so the opener column drops into your email template per recipient.
