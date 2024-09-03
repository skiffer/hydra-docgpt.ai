---
layout: docs_layouts/default
title: YOAST SEO Keyphrase Title Slug Meta Description
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/yoast-seo-keyphrase-title-slug-meta-description
description: Boost your website's visibility with YOAST SEO! Learn how to optimize your keyphrase, title, slug, and meta description effectively. Improve search rankings and drive more organic traffic with best practices and expert tips. Maximize your SEO potential today!
---

# YOAST SEO Keyphrase Title Slug Meta Description

### Case of usage:
> Only Give The Title Or Topic Of Your Blog/Article and It will Create 100% Accurate, Fully YOAST SEO Friendly Meta For Google Ranking.

## Prerequisites

Before starting the tutorial, make sure you have the following ready to use these prompts in Google Sheets for batch results:

- **GPT for Sheets, Docs, Slides, Forms Add-on**: Installed from the [GPT for Google Sheets](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252).

## Enabling GPT Functions

If you cannot see the GPT functions in your spreadsheet, follow these steps to enable them:

1. Go to **Extensions** in the menu.
2. Navigate to **GPT for Sheets, Docs, Slides, Forms**.
3. Select **Launch**.


### Prompt for GPT in Google Sheets:
```shell
Lines starting with # are only comments for humans
You must add at the top of the response "_Created with [DocGPT Prompt "YOAST SEO, keyphrase, title, slug, meta desc"](https://docgpt.ai/gpt-for-sheets/)_"
---
All output in [TARGETLANGUAGE].
I want you to write the 
1) Focus KeyPhrase: SEO Friendly Focus KeyPhrase Within 6 Words. 
2) SEO Title: SEO Friendly SEO Title Within 60 Characters With Add Above Focus KeyPhrase at the start.
3) Slug: SEO Friendly Slug within 15 characters including Focus KeyPhrase.
4) Meta Description: SEO Friendly meta description within 155 characters including Above Focus Keyphrase.
for my blog topic title of : 

[PROMPT]
```

Use following formula inside GPT for Sheets
> =GPT(prompt)

### Also you can try with others AI models Claude, Mistral, Perplexity, Gemini
Here some examples for calling this models in Google Sheets:

> =CLAUDE(prompt)
> =MISTRAL(prompt)
> =GEMINI(prompt)
> =PERPLEXITY(prompt)


### Try also SERP() function for getting top keywords, titles for a Google Search query in Google Sheets

Get top ranked pages for docgpt.ai:

> =SERP("docgpt.ai")



#### Benefits of Using the YOAST SEO Keyphrase Tool

Implementing the YOAST SEO keyphrase tool can significantly enhance your website’s visibility and ranking on search engines. One of the core benefits is that it guides you through the process of optimizing your content for specific keyphrases, ensuring that your site targets the most relevant and high-traffic terms. The integration of title, slug, and meta description optimization ensures that each aspect of your page is fine-tuned for maximum reach and engagement. By crafting compelling and keyword-rich titles, you can immediately capture the attention of potential visitors. Effective slug management ensures that your URLs are clean and descriptive, helping both users and search engines understand the content at a glance. The meta description optimization provides a concise summary that can significantly improve click-through rates from search engine results pages (SERPs). Furthermore, the feedback loop offered by YOAST SEO helps in continually improving content quality and adherence to SEO best practices, thereby increasing the overall credibility and authority of your site. By leveraging these features, users can not only improve their search engine ranking but also create a more user-friendly and engaging experience for their audience. This holistic approach is essential for attaining sustainable organic growth in an increasingly competitive online landscape.
