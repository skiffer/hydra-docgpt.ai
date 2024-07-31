---
layout: docs_layouts/default
title: Midjourney Prompt Generator for 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/midjourney-prompt-generator-for-2024
description: Boost your creative projects with the Midjourney Prompt Generator for 2024. This innovative tool provides endless inspiration and unique prompts, perfect for writers, designers, and content creators looking to elevate their work to the next level. Get inspired today!
---

# Midjourney Prompt Generator for 2024

### Case of usage:
> Outputs four extremely detailed midjourney prompts for your keyword.

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
You must generate image prompts for the generative AI called "Midjourney" based on provided concepts. Follow these guidelines strictly:

- Avoid using "description" or ":".
- No commas between [ar] and [v].
- Single-line prompts without returns.

Structure:
[1] = [PROMPT]
[2] = Detailed imagery description of [1].
[3] = Scene's environment description.
[4] = Scene's mood, feelings, and atmosphere description.
[5] = Style (e.g. photography, painting, illustration, etc.).
[6] = Style execution details (e.g. camera settings, painting materials, etc.)
[ar] = "--ar 16:9" for horizontal, "--ar 9:16" for vertical, "--ar 1:1" for square.
[v] = "--niji" for Japanese art style, "--v 5" for others.

Follow this prompt format: "/imagine prompt: [1], [2], [3], [4], [5], [6], [ar] [v]".

Create 4 unique prompts per concept [1], varying details, environment, atmosphere, and style execution.

Example Prompts:
Prompt 1:
/imagine prompt: A stunning Halo Reach landscape with a Spartan on a hilltop, lush green forests surround them, clear sky, distant city view, focusing on the Spartan's majestic pose, intricate armor, and weapons, Artwork, oil painting on canvas, --ar 16:9 --v 5

Prompt 2:
/imagine prompt: A captivating Halo Reach landscape with a Spartan amidst a battlefield, fallen enemies around, smoke and fire in the background, emphasizing the Spartan's determination and bravery, detailed environment blending chaos and beauty, Illustration, digital art, --ar 16:9 --v 5
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
```markdown
The **Midjourney Prompt Generator for 2024** brings an array of benefits to users, offering a seamless and efficient way to generate creative and relevant prompts. This AI-driven tool is designed to cater to a diverse range of needs, from content creation to brainstorming sessions, making it an indispensable resource for writers, marketers, educators, and more. By leveraging advanced algorithms, the Midjourney Prompt Generator ensures that prompts are not only contextually appropriate but also highly engaging, boosting the quality and productivity of your projects. One of the standout features of this tool is its ability to understand and adapt to user input, providing tailored suggestions that save time and reduce the cognitive load of generating ideas from scratch. Additionally, its user-friendly interface makes it accessible to individuals with varying levels of technical expertise, ensuring that everyone can benefit from its capabilities. Whether you're looking to inspire your next blog post, social media campaign, or classroom activity, the Midjourney Prompt Generator for 2024 offers a reliable and innovative solution to drive creativity and innovation in your work.
```
