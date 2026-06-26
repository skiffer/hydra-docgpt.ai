---
layout: seo-guide
title: "Is There a Claude Add-on for Google Sheets?"
permalink: /claude-google-sheets-plugin-addon/
description: "Yes, Claude runs in Google Sheets through the GPT for Sheets add-on. Here is how the add-on works, how to install it and add your Claude key, and copyable formulas to run Claude in a cell."
hero_title: "Is There a Claude Add-on for Google Sheets?"
hero_subtitle: "There is no official Anthropic plugin, but Claude runs inside Google Sheets through the GPT for Sheets add-on. Select Claude as your model and call it from a =GPT formula across rows."
guide_product: "GPT for Sheets"
primary_cta_text: "Install GPT for Sheets"
primary_cta_url: "/gpt-for-sheets/"
secondary_cta_text: "Copy formulas"
secondary_cta_url: "#copyable-formulas"
inline_cta_title: "Add Claude to your spreadsheet in minutes"
inline_cta_text: "The GPT for Sheets add-on puts Claude (and GPT, Gemini, and more) into a formula so you can run it across many rows in one spreadsheet."
guide_badges:
  - "Claude add-on"
  - "Plugin question"
  - "Google Sheets AI"
  - "No-code"
quick_start_title: "Quick start: Claude add-on for Sheets"
quick_start_steps:
  - "Install GPT for Sheets from the Google Workspace Marketplace."
  - "Open the add-on, select Claude (Anthropic), and add a key if prompted."
  - "Paste a =GPT formula into row 2, review the output, then fill down."
guide_nav:
  - label: "Short answer"
    href: "#short-answer"
  - label: "How it works"
    href: "#how-the-add-on-works"
  - label: "Formulas"
    href: "#copyable-formulas"
  - label: "Fit"
    href: "#best-for-not-best-for"
  - label: "FAQ"
    href: "#frequently-asked-questions"
formula_section_title: "Copy-paste Claude formulas for the Google Sheets add-on"
formula_section_intro: "Paste a formula into row 2, test it on a few rows, then drag down to run the workflow across your spreadsheet."
formula_cards:
  - title: "Run Claude in a cell"
    setup: "A: input cell"
    formula: |
      =GPT("Summarize the following in one clear sentence: " & A2)
  - title: "Enrich a company"
    setup: "A: company · B: notes · C: offer"
    formula: |
      =GPT("Research this company for outreach: " & A2 & ". Notes: " & B2 & ". Offer: " & C2 & ". Return a short summary, likely industry, and one relevance signal. If unsure, say Needs manual research.")
  - title: "Classify a row"
    setup: "A: text · B: categories"
    formula: |
      =GPT("Classify this text into exactly one of these categories: " & B2 & ". Text: " & A2 & ". Return only the category, or Unclear.")
  - title: "Fit score 1-5"
    setup: "A: account · B: ICP · C: source text"
    formula: |
      =GPT("Score 1-5 for ICP fit. Account: " & A2 & ". ICP: " & B2 & ". Source: " & C2 & ". Return score, reason, confidence, and what to verify.")
---
## Short answer

There is no official Anthropic plugin built by Anthropic for Google Sheets, but you can run Claude inside Google Sheets through a third-party add-on. The most common way is GPT for Sheets: install the add-on, select Claude (Anthropic) as your model, add a key if prompted, and then call Claude from a spreadsheet formula such as =GPT(...). Filling the formula down runs Claude across every row.

**Fastest path:** [Install GPT for Sheets](/gpt-for-sheets/) → select Claude → paste a formula from the formula section → review 10 rows → fill down the sheet.

This page is for analysts and sales or ops teams checking whether Claude can run inside Sheets before they commit to a workflow. People search for a "plugin," "add-on," or "extension"; in Google Workspace the accurate term is add-on.

## How the add-on works

GPT for Sheets is a Google Workspace add-on that adds AI functions like =GPT(...) to your spreadsheet. When you select Claude as the model, those functions send your prompt to Claude and write the response back into the cell. Because it is a formula, the same prompt runs consistently across hundreds of rows, and your inputs stay visible next to the outputs for review.

| Step | What happens | Why it matters |
|---|---|---|
| Install | Add-on appears under Extensions | No code or separate app needed |
| Select model | Choose Claude (Anthropic) | Runs Claude rather than another provider |
| Add key | Paste your Claude API key if prompted | Lets the add-on call Claude on your behalf |
| Write formula | =GPT("...") in a cell | Turns a prompt into a fillable function |
| Fill down | Drag the formula across rows | Runs Claude across your whole list |

### Install and add your Claude key

1. Install GPT for Sheets from the Google Workspace Marketplace.
2. Open it from the Extensions menu and choose Claude (Anthropic) as the model.
3. Add your Claude API key in the add-on settings if you are prompted for one.
4. Test with `=GPT("Say hello")`, then paste a workflow formula and fill it down.

<div class="seo-guide-inline-cta">
  <div>
    <strong>Use AI formulas instead of one-off prompting</strong>
    <span>The GPT for Sheets add-on puts Claude (and GPT, Gemini, and more) into a formula so you can run it across many rows in one spreadsheet.</span>
  </div>
  <a class="seo-guide-btn seo-guide-btn-primary" href="/gpt-for-sheets/#pricing">See GPT for Sheets plans</a>
</div>

### Add-on vs copy-pasting from the chat window

Pasting a single cell into the Claude chat app works for one row but breaks down across a list. The add-on turns Claude into a fillable formula, so the same instruction runs over hundreds of rows with inputs you can audit. You can also switch the selected model per run to compare Claude with GPT or Gemini on the same data.

## Use cases

- **Enrichment:** add context to companies or contacts across a list.
- **Cleanup:** normalize messy names, titles, and exports.
- **Classification:** tag rows by industry, intent, or category.
- **Scoring:** rate fit with a reason and confidence.
- **Drafting:** write summaries, openers, or replies per row.

## Best for / not best for

**Best for:** anyone who wants Claude available as a spreadsheet function to process many rows inside Google Sheets without writing code.

**Not best for:** teams that need a guaranteed proprietary data source, or that want to act on outputs without any review.

Using the add-on is the right move when your data already lives in Sheets and you want repeatable, reviewable Claude output across rows. For a single one-off answer, the chat window is fine.

## Internal links and next workflows

- [GPT for Sheets product page](/gpt-for-sheets/)
- [GPT for Sheets pricing](/gpt-for-sheets/#pricing)
- [Connect Claude to Google Sheets](/connect-claude-to-google-sheets-ai/)
- [Claude for Google Sheets how-to guide](/claude-for-google-sheets-how-to-guide/)
- [How to get a Claude API key for Sheets](/claude-api-key-google-sheets-setup/)
- [Upgrade GPT for Sheets](/gpt-for-sheets-upgrade/)

## Safety, compliance, and data quality

Treat Claude output as a draft. Keep source columns visible, verify important claims, and do not infer sensitive attributes. Use lawful data and follow consent and deliverability rules for any outreach generated in the sheet. "Claude" and "Anthropic" are trademarks of their owner; this add-on is unaffiliated with Anthropic, and a Claude API key may be required.

## Frequently Asked Questions

### Does Claude have a Google Sheets plugin?

There is no official Anthropic plugin, but Claude runs in Google Sheets through the GPT for Sheets add-on. You select Claude as the model and call it from a =GPT formula.

### Is there a Claude add-on or extension for Sheets?

Yes, in the form of a third-party Google Workspace add-on. Install GPT for Sheets, pick Claude, and run it from spreadsheet formulas. "Add-on" is the accurate Workspace term for what people call a plugin or extension.

### Do I need a Claude API key to use the add-on?

Depending on your plan and the add-on's provider settings, a Claude API key may be required. Availability and pricing can change, so check the current settings in the add-on.

### Can the same add-on run other models?

Yes. GPT for Sheets can run Claude, GPT, Gemini, and other models, so you can switch models per formula and compare results on your own rows.

## Add Claude to Google Sheets now

Install GPT for Sheets, select Claude, and run it across your spreadsheet in minutes.

[Install GPT for Sheets](/gpt-for-sheets/) or [compare plans](/gpt-for-sheets/#pricing).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Does Claude have a Google Sheets plugin?", "acceptedAnswer": {"@type": "Answer", "text": "There is no official Anthropic plugin, but Claude runs in Google Sheets through the GPT for Sheets add-on. You select Claude as the model and call it from a =GPT formula."}},
    {"@type": "Question", "name": "Is there a Claude add-on or extension for Sheets?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, in the form of a third-party Google Workspace add-on. Install GPT for Sheets, pick Claude, and run it from spreadsheet formulas. Add-on is the accurate Workspace term for what people call a plugin or extension."}},
    {"@type": "Question", "name": "Do I need a Claude API key to use the add-on?", "acceptedAnswer": {"@type": "Answer", "text": "Depending on your plan and the add-on's provider settings, a Claude API key may be required. Availability and pricing can change, so check the current settings in the add-on."}},
    {"@type": "Question", "name": "Can the same add-on run other models?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. GPT for Sheets can run Claude, GPT, Gemini, and other models, so you can switch models per formula and compare results on your own rows."}}
  ]
}
</script>
