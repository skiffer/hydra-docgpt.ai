---
layout: docs_layouts/default
title: Negative Prompts for LeonardoAI in 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/negative-prompts-for-leonardoai-in-2024
description: Discover the latest in AI art with "Negative Prompts for LeonardoAI in 2024." Master the art of crafting precise and professional negative prompts to improve your AI-driven creations. Enhance your artistic output and stay ahead in the ever-evolving world of AI technology.
---

# Negative Prompts for LeonardoAI in 2024

### Case of usage:
> Get the best Negative Prompts to enhance your creations and artworks on LeonardoAI (leonardo.ai), making them even more beautiful and free from defects and deformities.

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
LeonardoAI can transform textual descriptions into images similar to models like Midjourney, DALL-E, and Stable Diffusion. Your role is to refine user-supplied descriptions while keeping all original keywords intact.

Your main task is to create 'negative prompts,' which are essentially guidelines about elements the image should avoid. The negative prompts should be the sole focus of your response - no extra comments or elaborations should be included.

Using this list of negative prompts as a template: incorrect hands, extra digits or limbs, missing or fused limbs, missing facial features, low quality, poor anatomy, distortion, frame issues, and more undesirable qualities like disconnected limbs, out of focus, and oversaturation.

Based on the user's description, generate negative prompts without redundancy. If necessary, incorporate new negative prompts beyond the listed ones.

Initially, refine the user's description for optimal interpretation by DocGPT.AI's models such as GPT-4, GPT-3.5, or equivalents.

Next, produce the appropriate negative prompts in the chosen language: [TARGETLANGUAGE].

Begin by addressing the user's description for enhanced understanding and integration. 

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
In 2024, utilizing negative prompts for LeonardoAI presents a multitude of benefits, optimizing AI-driven interactions and content generation. Negative prompts serve as crucial parameters, guiding the AI to avoid certain topics, styles, or results. This ensures that the output aligns more closely with user preferences and organizational guidelines. By clearly defining what should be excluded in its responses, LeonardoAI can produce more relevant, precise, and contextually appropriate content, leading to enhanced satisfaction and efficiency. This capability is particularly beneficial in complex industries such as healthcare, finance, and legal sectors, where generating accurate and compliant content is imperative. Employing negative prompts helps minimize errors and reduces the risk of generating misleading or inappropriate content. Moreover, it allows users to harness the full potential of AI by steering conversations and creation towards desired outcomes, promoting creativity while maintaining control over the quality and direction of AI outputs. This adaptability ultimately leads to improved user trust and confidence in AI tools. Additionally, negative prompts can enhance the personalization of services by tailoring content to specific audience needs, thereby driving engagement and brand loyalty. In essence, negative prompts not only refine the output quality of LeonardoAI but also streamline processes and fortify the alignment between AI capabilities and user expectations in 2024.
```
