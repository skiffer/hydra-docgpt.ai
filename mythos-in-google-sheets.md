---
layout: seo-guide
title: "Claude Mythos in Google Sheets: Status & How to Use Claude in Sheets Today"
permalink: /mythos-in-google-sheets/
description: "Looking to use Claude Mythos in Google Sheets? Mythos access is currently restricted — but you can run Anthropic's most powerful available model, Claude Opus 4.8, plus GPT-5.5, Gemini 3 and Grok 4.3, directly in Sheets with GPT for Sheets and =CLAUDE() formulas."
hero_title: "Claude Mythos in Google Sheets"
hero_subtitle: "Mythos is Anthropic's limited frontier model — access is currently restricted, but you can run Claude's most powerful available model (Opus 4.8) across spreadsheet rows today with =CLAUDE() in GPT for Sheets."
guide_product: "GPT for Sheets"
primary_cta_text: "Install GPT for Sheets"
primary_cta_url: "/gpt-for-sheets/?utm_source=seo&utm_medium=mythos_guide&utm_campaign=model_page_hero"
secondary_cta_text: "See Claude formulas"
secondary_cta_url: "#copy-paste-claude-formulas-for-google-sheets"
inline_cta_title: "Run Claude across entire Google Sheets columns"
inline_cta_text: "Install GPT for Sheets, choose Claude (Opus 4.8), and apply =CLAUDE() formulas to rows of leads, reviews, products, or research."
guide_badges:
  - "Claude in Sheets"
  - "Opus 4.8 available now"
  - "=CLAUDE() formulas"
  - "No Apps Script"
quick_start_title: "Claude quick start"
quick_start_steps:
  - "Install GPT for Sheets from the product page."
  - "Open the add-on sidebar in Google Sheets."
  - "Choose Claude (Opus 4.8), add your Anthropic API key, and run =CLAUDE() formulas."
guide_nav:
  - label: "Is Mythos available?"
    href: "#is-claude-mythos-available-in-google-sheets"
  - label: "Use Claude today"
    href: "#use-claude-in-google-sheets-today"
  - label: "Copy formulas"
    href: "#copy-paste-claude-formulas-for-google-sheets"
  - label: "FAQ"
    href: "#frequently-asked-questions"
formula_section_title: "Copy-paste Claude formulas for Google Sheets"
formula_section_intro: "Pick Claude Opus 4.8 in GPT for Sheets, drop a formula into row 2, then drag it down to run it across every row."
formula_cards:
  - title: "Research & explain"
    setup: "A: topic or question"
    formula: |
      =CLAUDE("Explain this clearly for a smart non-expert, with 3 key takeaways: " & A2)
  - title: "Score & classify"
    setup: "A: text · B: criteria or labels"
    formula: |
      =CLAUDE("Classify the following as one of [" & B2 & "] and explain why in one line: " & A2)
  - title: "Draft outreach"
    setup: "A: prospect · B: offer · C: angle"
    formula: |
      =CLAUDE("Write a short, personalized cold email to " & A2 & " offering " & B2 & " using this angle: " & C2)
---

## Is Claude Mythos available in Google Sheets?

**Short answer: not yet.** Claude Mythos 5 is Anthropic's limited-availability frontier model (the "Project Glasswing" sibling of Fable 5). Like Fable 5, its access was **suspended worldwide** in June 2026 under a US export-control directive — so it isn't usable in any product today, including Google Sheets.

**The practical alternative:** **GPT for Sheets** already runs **Claude Opus 4.8** — Anthropic's most powerful *generally available* model — plus GPT-5.5, Gemini 3, Grok 4.3, DeepSeek V4 and 100+ others, directly in spreadsheet cells. When Mythos/Fable reopen, you'll run them the same way with a `=CLAUDE()` formula.

- **Can I select Mythos in GPT for Sheets?** Not while access is restricted. Today you pick **Claude Opus 4.8** (or Sonnet 4.6 / Haiku 4.5) in the model dropdown.
- **Will my formulas change later?** No — when a new Claude model is available, you just select it; your `=CLAUDE()` formulas stay the same.
- **What's the strongest Claude I can use now?** **Opus 4.8**, excellent for deep reasoning, research, and high-quality drafting across rows.

## What is Claude Mythos?

Mythos 5 is a high-end, limited-release Claude model in the same generation as Fable 5. Anthropic restricted access shortly after launch for national-security / export-control reasons, with no public return date. This page will be updated when it becomes available.

Until then, the real way to get "Claude in Google Sheets" is **Claude Opus 4.8 via GPT for Sheets**.

## Use Claude in Google Sheets today

<div class="seo-product-cta" style="border: 1px solid #dbe4ff; background: #f8f9ff; border-radius: 16px; padding: 20px; margin: 24px 0;">
  <strong>Run Claude (Opus 4.8) in Google Sheets — no Apps Script, no waiting for Mythos</strong><br>
  Install GPT for Sheets and run Claude, GPT-5.5, Gemini, Grok, and Perplexity formulas directly in cells. Best for research, analysis, classification, outreach, and bulk enrichment.
  <div style="margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;">
    <a href="/gpt-for-sheets/?utm_source=seo&utm_medium=mythos_guide&utm_campaign=cta_box"><strong>Install GPT for Sheets →</strong></a>
    <a href="/gpt-for-sheets/#pricing"><strong>See plans →</strong></a>
  </div>
</div>

**Setup in under 2 minutes:** [Install GPT for Sheets](https://docgpt.ai/gpt-for-sheets/) → open the sidebar in Google Sheets → choose **Claude** and pick **Opus 4.8** → add your Anthropic API key → run `=CLAUDE()` formulas across entire columns. No Zapier, no Apps Script.

**Best for:** research and explanations, scoring and classification, nuanced rewriting, and personalized outreach generated row-by-row.

## Frequently asked questions

**Can I use Claude Mythos in Google Sheets right now?**
No — Mythos access is suspended worldwide as of June 2026. Use **Claude Opus 4.8** in GPT for Sheets instead; it's the most powerful Claude model currently available.

**How do I run Claude in Google Sheets?**
Install GPT for Sheets, open the sidebar, choose Claude (Opus 4.8), add your Anthropic API key, and write `=CLAUDE("your prompt " & A2)` in any cell.

**Is Mythos the same as Fable 5?**
They're sibling frontier models from the same Claude generation; both had access suspended in June 2026. Opus 4.8 is the strongest Claude model you can actually use today.

**Do I need Apps Script or Zapier?**
No. GPT for Sheets connects Claude to Google Sheets natively from the add-on sidebar.

**Can I use other models too?**
Yes — the same add-on runs GPT-5.5, Gemini 3, Grok 4.3, DeepSeek V4, Mistral, Perplexity, and any model via OpenRouter.
