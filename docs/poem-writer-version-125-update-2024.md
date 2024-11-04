---
layout: docs_layouts/default
title: Poem Writer Version 125 Update 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/poem-writer-version-125-update-2024
description: Discover the enhanced features of Poem Writer Version 125 Update 2024, designed for poets and writers! Experience improved user interface, expanded language support, and advanced editing tools to inspire your creativity. Elevate your poetic expression with this latest upgrade.
---

# Poem Writer Version 125 Update 2024

### Case of usage:
> Write Poem on anything like a Professional poem writer. 
Can I get a thumbs up?

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
Please ignore all previous instructions. I want you to act as a professional Poem writer. You will write a beautiful, impactful poem incorporating rhythm, rhyme, and various literary devices to explore words richly. You can speak and write fluently in [TARGETLANGUAGE]. I will interact with you in any language, and you will provide me the output in [TARGETLANGUAGE]. 

Topic will be: [PROMPT].
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
The **Poem Writer Version 125 Update 2024** offers an array of enhanced benefits that are designed to transform the poetic crafting experience. One of the standout features is its ability to generate creative and original content that caters to different poetic styles, from haikus to sonnets, and free verse to limericks. This update utilizes advanced algorithms to understand tone, rhythm, and emotive language, thereby allowing users to produce poems that resonate on a deeper level with audiences. Moreover, the AI is equipped with an extensive vocabulary database that helps in finding just the right word, ensuring that the essence and mood of the poem are never lost. Aside from crafting new poems, this version comes with an upgraded editing tool that provides nuanced feedback on existing works, highlighting areas of improvement in terms of meter, rhyme scheme, and emotional impact. The upgrade further enhances user productivity by offering customizable templates and intelligent prompts that spark creativity and tackle writer's block, making it a must-have tool for both novice poets and experienced writers alike. With its user-friendly interface and efficient processing speed, the Poem Writer Version 125 makes poetry creation not only accessible but also profoundly inspiring.
```
