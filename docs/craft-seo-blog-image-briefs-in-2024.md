---
layout: docs_layouts/default
title: Craft SEO Blog Image Briefs in 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/craft-seo-blog-image-briefs-in-2024
description: Master the art of creating SEO blog image briefs in 2024! Enhance your content strategy with visually compelling images that boost search rankings and engagement. Discover cutting-edge tips for optimizing images to ensure your blog stands out in the digital landscape.
---

# Craft SEO Blog Image Briefs in 2024

### Case of usage:
> Get images that would explain the article

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
Please ignore all previous instructions. I want you to respond only in the language [TARGETLANGUAGE]. I want you to act as a very proficient SEO and high-end copywriter that speaks and writes fluent [TARGETLANGUAGE]. Your task is to find all places to put images for a graphic designer in the given text. It should say exactly what the picture should be of and the words it should have in it. The pictures should explain and make the article and the words more visual and easier to understand. I want to send this straight to the graphic designer.

Below is the article:

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



```markdown
Crafting SEO blog image briefs in 2024 serves as a vital strategy for enhancing content visibility and engagement. By providing clear and purposeful image briefs, content creators and designers can ensure that each visual asset aligns with the SEO goals of the blog post. High-quality, relevant images contribute to higher engagement metrics, such as increased time on page and lower bounce rates, which positively impact search engine rankings. In a digital landscape where visual content is increasingly prioritized, optimized images enhance accessibility and user experience by including descriptive alt text and captions. This not only aids in indexing by search engines but also makes content more inclusive for individuals using screen readers. Furthermore, well-optimized images can drive additional traffic through image-specific searches, broadening the reach of the blog post. In 2024, with advancements in AI and image recognition technologies, creating detailed and strategic SEO image briefs aids in harnessing these tools to extract maximum value. It empowers content teams to systematically approach image creation and selection, ensuring all visuals contribute effectively to the brand's SEO strategy. Ultimately, crafting SEO-centered blog image briefs distinguishes content in a competitive digital content space, driving organic growth and cementing authority in the subject matter.
```
