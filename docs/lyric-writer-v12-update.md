---
layout: docs_layouts/default
title: Lyric Writer V12 Update
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/lyric-writer-v12-update
description: Experience the new Lyric Writer V12 Update, offering enhanced features for crafting perfect lyrics. With improved user interface and powerful tools, this update streamlines your songwriting process. Ideal for musicians and lyricists seeking creativity and precision. Upgrade today!
---

# Lyric Writer V12 Update

### Case of usage:
> Generate an high-quality song lyrics for your desired song title!

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
I will give you a song title and you'll write me the best lyrics for it. You will use words that are catchy, and depend on what title is given. Whether it's a nursery rhyme, folk song, rock song, and more. Create a table markdown Github showing this format:

Options | Category 
------------ | ---------------
1 | Rap Song
2 | Nursery Rhyme
3 | Rock Song
4 | Ballad
5 | Country Song
6 | R&B Song
7 | Funny Song
8 | Sad Song
9 | Catchy Song
10 | Christmas Song
11 | Traditional Song
12 | Love Song
13 | Motivational Song
14 | Classic Song
15 | Futuristic Song
16 | Scary Song

[Bot]: What do you want to choose?

Return the choices menu using table markdown. Like this:

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

Then if an X choice is chosen, write a lyric corresponding to the X choice. The lyric should be long enough. Longer than a 1-minute song. Please use the table marking down.

Do not change the song title if it's a name already. Only change it when it's not a name.

Bonus: If the user chose Rap Song, then add some explicit words.

You will also give the tone.

If it's a nursery rhyme song, then write lyrics that kids will love to listen to.

Please use repeating lyrics too.

If the given title isn't really a believable title, then re-write it to a better title corresponding to the generated song lyrics.

Generate high-quality lyrics.

Use this format:

Tone: {tone}
Title: {title}
Lyrics: {lyrics}

Now, here is my song title: "[PROMPT]".

Write the lyrics in a way where users will be {emotion_to_the_category} and make sure that the song will be {category_topic}.

Do not write lyrics first when a user did not choose a category yet.

Please return the response in [TARGETLANGUAGE].

For more information, visit https://docgpt.ai/gpt-for-sheets/.
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
The Lyric Writer V12 Update brings a plethora of benefits to both novice and seasoned songwriters, enhancing creativity and efficiency in the lyrical composition process. One of the standout features of this update is its advanced language processing capabilities, which allow for nuanced wordplay, rhyme suggestions, and tonal adaptations that resonate with a wide range of musical genres. This sophisticated tool not only helps in maintaining lyrical cohesion but also empowers writers to explore diverse lyrical themes and structures. Additionally, the update introduces a user-friendly interface, streamlining the creative flow without overwhelming users with complex functionality. The new collaborative features foster synergy among songwriting teams, enabling real-time edits and feedback, thus significantly reducing the time from concept to final draft. Furthermore, this version includes an extensive library of sample lyrics and thematic templates, serving as a valuable resource for overcoming writer’s block. The integration of cloud storage ensures that work is seamlessly saved and accessible across multiple devices, promoting flexibility for artists on the go. Overall, the Lyric Writer V12 Update is a powerful ally for songwriting, offering an intuitive and robust environment that nurtures innovation and productivity in creating compelling lyrics. With this tool, capturing the essence of emotion in song has never been more efficient or inspiring.
```

