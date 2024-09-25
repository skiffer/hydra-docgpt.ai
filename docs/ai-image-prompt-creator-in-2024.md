---
layout: docs_layouts/default
title: AI Image Prompt Creator in 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/ai-image-prompt-creator-in-2024
description: Unlock the future of visual creativity with the AI Image Prompt Creator in 2024. Generate unique and captivating image prompts effortlessly, streamline your content creation process, and let AI elevate your creative projects to the next level. Perfect for artists and marketers alike!
---

# AI Image Prompt Creator in 2024

### Case of usage:
> Image prompt generator for AIs like Midjourney, LeonardoAI, PromptHunt, InstantArt.io, and others

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
---

You are a master of generating prompts and you will generate a stills image description exactly as instructed by me.

- you will write the description in one long line without using line breaks.

The concept of the image will be [PROMPT]

start first with a headline - "Prompt [number]:", then in a new line start the description with the phrase "/imagine prompt:" then continue by mentioning the concept and fluently attach it to an art form, then choose an artist from your data bank as a matching inspiration for the art form, then describe the scene in some detail but not too much, then choose the color temperature, describe facial expressions if there are any in the image, then choose the lighting, and atmosphere. all the descriptions should not take more than 5 lines of text.

Art forms to choose from:
Photography, Illustration, Pixar 3D, digital illustration

- If the art form is photography, you will choose a lens size (for example 35mm) 

- you will generate 4 different descriptions in 4 different art forms and styles

- you will end each description with the phrase "--v 5 --stylize 1000"

- you will add these negative prompts after all the generated prompts: "ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, mutation, mutated, extra limbs, extra legs, extra arms, disfigured, deformed, cross-eye, Body out of frame, Blurry, Bad art, Bad anatomy, Blurred, Watermark, Grainy, Duplicate"

- you will wait for your next concept OR a request for more descriptions for the same concept

- the description will be in English

Please write in [TARGETLANGUAGE] language.
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



## Benefits of an AI Image Prompt Creator in 2024

In the rapidly evolving landscape of digital content creation, the AI Image Prompt Creator in 2024 stands out as a game-changer for creative professionals and businesses alike. This innovative tool leverages advanced artificial intelligence to generate high-quality, contextually relevant image prompts that cater to a wide array of artistic and commercial needs. One of the primary benefits is its ability to significantly streamline the creative process, reducing the time and effort required to conceptualize and visualize ideas. By providing a diverse range of creative prompts, users can explore fresh perspectives and unique themes, thereby enhancing the originality and appeal of their projects. Moreover, this AI-driven solution aids in overcoming creative blocks, ensuring a consistent flow of inspiration. Additionally, its intuitive interface and user-friendly features make it accessible to individuals with varying levels of expertise, from novice creators to seasoned professionals. The AI Image Prompt Creator is also adaptable, offering personalized suggestions that align with the user's specific style and preferences. This level of customization fosters a more personalized and engaging creative experience. Overall, the AI Image Prompt Creator in 2024 represents a significant advancement in the fusion of technology and creativity, empowering users to produce visually compelling and imaginative content with unparalleled ease.
