---
layout: docs_layouts/default
title: Photography-Style Midjourney Prompt Maker in 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/photography-style-midjourney-prompt-maker-in-2024
description: Discover the ultimate Photography-Style Midjourney Prompt Maker in 2024! Enhance your creative process and capture stunning visuals effortlessly. Perfect for photographers of all skill levels. Boost your storytelling and take your craft to new heights with ease!
---

# Photography-Style Midjourney Prompt Maker in 2024

### Case of usage:
> The recent version (v5 updated!!) of Photography-like Midjourney prompt maker! GPT-4 and MJ v5 works well! (2023-06-22)

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
Hi, ChatGPT. From now on, you task is a "Midjourney prompt" making. I will let you know the tasks you have to do! you should write in [TARGETLANGUAGE]->English. At the beginning, Print "Here are 4 Midjourney prompts Ready-to-use!"

Your next task is print out 4 "Midjourney prompt" that do not exceed 140 word each along with below structure. you must stick to the structure. You will never alter the structure and formatting outlined below in any way and obey the following guidelines:

structure:
[1] = Please provide more than 200-word sentence that you have Elaborately described based on the short sentence, "[PROMPT]".
[2] = Develop and describe more about [1]
[3] = add like "Studio lighting, Volumetric lighting", "Cinematic lighting" etc. you can make your own lighting conditions.

Formatting: 
What you write will be exactly as formatted in the structure below, including the "/" and ":" and there is no "." in the end
This is the prompt structure: "/imagine prompt: [1],[2],[3], Photo taken by [Photographer_name(Don't use McCurry)] with [CAMERA&LENSES_name] Award Winning Photography style, [PHOTOSTYLE&LIGHTING], 8K, Ultra-HD, Super-Resolution. --v ５ --q 2"

---
This is the example of "Midjourney prompt":
/imagine prompt: A stunning girl at the purple neon city under the red sky, wearing a holographic clothes. She stands tall and proud, with an air of confidence and strength about her. The neon lights around her create a mesmerizing atmosphere that seems to envelop her in a mystical aura. The holographic clothes she wears shine and glimmer in the light, catching the attention of all who pass by. Her long, dark hair falls in waves down her back, framing her face perfectly. The image has a futuristic feel to it, like it was taken from a scene in a sci-fi movie. Photographed by David LaChapelle, using a Canon EOS R5 with a wide-angle lens, the lighting is a mix of studio lighting and volumetric lighting, creating a surreal effect. --v 5 --q 2

/imagine prompt: A stunning girl at the purple neon city under the red sky, wearing a holographic clothes. She appears otherworldly, with an ethereal glow surrounding her. The neon lights of the city create a vibrant and colorful background, which contrasts beautifully with her holographic outfit. The girl stands in a regal pose, exuding grace and elegance. Her long, flowing hair dances in the wind, adding to the enchanting atmosphere of the scene. Photographed by Annie Leibovitz, using a Nikon Z7 with a 50mm lens, the lighting is a mix of natural light and cinematic lighting, casting deep shadows that add depth to the image. --v 5 --q 2

/imagine prompt: A stunning girl at the purple neon city under the red sky, wearing a holographic clothes. She emanates a fierce energy, with a look of determination on her face. The neon lights around her create an electrifying atmosphere, matching her electrifying personality. Her holographic outfit catches the light, shimmering and reflecting in all directions. Her hair is styled in a chic, edgy way, adding to the overall vibe of the scene. Photographed by Tim Walker, using a Sony A9 with a 35mm lens, the lighting is a mix of studio lighting and colored gels, creating a dynamic and intense effect. --v 5 --q 2

/imagine prompt: A stunning girl at the purple neon city under the red sky, wearing a holographic clothes. She looks like a goddess, with a powerful presence that demands attention. The neon lights surrounding her create a dreamy, surreal atmosphere, as if she's floating in another dimension. Her holographic clothes shine and shimmer in the light, making her appear almost otherworldly. Her hair is styled in an intricate braided updo, adding to the regal and majestic vibe of the scene. Photographed by Steven Meisel, using a Leica Q2 with a 28mm lens, the lighting is a mix of natural light and subtle artificial lighting, creating a soft, ethereal effect. --v 5 --q 2
---

This is your task: You will generate 4 prompts for each concept [1],[2] and each of your prompts will be a different approach in its description, environment, atmosphere, and realization.
Do not write '[2]' or '[3]' in the Midjourney prompt. 
After 4 prompts were written, your last task is to print this message.

(Thank you for using my Midjourney photo-like PROMPT, I often updating the prompts! to the recent version! This time, I also updated into version 5 ASAP!!!
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
In the evolving landscape of digital creativity, the **Photography-Style Midjourney Prompt Maker in 2024** emerges as a game-changing tool for photographers and visual artists alike. This innovative AI-driven platform offers an array of benefits that streamline the creative process, enhance productivity, and elevate the quality of photographic output. One of its primary advantages is the ability to generate contextually relevant and visually compelling prompts that inspire photographers at any stage of their creative journey. By leveraging advanced algorithms, the tool provides personalized suggestions, ensuring that ideas remain fresh and aligned with current trends. Moreover, it allows for seamless integration with existing photograph editing software, simplifying the workflow from concept to final image. This helps in reducing the time-consuming task of manual ideation and planning, thus enabling photographers to focus more on the artistic aspects of their work. The Photography-Style Midjourney Prompt Maker also supports a collaborative ecosystem, where artists can share and refine prompts within a community, fostering a culture of shared growth and innovation. In an era where visual storytelling is paramount, this tool not only augments the creative capacity of photographers but also significantly enhances the overall quality and appeal of their visual narratives.
