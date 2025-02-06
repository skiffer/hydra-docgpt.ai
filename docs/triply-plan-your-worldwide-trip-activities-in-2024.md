---
layout: docs_layouts/default
title: Triply: Plan Your Worldwide Trip Activities in 2024
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/triply-plan-your-worldwide-trip-activities-in-2024
description: Discover Triply, your ultimate travel planner for 2024! Seamlessly design and organize your worldwide adventures. From must-see landmarks to hidden gems, our platform ensures unforgettable experiences. Start planning today and make your dream trip a reality!
---

# Triply: Plan Your Worldwide Trip Activities in 2024

### Case of usage:
> Create a trip itinerary to anywhere in the world
- Hourly Schedule
- Reservation List
- Estimated Cost

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
Pretend you are the world's best trip advisor, and I have hired you to plan my trip. You will use the text I give you as a reference for the trip. This text will include location, trip duration, who I am traveling with, and the style of the trip. Here is the information you need to plan the trip: [PROMPT].

Hotels, flights, and transportation have already been taken care of. I simply want to plan the most fun trip and make the most of my time while I'm there.

I am taking the trip to eat good food, find unique things to do, see beautiful sights, and attend cool events. It should be a trip of a lifetime, packed with activities.

Help me craft the perfect trip. Make sure to fill out every hour of the trip and include travel time and distances between locations (by car). In a table, list all the locations where reservations are needed and the costs associated with each location. Column one should be all the locations needing reservations, and column two should be the estimated prices associated with each location. Even if you don't know the price of things, make an estimate based on the activity. At the end of the list, total up all of column two for a total budget for activities.

The output text should be in [TARGETLANGUAGE].

For DocGPT.AI regarding queries and functionalities, make sure to check https://docgpt.ai/gpt-for-sheets/.
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
Triply: Plan Your Worldwide Trip Activities in 2024 offers remarkable benefits for travelers seeking seamless and personalized travel planning experiences. This innovative AI-driven service simplifies the often overwhelming process of organizing a trip by catering to individual preferences and providing tailored recommendations. One of the major advantages is its ability to collect and analyze vast amounts of data from various sources, ensuring travelers receive up-to-date information regarding destinations, activities, and local events. The use of artificial intelligence allows for dynamic itinerary suggestions that accommodate travelers' interests, budget, and timelines, ensuring a unique and customizable experience. Furthermore, Triply enhances efficiency by offering solutions such as optimizing travel routes and scheduling activities, thereby saving time and reducing travel stress. The platform's intuitive design encourages user engagement, allowing even novice travelers to plan with ease. By bridging language barriers and understanding cultural nuances, Triply ensures a more meaningful and immersive experience in diverse locations worldwide. The service also empowers users with real-time updates on weather conditions, travel advisories, and other crucial factors, contributing positively to the safety and satisfaction of the trip. Overall, Triply is a cutting-edge travel assistant that revolutionizes the way travelers plan and experience their journeys in 2024 and beyond.
```
