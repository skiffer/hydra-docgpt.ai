---
layout: docs_layouts/default
title: Guidelines and Plan for Copywriting Tasks in 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/guidelines-and-plan-for-copywriting-tasks-in-2024
description: Discover the ultimate 2024 copywriting guide! Streamline tasks with cutting-edge strategies, detailed guidelines, and a robust plan designed to enhance your content creation, boost engagement, and drive results. Stay ahead in the dynamic world of copywriting!
---

# Guidelines and Plan for Copywriting Tasks in 2024

### Case of usage:
> Detailed BRIEFING + OUTLINE for 100% SEO-friendly articles to be assigned (length, images, tone of voice, search intent, goals, target, long tail keywords, semantically related keyword and entities, title h1, subheadings h2 and h3, meta description with max length, engaging Title tag with max length, best anchor texts for internal linking, FAQ, quotes)

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
Create a detailed Brief and a structured Outline for a copywriter that covers the following trending topic: "[PROMPT]". Before proceeding, perform keyword research and provide the copywriter with high conversion keywords, long-tail keywords, related keywords, as well as semantically related keywords and entities related to the topic. Ensure the right quantity of subheadings (H2 and H3) are written in the outline for the copywriter. Provide appropriate metatags for the upcoming article, a high-conversion-rate meta description (max 140 characters), and a compelling Title H1 (max 60 characters). Suggest images relevant to the topic to be included in the article and specify how many. Advise the copywriter on the optimal length of the article, the search intent, the goal, the target audience, and the appropriate tone of voice for the article. Propose 6 high-clickbait anchor texts to be used in the article for SEO specialists and reviewers to link internally to other pages offering [PRODUCTS] in the same category of the main topic. Recommend at least 5 famous brand names related to the topic. Suggest 4 pertinent ending FAQs related to the topic. Provide a topic-related quote from a famous individual to enhance the reading experience of the article. 

Write the briefing and outline in the proper [TARGET LANGUAGE]. Do not write the full article; compile all acquired information into a detailed briefing and add a structured outline.
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
In the fast-paced digital landscape of 2024, leveraging Artificial Intelligence (AI) for copywriting tasks is becoming increasingly crucial. Implementing a well-structured "Guidelines and Plan for Copywriting Tasks in 2024" can offer numerous benefits, enhancing both efficiency and content quality. Firstly, AI provides the ability to automate and streamline mundane, repetitive tasks, allowing copywriters to focus on strategic, creative work. This not only boosts productivity but also sparks innovation by freeing up cognitive resources. Furthermore, AI-guided analytics offer data-driven insights into audience preferences, SEO trends, and competitor strategies, enabling the creation of targeted and high-impact content. By embedding these insights into well-defined guidelines and plans, businesses ensure consistency in their branding and messaging across all platforms. Another significant advantage is AI's capability to personalize content at scale, catering to diverse audience segments in real-time. This personalization enhances user engagement and conversion rates, building a loyal customer base. Additionally, incorporating AI in copywriting tasks promotes adaptability, as AI tools quickly respond to the ever-evolving market trends and platform algorithms. By integrating AI efficiently through structured guidelines and strategic planning, businesses can achieve optimal content performance, positioning themselves ahead in a competitive market while fostering sustained growth and innovation in the digital realm.
```
