---
layout: seo-guide
title: "How to Get an OpenAI API Key for Google Sheets"
permalink: /openai-api-key-google-sheets-setup/
description: "Get an OpenAI API key and use it in Google Sheets with GPT for Sheets. Step-by-step setup, where to add the key, your first GPT formula, and copyable enrich/summarize/score examples."
hero_title: "How to Get an OpenAI API Key for Google Sheets"
hero_subtitle: "Create an OpenAI API key, add it to GPT for Sheets, and run GPT across spreadsheet rows to enrich, summarize, classify, and score, with inputs and outputs side by side for review."
guide_product: "GPT for Sheets"
primary_cta_text: "Install GPT for Sheets"
primary_cta_url: "/gpt-for-sheets/"
secondary_cta_text: "Copy formulas"
secondary_cta_url: "#copyable-formulas"
inline_cta_title: "Run GPT across every spreadsheet row"
inline_cta_text: "Once your key is added, GPT for Sheets runs GPT across many rows while keeping source data, outputs, and QA labels in one spreadsheet."
guide_badges:
  - "OpenAI API key"
  - "Setup guide"
  - "Google Sheets AI"
  - "ChatGPT in Sheets"
quick_start_title: "Quick start: OpenAI API key in Sheets"
quick_start_steps:
  - "Create an OpenAI account and generate an API key on the platform."
  - "Install GPT for Sheets and paste your OpenAI key when prompted."
  - "Paste a =GPT formula into row 2, review the output, then fill down."
guide_nav:
  - label: "What you need"
    href: "#what-you-need"
  - label: "Steps"
    href: "#step-by-step"
  - label: "Formulas"
    href: "#copyable-formulas"
  - label: "Errors"
    href: "#common-errors-and-fixes"
  - label: "FAQ"
    href: "#frequently-asked-questions"
formula_section_title: "Copy-paste GPT formulas for Google Sheets"
formula_section_intro: "Paste a formula into row 2, test it on a few rows, then drag down to run the workflow across your spreadsheet."
formula_cards:
  - title: "First GPT formula"
    setup: "A: input cell"
    formula: |
      =GPT("Summarize the following in one clear sentence: " & A2)
  - title: "Enrich a company"
    setup: "A: company · B: notes · C: offer"
    formula: |
      =GPT("Research this company for outreach: " & A2 & ". Notes: " & B2 & ". Offer: " & C2 & ". Return a short summary, likely industry, and one relevance signal. If unsure, say Needs manual research.")
  - title: "Summarize source text"
    setup: "A: long text · B: focus"
    formula: |
      =GPT("Summarize this text in 2 sentences, focused on " & B2 & ": " & A2 & ". If the focus is not covered, say Not stated.")
  - title: "Fit score 1-5"
    setup: "A: account · B: ICP · C: source text"
    formula: |
      =GPT("Score 1-5 for ICP fit. Account: " & A2 & ". ICP: " & B2 & ". Source: " & C2 & ". Return score, reason, confidence, and what to verify.")
---
## Short answer

You can use GPT in Google Sheets by creating an OpenAI API key and adding it to GPT for Sheets. After the key is connected, you call GPT from a spreadsheet formula such as =GPT(...) and fill that formula down to run it across every row, with inputs and outputs side by side.

**Fastest path:** [Install GPT for Sheets](/gpt-for-sheets/) → paste your OpenAI API key → paste a formula from the formula section → review 10 rows → fill down the sheet.

This page is for first-time GPT for Sheets users across sales, ops, SEO, and ecommerce who want to wire an OpenAI key into Sheets and start enriching, summarizing, and scoring lists.

## What you need

Before you start, make sure you have these three things:

| Requirement | What it is | Why it matters |
|---|---|---|
| OpenAI account | A free account on the OpenAI platform | This is where you generate and manage your API key |
| An OpenAI API key | A secret string from the platform | GPT for Sheets uses it to call GPT on your behalf |
| GPT for Sheets | The Google Workspace add-on | Lets you call GPT from a =GPT formula in any sheet |

An OpenAI API key carries its own usage costs billed by OpenAI based on the model and tokens you use. The platform may also require billing details or a small prepaid balance. Steps, model names, and pricing change over time, so confirm the current flow on OpenAI's platform when you set up.

## Step by step

1. **Create or sign in to your OpenAI account** on the platform.
2. **Generate an API key** in the API keys section and copy it once — store it like a password.
3. **Install GPT for Sheets** from the Google Workspace Marketplace and open it from the Extensions menu.
4. **Paste your OpenAI API key** into the add-on settings when prompted.
5. **Run your first formula:** type `=GPT("Say hello in one sentence")` to confirm the key works.
6. **Enrich, summarize, or score across rows:** paste a formula from the section below into row 2, review it, then fill it down.

<div class="seo-guide-inline-cta">
  <div>
    <strong>Use AI formulas instead of one-off prompting</strong>
    <span>Once your key is added, GPT for Sheets runs GPT across many rows while keeping source data, outputs, and QA labels in one spreadsheet.</span>
  </div>
  <a class="seo-guide-btn seo-guide-btn-primary" href="/gpt-for-sheets/#pricing">See GPT for Sheets plans</a>
</div>

### Where to add the key

You add the key inside the GPT for Sheets add-on settings, not in a cell. Keeping the key in the add-on means your formulas stay clean and your secret is never written into a shared cell. If you share the sheet, each editor manages their own provider settings.

## Use cases

- **Enrichment:** add company or contact context across a list.
- **Summarization:** condense long source text into a few sentences.
- **Classification:** tag rows by industry, intent, or category.
- **Scoring:** rate fit with a reason and a confidence note.
- **Drafting:** generate openers, replies, or product copy per row.

## Models, rate limits, and cost notes

OpenAI offers several models; smaller models cost less per call and handle cleanup and classification well, while larger models suit nuanced research and longer drafts. Usage is billed by OpenAI, and large fills can hit rate limits, so test on a sample first. Exact model names, limits, and prices change, so check OpenAI's platform for current details.

## Common errors and fixes

- **Invalid or revoked key:** re-copy the key; remove stray spaces; generate a new key if needed.
- **Quota exceeded / billing required:** add or top up billing in your OpenAI account.
- **Rate-limit errors:** fill in smaller batches and pause between runs.
- **Empty output:** shorten the prompt or reduce the number of cells referenced.

## Internal links and next workflows

- [GPT for Sheets product page](/gpt-for-sheets/)
- [GPT for Sheets pricing](/gpt-for-sheets/#pricing)
- [ChatGPT for Google Sheets lead enrichment](/chatgpt-for-google-sheets-lead-enrichment/)
- [AI lead enrichment in Google Sheets (guide)](/ai-lead-enrichment-google-sheets-guide/)
- [Best AI model for lead enrichment in Sheets](/best-ai-model-for-lead-enrichment-google-sheets/)
- [Upgrade GPT for Sheets](/gpt-for-sheets-upgrade/)

## Safety, compliance, and data quality

Treat GPT output as a draft. Keep source columns visible, verify important claims before acting, and do not infer sensitive attributes. Never paste your API key into a shared cell, and use lawful data while following consent and deliverability rules for any outreach generated in the sheet. "OpenAI" and "ChatGPT" are trademarks of their owner; this page is unaffiliated.

## Frequently Asked Questions

### How do I get an OpenAI API key?

Create an OpenAI account, open the API keys section of the platform, generate a key, and copy it once. Then paste it into the GPT for Sheets add-on settings.

### Do I need to pay for an OpenAI API key?

The key is free to generate, but OpenAI bills API usage based on the model and tokens you use, and may require billing details. Check OpenAI's current pricing.

### Where do I add the key in Google Sheets?

In the GPT for Sheets add-on settings, not in a cell. That keeps your formulas clean and your key out of shared cells.

### Is this the same as using ChatGPT?

It uses OpenAI's models through an API key rather than the ChatGPT chat window. The benefit is that you can run the same prompt as a formula across hundreds of rows.

## Start using GPT in Google Sheets

Add your OpenAI API key to GPT for Sheets and start enriching every row in minutes.

[Install GPT for Sheets](/gpt-for-sheets/) or [compare plans](/gpt-for-sheets/#pricing).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How do I get an OpenAI API key?", "acceptedAnswer": {"@type": "Answer", "text": "Create an OpenAI account, open the API keys section of the platform, generate a key, and copy it once. Then paste it into the GPT for Sheets add-on settings."}},
    {"@type": "Question", "name": "Do I need to pay for an OpenAI API key?", "acceptedAnswer": {"@type": "Answer", "text": "The key is free to generate, but OpenAI bills API usage based on the model and tokens you use, and may require billing details. Check OpenAI's current pricing."}},
    {"@type": "Question", "name": "Where do I add the key in Google Sheets?", "acceptedAnswer": {"@type": "Answer", "text": "In the GPT for Sheets add-on settings, not in a cell. That keeps your formulas clean and your key out of shared cells."}},
    {"@type": "Question", "name": "Is this the same as using ChatGPT?", "acceptedAnswer": {"@type": "Answer", "text": "It uses OpenAI's models through an API key rather than the ChatGPT chat window. The benefit is that you can run the same prompt as a formula across hundreds of rows."}}
  ]
}
</script>
