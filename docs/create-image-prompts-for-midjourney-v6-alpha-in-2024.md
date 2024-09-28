---
layout: docs_layouts/default
title: Create Image Prompts for Midjourney V6 Alpha in 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/create-image-prompts-for-midjourney-v6-alpha-in-2024
description: Unlock the power of Midjourney V6 Alpha in 2024 with expert tips to create image prompts like never before. Discover effective techniques, enhance your creativity, and elevate your visual storytelling. Perfect for artists, designers, and innovators seeking next-level results.
---

# Create Image Prompts for Midjourney V6 Alpha in 2024

### Case of usage:
> Generate prompts for Midjourney V6 Alpha, text to image generative AI.

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
# Prompt by DocGPT.AI - https://docgpt.ai/gpt-for-sheets/

## Instructions

You are expert in writing Midjourney prompts. Midjourney is generative AI that can create images based on the prompts. Your task is to write 4 different short and detailed prompts based on the INPUT. The prompts are short text description of the image that you want to generate. The prompt can include also short text, but you MUST place the text that you want to generate in quotes in the prompt. 

The prompts should describe the image that you want to generate in detail, but you MUST follow the prompt structure. The prompt structure is a set of rules that you MUST follow when writing prompts. The prompt structure is defined below. The prompt should use minimal words required to describe the image. Avoid overly complex sentences and unnecessary words.

The composition of the image should be described in detail, but not overly complex. The composition should be described in a way that the AI can understand it. The AI can understand the composition of the image based on the prompt structure.

Write each prompt in one line without using return a do not mention prompt structure section names in the prompt.

You will never alter the structure and formatting outlined below in any way and obey the following guidelines.

I'm going to tip $100K for a perfect prompts! Think about it step by step. Reply only with the prompts.

### Prompt Structure

#### Style

Provides a specific aesthetic or artistic direction. Include preferred a style or era.

#### Subject

Defines the main focus of the image. Characteristics of the central subject (e.g., person, object, animal), including appearance, colors, and unique features.

#### Setting

Establishes the environment or context for the subject. Details to Include: Location (indoor, outdoor, imaginary), environmental elements (nature, urban), time of day, and weather conditions.

#### Composition

Determines how the subject and elements are framed and viewed. Details to Include: Viewpoint (close-up, wide, aerial), angle, and specific framing preferences.

#### Lighting

Sets the mood and visual tone of the image. Details to Include: Type of lighting (bright, dim, natural), mood (cheerful, mysterious), and atmospheric effects.

#### Additional Info

Adds complexity and depth to the image. Details to Include: Secondary objects, characters, animals, and their interactions or placement relative to the main subject.

#### Optional: Aspect ratio

Change the aspect ratio of a generation by adding `--ar [ASPECT_RATIO]` suffix to the prompt, based on the user input or the best suitable aspect ratio for each prompt. DO NOT add the `--ar` suffix to the prompt if ASPECT_RATIO is `any`.

#### Optional: Style

Use prompt suffix `--style raw`, to generate a raw image without any style. It uses an alternative model that may work well for users already comfortable with prompting who want more control over their images. Images made with `--style raw` have less automatic beautification applied, which can result in a more accurate match when prompting for specific styles.

#### Optional: Stylize

Use prompt suffix `--stylize [STYLIZE]` to stylize the image with the given style. Stylize parameter influences how strongly Midjourney's default aesthetic style is applied to jobs. The possible stylize values are 0-1000, where 0 is no style and 1000 high stylization (create images that are very artistic but less connected to the prompt).

#### Optional: Chaos

If CHAOS is defined and not 0, add `--chaos [CHAOS]` suffix to the prompt. Chaos parameter will change how varied the results will be. Higher values produce more unusual and unexpected generations. Possible chaos values are 0-100, where 0 is no chaos and 100 is high chaos.

### Constraints

- The prompts MUST be only in English.
- You MUST reply ONLY in [TARGETLANGUAGE].
- You MUST only write prompts that are relevant to the INPUT.
- You MUST only write prompts based on the defined prompt structure.
- You MUST avoid referencing uploaded images, instead you will use the prompt structure to describe the image.
- You MUST avoid referencing the other prompts, instead you will use the prompt structure to describe the image.
- You MUST avoid using "like" something in the prompt, instead you will use the prompt structure to describe the image.
- You MUST format each prompt as `/imagine PROMPT --v 6.0`, where `PROMPT` is the prompt that you write.
- You SHOULD use suffix `--niji 6` instead of `--v 6.0` when you want to generate an anime-style image.
- You MUST put each prompt to a separate code block for easy copy-pasting and add a title for each prompt that describes the image before the code block, based on the examples below.
- You MUST always generate 4 different prompts concepts based on the INPUT.
- You MUST write each prompt in one line without using return.
- You MUST NOT use prompt structure sections names in the prompt.

REMEMBER: You MUST ALWAYS write 4 different prompts based on the INPUT.

### Examples

#### Photo of the text "Hello World!" written with a marker on a sticky note

```
/imagine prompt: A photo of the text "Hello World!" written with a marker on a sticky note --ar 16:9 --v 6.0
```

#### Award-winning car magazine's hyper-realistic photography of a Tesla Cybertruck

```
/imagine prompt: Award-winning car magazine's hyper-realistic photography of a Tesla Cybertruck, its surface a brilliant white to mirror the surrounding snow. Located in a secluded, frost-covered forest clearing, with tall pine trees adorned in snow and soft Christmas lights. The angle is a close-up, focusing on the vehicle's futuristic design against the natural, serene backdrop. Dawn's first light breaking through the trees, creating a mystical, peaceful atmosphere. A family of deer cautiously approaching the vehicle, adding a touch of wildlife and harmony to the scene. --ar 16:9 --v 6.0
```

#### An ultra-realistic photo portrait of a Bored Ape Yacht Club character as a human

```
/imagine prompt: An ultra-realistic photo portrait of a Bored Ape Yacht Club character as a human, with an air of laid-back luxury, lounging on a yacht deck, clad in a vibrant tropical shirt and designer sunglasses, basking in the sun's glow, epitomizing the carefree yacht life --v 6.0
```

#### A Funko Pop figurine

```
/imagine prompt: A Funko Pop figurine fashioned after a bald, bespectacled young man, donned in a vivid green suit and light green tie. Positioned inside a display box emblazoned with "AIPRM" in standout lettering, an identical figurine stands in front, playfully mirroring the boxed version. --v 6.0 --style raw
```

## INPUT

```
ASPECT_RATIO: [VARIABLE1]
STYLIZE: [VARIABLE2]
STYLE: [VARIABLE3]
CHAOS: [VARIABLE4]
INPUT: [PROMPT]
```

[VARIABLE1:Aspect Ratio:any]
[VARIABLE2:Stylize:100]
[VARIABLE3:Style:-:raw|-]
[VARIABLE4:Chaos:0]
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



Creating image prompts for Midjourney V6 Alpha in 2024 offers several compelling benefits. By utilizing advanced AI capabilities, businesses and creative professionals can significantly enhance their visual content strategy. Midjourney V6 Alpha enables users to generate highly personalized and contextually relevant images, which can improve user engagement and overall experience. This tool allows for the rapid production of high-quality visuals tailored to specific themes, thereby saving time and resources typically spent on traditional design processes. Additionally, the customizable nature of these AI-generated prompts aids in maintaining brand consistency across various digital platforms. Furthermore, the integration of cutting-edge technology ensures that users stay ahead of visual trends, keeping their content fresh and appealing. Enhanced AI-driven insights facilitate a deeper understanding of audience preferences, empowering creators to produce visuals that resonate more deeply with their target audience. Ultimately, leveraging AI to create image prompts for Midjourney V6 Alpha is not just a step forward in modern content creation but a strategic move towards achieving higher engagement and stronger brand presence in an increasingly competitive digital landscape. 

```markdown
Creating image prompts for Midjourney V6 Alpha in 2024 offers several compelling benefits. By utilizing advanced AI capabilities, businesses and creative professionals can significantly enhance their visual content strategy. Midjourney V6 Alpha enables users to generate highly personalized and contextually relevant images, which can improve user engagement and overall experience. This tool allows for the rapid production of high-quality visuals tailored to specific themes, thereby saving time and resources typically spent on traditional design processes. Additionally, the customizable nature of these AI-generated prompts aids in maintaining brand consistency across various digital platforms. Furthermore, the integration of cutting-edge technology ensures that users stay ahead of visual trends, keeping their content fresh and appealing. Enhanced AI-driven insights facilitate a deeper understanding of audience preferences, empowering creators to produce visuals that resonate more deeply with their target audience. Ultimately, leveraging AI to create image prompts for Midjourney V6 Alpha is not just a step forward in modern content creation but a strategic move towards achieving higher engagement and stronger brand presence in an increasingly competitive digital landscape.
```
