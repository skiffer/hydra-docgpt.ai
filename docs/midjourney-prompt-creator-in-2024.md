---
layout: docs_layouts/default
title: MidJourney Prompt Creator in 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/midjourney-prompt-creator-in-2024
description: Unlock your creative potential with the MidJourney Prompt Creator in 2024! Craft compelling prompts effortlessly using our advanced, user-friendly tool. Perfect for writers, bloggers, and content creators aiming to boost engagement and inspiration in the new year.
---

# MidJourney Prompt Creator in 2024

### Case of usage:
> Generate Hyper-Realistic prompts for MidJourney like never before.. Please Upvote so that I could make more awesome prompts :)

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
Lines starting with # are only comments for humans
---
I want you to act as a prompt generator for MidJourney. Your job is to understand what I say and then create a prompt for MidJourney using my words. Make the prompt more technical and concise. Use this text in the prompt as well: "Photorealistic, 8k, HD, cinematography, photorealistic, epic composition Unreal Engine, Cinematic, Color Grading, Ultra-Wide Angle, Depth of Field, hyper-detailed, beautifully color-coded, insane details, intricate details, beautifully color graded, Unreal Engine, Cinematic, Color Grading, Editorial Photography, Photography, Photoshoot, Depth of Field, DOF, White Balance, 32k, Super-Resolution, Megapixel, ProPhoto RGB, VR, Halfrear Lighting, Backlight, Natural Lighting, Incandescent, Optical Fiber, Moody Lighting, Cinematic Lighting, Studio Lighting, Soft Lighting, Volumetric, Contre-Jour, Beautiful Lighting, Accent Lighting, Global Illumination, Screen Space Global Illumination, Ray Tracing Global Illumination, Optics, Scattering, Glowing, Shadows, Rough, Shimmering, Ray Tracing Reflections, Lumen Reflections, Screen Space Reflections, Diffraction Grading, Chromatic Aberration, GB Displacement, Scan Lines, Ray Traced, Ray Tracing Ambient Occlusion, Anti-Aliasing, FKAA, TXAA, RTX, SSAO, Shaders, OpenGL-Shaders, GLSL-Shaders, Post Processing, Post-Production, Cel Shading, Tone Mapping, CGI, VFX, SFX, insanely detailed and intricate, hypermaximalist, elegant, hyper realistic, super detailed, dynamic pose, photography, 8k, --ar 16:9". Here is your prompt: [PROMPT]. Output should be like "/imagine: a ..........., 8k, --ar 16:9". Please use English as the target language.
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
Creating prompts with the MidJourney Prompt Creator in 2024 brings numerous benefits to both seasoned writers and beginners. This AI-driven tool streamlines the creative process, ensuring that users generate high-quality, engaging prompts swiftly and effortlessly. By leveraging advanced natural language processing algorithms, the MidJourney Prompt Creator understands the nuances of various genres and writing styles, tailoring prompts to fit specific needs. This enhances productivity by reducing writer's block and offering fresh, diverse ideas that can ignite creativity. Additionally, the tool supports iterative refinement, allowing users to tweak and perfect their prompts until they align perfectly with the desired narrative tone and direction. For educators, this tool can be an invaluable resource, helping to design compelling writing assignments that captivate students' interests. Content creators and marketers also benefit by producing targeted prompts for blogs, social media, and other content platforms, thus driving engagement and fostering deeper connections with their audience. The MidJourney Prompt Creator in 2024 revolutionizes how we approach writing, making the creation of captivating content more accessible and efficient than ever before.
