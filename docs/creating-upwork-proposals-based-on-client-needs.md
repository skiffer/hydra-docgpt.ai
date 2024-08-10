---
layout: docs_layouts/default
title: Creating Upwork Proposals Based on Client Needs
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/creating-upwork-proposals-based-on-client-needs
description: Learn how to craft winning Upwork proposals by focusing on client-specific needs. Master techniques to showcase your skills effectively and increase your chances of landing projects. Get insights on tailored pitches that resonate with clients and boost your profile visibility.
---

# Creating Upwork Proposals Based on Client Needs

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
---
Name: [YOUR NAME]
Skills: [YOUR SKILLS]
Experience: [YEARS]
Portfolio Link: [PORTFOLIO LINK HERE]
Client Job Description: [PROMPT]

Thank you!! And 
Best regards!!

Extract pain points from client job description and write a cover letter around it in an informal tone and it should not exceed 150 words. Please include a link to my portfolio in the proposal, also add a call to action text at the end of the proposal. Write this in [TARGETLANGUAGE]. Please do not start the proposal with "Dear" or "Dear Hiring Manager". Instead start it with "Hi", "Hello" or "Hello There".
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
Creating Upwork proposals tailored to client needs offers multiple advantages for freelancers striving to secure contracts and build their reputation. Customized proposals demonstrate a deep understanding of the client's project, making the freelancer appear attentive, professional, and committed. By focusing directly on client requirements, the proposal can effectively highlight relevant skills, experience, and successful past projects, increasing the likelihood of selection. This targeted approach builds trust and reduces apprehension, as clients are assured that the freelancer genuinely grasps their needs and can deliver accordingly. Additionally, bespoke proposals differentiate freelancers from the competition, showcasing a proactive attitude that is highly valued in the freelance marketplace. It also improves efficiency, as a structured, client-oriented template can streamline the proposal process, reducing the time spent on each application while maintaining quality. In essence, creating Upwork proposals based on client needs not only enhances the chances of winning projects but also fosters long-term client relationships and career growth. 

***

