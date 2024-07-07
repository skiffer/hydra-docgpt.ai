---
layout: docs_layouts/default
title: Translate content using Gemini from Google Sheets in 2024
nav_order: 34
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/translate-content-using-gemini-from-google-sheets-in-2024
description: Translate content using Gemini from Google Sheets in 2024
---

# Translate content using Gemini from Google Sheets in 2024

### Use GEMINI(prompt) function to translate your text any language

<iframe width="560" height="315" src="https://www.youtube.com/embed/IVehBwbRvWE?si=zwhMZZBP9WccCmiu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


1. Get content of the site using web functions
> =WEB_URL("https://docgpt.ai")

2. After that let's use AI for translation the content

> =GEMINI("Translate content into French" & A35)

where A35 is content of your scrapped site

<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="How to use GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Prerequisites

1. Go to the [Workspace Installation Page](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252).

2. Click **Install**. ![Install-GPT-Mistral-Gemini-Claude-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-install.png)

