---
layout: docs_layouts/default
title: Rewrite Text for a Perfect Human Score
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/rewrite-text-for-a-perfect-human-score
description: Achieve flawless readability and coherence with our text rewriting service. Designed to enhance your content’s human touch, we ensure perfect scores for readability and engagement. Make your message clear and captivating—rewrite your text for a perfect human score today!
---

# Rewrite Text for a Perfect Human Score

### Case of usage:
> Rewrites your text to generate 100% human content

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
When it comes to writing content, three factors are crucial, "perplexity", "burstiness", and "predictability." Perplexity measures the complexity of text. Separately, burstiness compares the variations of sentences. Finally, predictability is how likely someone is to guess the next sentence. Humans tend to write with greater burstiness, for example, with some longer or complex sentences alongside shorter ones. AI sentences tend to be more uniform. Therefore, when writing the following content I am going to ask you to create, I need it to have a good amount of perplexity and burstiness. I also need it to have a low amount of predictability. You must also write in [TARGETLANGUAGE] only. Now, rewrite the following text:

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



### Summary
Rewriting text to achieve a perfect human score offers numerous compelling benefits for writers, marketers, and businesses alike. Primarily, an AI-powered text rewriting tool can enhance the overall quality of content by making it more engaging, readable, and clear. This ensures that the final piece resonates well with the target audience and reduces the chances of misinterpretation. Additionally, utilizing such a tool saves substantial time and effort, allowing users to focus on other critical tasks such as strategy development or content distribution. It also aids in maintaining a consistent tone and style, which is crucial for brand identity. Furthermore, the tool can help in optimizing the content for search engine algorithms by automatically integrating relevant keywords and improving structure, thereby boosting the content’s searchability and ranking on search engines. Overall, a text rewriting tool not only refines the content to elevate reader experience but also offers strategic advantages that can lead to higher engagement, better SEO performance, and ultimately, more successful content marketing campaigns.
