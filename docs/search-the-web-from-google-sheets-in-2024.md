---
layout: docs_layouts/default
title: Search the web from Google Sheets in 2024
nav_order: 9
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/search-the-web-from-google-sheets-in-2024
description: Search the web from Google Sheets in 2024
---

# Search the web from Google Sheets in 2024


Utilize the PERPLEXITY(prompt) function to conduct real-time web searches and obtain current information. This function is invaluable for inquiries regarding events, facts, individuals, or companies where timeliness and accuracy are crucial. It leverages Perplexity AI's online model for reliable results.

The PERPLEXITY(prompt) function enables you to ask direct questions and get up-to-date answers based on a web search:

> =PERPLEXITY("What are the latest developments in renewable energy technologies?")

### Provide a specific URL from which the information must be retrieved:

> =PERPLEXITY("What services does this company provide? https://docgpt.ai")


## Scrape a single URL using WEB functions

=WEB_URL("https://docgpt.ai")

=WEB_TITLE("https://docgpt.ai")

=WEB_DESCRIPTION("https://docgpt.ai")

=WEB_H1("https://docgpt.ai")

=WEB_H2("https://docgpt.ai/")

=WEB_HEADINGS("https://docgpt.ai")

=WEB_PARAGRAPHS("https://docgpt.ai")

<iframe width="560" height="315" src="https://www.youtube.com/embed/Bn6UzkrCaBs?si=fFzBXX0kb823Ej-f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Prerequisites

1. Go to the [Workspace Installation Page](https://workspace.google.com/u/0/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252).

2. Click **Install**. ![Install-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-install.png)

## How to Launch <a href="/gpt-for-sheets/">GPT for Sheets</a>

1. Open your Google Sheet.
2. Click on **Extensions** > **GPT for Docs, Sheets, Slides, and Forms** > **Launch** ![Launch-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-launch.png)
3. A **sidebar** will be opened on the right side of the page.

![Launch-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-sidebar.png){: width="500"}




### Web Scrapping functions:

=WEB_URL("https://docgpt.ai")

=WEB_TITLE("https://docgpt.ai")

=WEB_DESCRIPTION("https://docgpt.ai")

=WEB_H1("https://docgpt.ai")

=WEB_H2("https://docgpt.ai/")

=WEB_HEADINGS("https://docgpt.ai")

=WEB_PARAGRAPHS("https://docgpt.ai")

=WEB_URLS_DATA(A37:A39)


AI SUPPORTED FUNCTIONS:

GPT-3, GPT-4, GPT VISIONS (image recognition)

=GPT(prompt, [value])

=CLAUDE(prompt)

=GEMINI(prompt)

=MISTRAL(prompt)

=GPT_IMAGE(url, prompt)

=GPT_TAG(text, [tags])

=GPT_EXTRACT(text, to_extract)

=GPT_TRANSLATE(text, target, [source])

=GPT_SUMMARIZE(text, [format])

=GPT_FORMAT(text, source, target)

=GPT_CLASSIFY(text, categories)

=GPT_FILL(examples, inputs)

=GPT_LIST(prompt, [value])

=GPT_HLIST(prompt, [value])

=GPT_SPLIT(text, split_by)

=GPT_HSPLIT(text, split_by)

=GPT_APPLY(text, [task])

=GPT_TABLE(prompt, headers)

