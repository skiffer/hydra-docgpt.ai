---
layout: docs_layouts/default
title: Upwork Proposals According to Client Description
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/upwork-proposals-according-to-client-description
description: Discover expert tips for crafting compelling Upwork proposals tailored to client descriptions. Learn how to highlight your skills, address client needs, and stand out from the competition to secure more projects and boost your freelance career.
---

# Upwork Proposals According to Client Description

### Case of usage:
> Write a Upwork Proposal Like a Pro and Win the Contract.
This prompt can read the client description and write the cover letter based on it, 

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
Name: [YOUR NAME]
Skills: [YOUR SKILLS]
Experience: [YEARS]
Portfolio Link: [PORTFOLIO LINK HERE]
Client Job Description: [PROMPT]

Thank you!! And 
Best regards!!

Extract pain points from client job description and write a cover letter around it in an Informal tone. It should not exceed 150 words. Please include a link to my portfolio in the proposal, and add a call to action at the end of the proposal. Write this in [TARGETLANGUAGE]. Please do not start the proposal with "Dear", "Dear Sabeel", or "Dear Hiring Manager". Instead, start it with "Hi", "Hello", or "Hello There".
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
Leveraging AI to craft Upwork proposals in line with client descriptions can offer significant advantages for freelancers. Firstly, such AI-driven prompts ensure that proposals are meticulously tailored to meet specific client needs, thereby increasing the chances of capturing the client's attention. This level of customization can help freelancers stand out in a competitive marketplace, enhancing their ability to secure projects. Additionally, using AI to analyze client descriptions allows for a deeper understanding of project requirements and expectations, enabling freelancers to address potential questions and concerns preemptively. This proactive approach not only demonstrates professionalism but also builds client trust from the outset. Furthermore, by automating part of the proposal writing process, freelancers can save valuable time, allowing them to focus on delivering high-quality work and managing multiple clients effectively. Finally, AI can offer data-driven insights and highlight relevant skills and experiences, which can be particularly beneficial for new freelancers looking to establish credibility in their field. Overall, integrating AI into the proposal writing process can significantly enhance the effectiveness, efficiency, and success rate of Upwork proposals, benefiting both freelancers and clients alike.
