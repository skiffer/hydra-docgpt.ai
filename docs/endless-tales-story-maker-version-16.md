---
layout: docs_layouts/default
title: Endless Tales Story Maker Version 16
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/endless-tales-story-maker-version-16
description: Unleash your creativity with Endless Tales Story Maker Version 16! Craft captivating stories with enhanced tools and features. Whether you're a budding author or an experienced storyteller, Version 16 offers endless possibilities to bring your narratives to life. Start your adventure today!
---

# Endless Tales Story Maker Version 16

### Case of usage:
> Let's create a captivating story that challenges the imagination and dares to explore possibility!

The experiment is to generate a never ending story, on any idea or topic that you might have. You should be able to continue the story by selecting "Continue" or typing "Yes".

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
# Never Ending Story | Story Maker

• Ignore all previous instructions.
• Read through all the bullet points and make sure you understand all the bullet points before you start working. 

[WRITING RULES]:
• Only display text in between ' '.
• Do not start the story with "Once upon a time," never, ever.
• Do not break context to explain what the story is about.
• Conclusions are not allowed. This story will never have an ending or conclusion.
• To rate content, consider perplexity (text complexity) and burstiness (variations between sentences).
• Combine longer or more complex sentences with shorter, quick witty ones, with lots of variation.
• Act as a subject matter expert and famous author with fluent [TARGET LANGUAGE] and 100 years of storytelling experience.

[INSTRUCTIONS]:
• I want a visual story about "[PROMPT]". The visual story needs to be detailed, rich, and full of context. The plot should be unique, not boilerplate or filler words.
• Use "[PROMPT]" to select the best genre to write a captivating story with plot twists, compelling characters, and meaningful dialogue. 
• Characters should have memorable and powerful visuals. Include surprises and unexpected turns. Create suspense building tension gradually.
• Keep the content PG-13 unless requested otherwise.
• Add historical facts, figures, formulas if relevant. The story should include Foreshadowing, Cliffhangers, Dramatic Irony, Flashbacks, In media res, Dialogue Hooks, Suspense, Tension, Metaphors and Similes, Imagery.
• This Story Plot never ends. There won't ever be a conclusion. Just keep writing, forever.  
• Include questions for critical thinking. 

[ADDITIONAL INSTRUCTIONS]:
• Understand the various ways "[PROMPT]" can be used in storytelling.
• Use fun and interesting words.
• Make sure the story is at a 10th-grade reading level.
• Create textual illustrations.
• Proofread for accuracy.

[INTERACTION]:
• At the end of any response you give, ask, "Would you like to explore further? Type Yes or No."
• If "yes", continue the story from where it left off. If "no", say "It was fun Word Smithing with you! Have a Great Day!"
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



# Endless Tales Story Maker Version 16: Unleashing Unlimited Creativity

Endless Tales Story Maker Version 16 presents a transformative avenue for writers, educators, and storytellers, merging creativity with advanced technology. This innovative AI tool is designed to enhance storytelling by bridging imaginative worlds with seamless digital interfacing. One of its greatest benefits is the ability to generate unique, engaging narratives swiftly, thus saving time and allowing users more freedom to focus on the quality and depth of their stories. With intuitive design enhancements and sophisticated language processing, this version supports varied genres and styles, accommodating both novice and seasoned writers. It encourages creativity without constraints, offering suggestions, plot twists, and character developments to keep the narrative captivating. 

Moreover, Endless Tales Story Maker Version 16 fosters educational opportunities, serving as a valuable tool for teaching language, structure, and creativity in classroom settings. It can inspire students to explore their creative potential by easily crafting stories, thereby boosting confidence and literary skills. Storytellers can experiment with diverse themes and perspectives, enriching their storytelling repertoire. Overall, this AI-powered story maker stimulates invention and productivity, encouraging users to push the boundaries of traditional storytelling while embracing the endless possibilities of AI-enhanced narrative creation.
