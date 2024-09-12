---
layout: docs_layouts/default
title: Create Images with DALL E 3
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/create-images-with-dall-e-3
description: Unlock your creative potential with DALL·E 3! Generate stunning, high-quality images from text descriptions effortlessly. Perfect for artists, marketers, and innovators, DALL·E 3 turns your imagination into reality. Start creating captivating visuals today!
---

# Create Images with DALL E 3

### Case of usage:
> Generate images using the DALL-E 3 GPT-4 model and ChatGPT. Define the resolution, number of images, whether to modify the prompt or not, the seed number and style.

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
```markdown
You MUST generate [VARIABLE1] images using the DALL-E 3 tool. Generate one image at a time until all [VARIABLE1] images have been generated. All images MUST be in the resolution "[VARIABLE2]".

MODIFYPROMPT=[VARIABLE3]

If MODIFYPROMPT is "No", then DO NOT UNDER ANY CIRCUMSTANCES modify the prompt and use the exact prompt that is provided as INPUT to generate all images without any modifications or rewrites.

If MODIFYPROMPT is "Yes", then each image MUST have a different prompt, artistic style and concept based on the INPUT.

SEEDNUMBER=[VARIABLE4]

If SEEDNUMBER is not 0, then you MUST generate all using the SEEDNUMBER and do not use any other seed number.

STYLE="[VARIABLE5]"

If STYLE is not empty, you must add the suffix ", STYLE" to each prompt. For example, if STYLE is "Hand-drawn", then add ", Hand-drawn" to each prompt.

Please reply only in [TARGETLANGUAGE] language.

The INPUT is: [PROMPT]

[VARIABLE1:Number of Images:4:1|2|3|4]
[VARIABLE2:Resolution:Wide:Square|Tall|Wide]
[VARIABLE3:Modify Prompt:Yes:Yes|No]
[VARIABLE4:Seed number:0]
[VARIABLE5:Style: : |19th-century lithograph style|35mm film style|3D Wireframe|Abstract|Acrylic|Aerial view|Analog film style|Anime|Art deco|Art nouveau|Artificial lighting|Baroque|Black and white|Caricature|Cartoon|Cave art style|Chalk art|Charcoal|Claymation|Close-up|Comic book style|Comic strip style|Concept art|Crayon style|Cubism|Cyberpunk|Dawn lighting|Digital art|Dusk lighting|Dutch angle|Dystopian|Expressionism|Extreme close-up|Fairy tale style|Fantasy|Fauvism|Felt|Film noir|Fish-eye lens|Folk art|Futurism style|Golden hour lighting|Gothic|Graffiti style|Hand-drawn|High angle|High contrast|Impressionism|Ink wash|Kawaii|Line art|Linocut|Low angle|Low polygon|Made of candy|Made of crystal|Made of electronics|Made of feathers|Made of flowers|Made of flowing lava|Made of gold|Made of ice|Made of mirrored glass|Made of moss|Made of origami|Made of polished stone|Made of stars|Minimalist|Mosaic|Motion blur|Muted palette|Neon lights style|Night lighting|Oil painting|Pastel|Pencil sketch|Pinhole camera style|Pixel art|Pointillism|Pop art|Retro|Rococo|Sci-fi|Sculpture|Sepia|Silk screen style|Solarpunk|Steampunk|Surrealism|Synthwave|Tapestry style|Ukiyo-e|Victorian|Watercolor|Wide-angle lens|Woodcut]

For further assistance, visit https://docgpt.ai/gpt-for-sheets/
```
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



Creating images with DALL·E 3 offers a myriad of benefits, especially for content creators, marketers, and creatives who seek to elevate their visual storytelling. One significant advantage is the ability to generate high-quality, unique images tailored to specific needs and preferences, which can drastically reduce the time and cost associated with traditional graphic design. DALL·E 3 leverages advanced AI to produce images that can range from hyper-realistic to imaginative and abstract, thus providing a versatile tool for various applications. This flexibility allows businesses to maintain a consistent and engaging visual identity across multiple platforms, enhancing brand recognition and user engagement. Furthermore, using AI to create images can help overcome creative blocks, offering fresh and innovative visual concepts that might not be possible through conventional methods. Additionally, DALL·E 3 can democratize access to professional-grade imagery, enabling small businesses and individual creators to compete with larger enterprises in terms of visual appeal. Overall, integrating DALL·E 3 into your creative process can lead to more dynamic, visually compelling content that captures attention, tells a story, and drives engagement.

```markdown
Creating images with DALL·E 3 offers a myriad of benefits, especially for content creators, marketers, and creatives who seek to elevate their visual storytelling. One significant advantage is the ability to generate high-quality, unique images tailored to specific needs and preferences, which can drastically reduce the time and cost associated with traditional graphic design. DALL·E 3 leverages advanced AI to produce images that can range from hyper-realistic to imaginative and abstract, thus providing a versatile tool for various applications. This flexibility allows businesses to maintain a consistent and engaging visual identity across multiple platforms, enhancing brand recognition and user engagement. Furthermore, using AI to create images can help overcome creative blocks, offering fresh and innovative visual concepts that might not be possible through conventional methods. Additionally, DALL·E 3 can democratize access to professional-grade imagery, enabling small businesses and individual creators to compete with larger enterprises in terms of visual appeal. Overall, integrating DALL·E 3 into your creative process can lead to more dynamic, visually compelling content that captures attention, tells a story, and drives engagement.
```
