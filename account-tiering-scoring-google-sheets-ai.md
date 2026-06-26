---
layout: seo-guide
title: "Build an Account Tiering (Tier 1/2/3) Model in Google Sheets"
permalink: /account-tiering-scoring-google-sheets-ai/
description: "Build an account tiering model in Google Sheets with AI: use GPT for Sheets to score fit, assign Tier 1/2/3 labels, and explain the rationale across your whole target list. Copyable formulas included."
hero_title: "Build an Account Tiering (Tier 1/2/3) Model in Google Sheets"
hero_subtitle: "Use GPT for Sheets to score account fit, bucket your list into Tier 1, 2, and 3, and write a short rationale and next action in adjacent columns, so reps work the right accounts first."
guide_product: "GPT for Sheets"
primary_cta_text: "Install GPT for Sheets"
primary_cta_url: "/gpt-for-sheets/"
secondary_cta_text: "Copy formulas"
secondary_cta_url: "#copyable-formulas"
inline_cta_title: "Tier your whole list across every row"
inline_cta_text: "GPT for Sheets runs your tiering logic across many rows while keeping source data, scores, and QA labels in one spreadsheet."
guide_badges:
  - "Account tiering"
  - "Google Sheets AI"
  - "ABM scoring"
  - "RevOps workflow"
quick_start_title: "Quick start: account tiering in Sheets"
quick_start_steps:
  - "Add columns for account, fit criteria, source text, score, and tier."
  - "Install GPT for Sheets and choose a supported model."
  - "Paste a formula into row 2, review 10 sample rows, then fill down."
guide_nav:
  - label: "Workflow"
    href: "#workflow"
  - label: "Formulas"
    href: "#copyable-formulas"
  - label: "Use cases"
    href: "#use-cases"
  - label: "Fit"
    href: "#best-for-not-best-for"
  - label: "FAQ"
    href: "#frequently-asked-questions"
formula_section_title: "Copy-paste formulas for account tiering in Google Sheets"
formula_section_intro: "Paste a formula into row 2, test it on a few rows, then drag down to run the model across your spreadsheet."
formula_cards:
  - title: "Fit score 1-100"
    setup: "A: account · B: criteria · C: source text"
    formula: |
      =GPT("Score this account 0-100 for fit. Account: " & A2 & ". Criteria: " & B2 & ". Source text: " & C2 & ". Return only a number, then a short reason after a dash.")
  - title: "Tier label"
    setup: "A: score · B: thresholds"
    formula: |
      =GPT("Assign a tier from this score: " & A2 & " using thresholds: " & B2 & ". Return only Tier 1, Tier 2, or Tier 3.")
  - title: "Tier rationale"
    setup: "A: account · B: score · C: criteria"
    formula: |
      =GPT("Explain in one sentence why account " & A2 & " with score " & B2 & " fits its tier given criteria: " & C2 & ". Be specific and factual; note what to verify.")
  - title: "Next action"
    setup: "A: tier · B: account context"
    formula: |
      =GPT("Suggest one next action for a " & A2 & " account given this context: " & B2 & ". Keep it concrete and under 25 words.")
---
## Short answer

Account tiering in Google Sheets means scoring each account for fit and bucketing your list into Tier 1, Tier 2, and Tier 3 so reps prioritize the best-fit accounts. With GPT for Sheets you run a scoring prompt across every row, convert scores into tier labels with thresholds, and add a short rationale and next action in adjacent columns.

**Fastest path:** [Install GPT for Sheets](/gpt-for-sheets/) → add account, criteria, and source columns → paste a formula from the formula section → review 10 rows → fill down the sheet.

This page is for RevOps, sales leaders, and ABM marketers who want a working, reviewable tiering model in the spreadsheet they already use. AI scores are decision aids, not guarantees; review before reps act.

## Workflow

A practical sheet for this workflow usually has these columns:

| Column | What to put there | Why it matters |
|---|---|---|
| A | Account name | Stable row anchor for each account |
| B | Fit criteria (firmographic, fit, intent) | Defines what the score measures |
| C | Source notes: website, CRM fields, signals | Keeps AI grounded in inspectable evidence |
| D | Fit score | Numeric basis for the tier |
| E | Tier label (1/2/3) | Bucket for routing and prioritization |
| F | Rationale | Explains the tier for reps and reviewers |
| G | Next action | Turns the tier into a step |
| H | QA flag | Catches weak or unsupported scores |

### Define your tier criteria

Account tiering works best when the criteria are explicit. Common inputs are firmographic fit (industry, size, region), product fit (use case match), and intent or timing signals. Write these into a criteria column or a single reference cell so every row is scored against the same rules. Then set thresholds, for example 70+ is Tier 1, 40 to 69 is Tier 2, and below 40 is Tier 3, and tune them after reviewing a sample.

### Step-by-step setup

1. Start with 10 representative accounts before filling down hundreds.
2. Keep raw source fields unchanged so you can audit the AI output.
3. Run the fit-score formula, then inspect the lowest- and highest-scoring rows.
4. Convert scores to tiers with a thresholds formula or a simple IF rule.
5. Add a rationale formula and a QA formula that flags weak evidence.
6. Fill down once the model works on your sample rows, then sort by tier.

<div class="seo-guide-inline-cta">
  <div>
    <strong>Use AI formulas instead of one-off prompting</strong>
    <span>GPT for Sheets runs your tiering logic across many rows while keeping source data, scores, and QA labels in one spreadsheet.</span>
  </div>
  <a class="seo-guide-btn seo-guide-btn-primary" href="/gpt-for-sheets/#pricing">See GPT for Sheets plans</a>
</div>

## Use cases

- **Prioritization:** put reps on Tier 1 accounts first.
- **ABM:** align marketing spend to tiers.
- **Territory planning:** balance tiers across reps.
- **Pipeline reviews:** sort and filter by tier and rationale.
- **QA:** flag scores that lack supporting evidence.

## Best for / not best for

**Best for:** RevOps and sales teams that keep target lists in Google Sheets and want a reviewable, repeatable tiering model without standing up a separate scoring tool.

**Not best for:** teams that need a fully automated, audited predictive model with guaranteed accuracy; AI scores here are decision aids that require human review.

The strongest use case is turning a flat list into prioritized tiers your reps can trust because each score has a visible rationale. Refresh the model on a cadence as accounts and signals change.

## Internal links and next workflows

- [GPT for Sheets product page](/gpt-for-sheets/)
- [GPT for Sheets pricing](/gpt-for-sheets/#pricing)
- [ICP fit scoring in Google Sheets](/icp-fit-scoring-google-sheets-ai/)
- [ICP scoring formulas in Google Sheets](/icp-scoring-formulas-google-sheets-ai/)
- [B2B SaaS account scoring in Sheets](/b2b-saas-account-scoring-google-sheets-ai/)
- [Upgrade GPT for Sheets](/gpt-for-sheets-upgrade/)

## Safety, compliance, and data quality

AI scores are decision aids, not guarantees, and this page makes no claim of predictive accuracy. Keep source columns visible, require human review before reps act on a tier, and do not infer sensitive attributes. Use lawful data and follow your team's data and compliance rules.

## Frequently Asked Questions

### How do I build an account tiering model in Sheets?

Add columns for the account, criteria, and source text, score each account with a fit-score formula, convert the score to Tier 1/2/3 with thresholds, and add a rationale and next action. Review a sample, then fill down.

### What thresholds should I use for tiers?

Start with simple bands such as 70+ for Tier 1, 40 to 69 for Tier 2, and below 40 for Tier 3, then tune them after reviewing how a sample of real accounts scores.

### Are the AI tiers accurate?

They are decision aids based on the criteria and evidence you provide, not guaranteed predictions. Keep a rationale column and review before reps act.

### Can I refresh tiers over time?

Yes. Re-run the formulas on a cadence as account data and signals change so your tiers stay current.

## Start tiering your accounts in Google Sheets

If your team already works in spreadsheets, install GPT for Sheets and build a reviewable Tier 1/2/3 model where your account list already lives.

[Install GPT for Sheets](/gpt-for-sheets/) or [compare plans](/gpt-for-sheets/#pricing).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How do I build an account tiering model in Sheets?", "acceptedAnswer": {"@type": "Answer", "text": "Add columns for the account, criteria, and source text, score each account with a fit-score formula, convert the score to Tier 1/2/3 with thresholds, and add a rationale and next action. Review a sample, then fill down."}},
    {"@type": "Question", "name": "What thresholds should I use for tiers?", "acceptedAnswer": {"@type": "Answer", "text": "Start with simple bands such as 70+ for Tier 1, 40 to 69 for Tier 2, and below 40 for Tier 3, then tune them after reviewing how a sample of real accounts scores."}},
    {"@type": "Question", "name": "Are the AI tiers accurate?", "acceptedAnswer": {"@type": "Answer", "text": "They are decision aids based on the criteria and evidence you provide, not guaranteed predictions. Keep a rationale column and review before reps act."}},
    {"@type": "Question", "name": "Can I refresh tiers over time?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Re-run the formulas on a cadence as account data and signals change so your tiers stay current."}}
  ]
}
</script>
