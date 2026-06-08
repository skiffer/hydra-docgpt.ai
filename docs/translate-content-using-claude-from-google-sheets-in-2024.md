---
layout: docs_layouts/default
title: Translate content using Claude from Google Sheets in 2024
nav_order: 34
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/translate-content-using-claude-from-google-sheets-in-2024
description: Translate content using Claude from Google Sheets in 2024
---

# Translate content using Claude from Google Sheets in 2024

## Prerequisites

<div style="border: 1px solid #dbe4ff; background: #f8f9ff; border-radius: 16px; padding: 20px; margin: 24px 0;">
  <strong>Translate rows with Claude in Google Sheets</strong><br>
  Install GPT for Sheets to run `=CLAUDE()` translation formulas across entire columns, then review source text and translated output side by side.
  <div style="margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;">
    <a href="/gpt-for-sheets/?utm_source=seo&utm_medium=claude_translate_docs&utm_campaign=docs_page_cta&utm_content=translate_install"><strong>Install GPT for Sheets →</strong></a>
    <a href="/gpt-for-sheets/?utm_source=seo&utm_medium=claude_translate_docs&utm_campaign=docs_page_cta&utm_content=translate_pricing#pricing"><strong>See plans for bulk translation →</strong></a>
  </div>
</div>

1. Go to the [GPT for Sheets](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252), or start from the [GPT for Sheets product page](/gpt-for-sheets/?utm_source=seo&utm_medium=claude_translate_docs&utm_campaign=docs_page_text_cta&utm_content=prerequisite).

2. Click **Install**. ![Install-GPT-Mistral-Gemini-Claude-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-install.png)


### Use CLAUDE(prompt) function to translate your text any language

<iframe width="560" height="315" src="https://www.youtube.com/embed/IVehBwbRvWE?si=zwhMZZBP9WccCmiu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


1. Get content of the site using web functions
> =WEB_URL("https://docgpt.ai")

2. After that let's use AI for translation the content

> =CLAUDE("Translate site content into English" & C10)

where C10 is content of your scrapped content

<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="How to use GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
