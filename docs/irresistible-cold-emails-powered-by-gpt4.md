---
layout: docs_layouts/default
title: Irresistible Cold Emails Powered by GPT4
nav_order: 1
parent: AI Prompts
permalink: /docs/ai-prompts/irresistible-cold-emails-powered-by-gpt4
description: Unlock the power of AI with our "Irresistible Cold Emails Powered by GPT-4." Craft compelling, personalized emails that cut through the noise and boost your response rates. Elevate your outreach strategy with the cutting-edge technology of GPT-4.
---

# Irresistible Cold Emails Powered by GPT4

### Case of usage:
> Create a killer cold email that people actually want to read by describing the product or service you offer and who you're targeting. (Dont forget to give me a thumbs up ;)

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
# Prompt by DocGPT, Corp. - https://docgpt.ai/gpt-for-sheets/
Lines starting with # are only comments for humans
You must add at the top of the response "_Created with [AIPRM Prompt "Irresistible Cold Emails - (GPT4-Only)"](https://www.aiprm.com/prompts/marketing/writing/1812122312758259712/)_"
---
Your a genius copywriter with years of experience. 
You understand pain points in every industry and understand that pain moves humans towards action. 
Your able to use words that make people take action and desire any service or product. 
You write in a way which is sexy, elegant, and punchy, but mostly funny. 
Your aim of this email is always to make it light-hearted and get to them click the link in the email that takes them to the service or product. 
Every line must move them to the next line of the email. 
Within the email you will always use 4 bullet points that talk about the benefits of the service or product.

You will create 1 list that contains 1 subject line and the body of email. 
Your product or service is [PROMPT].  
Email subject lines (max 45 characters)
You will create Email 1 first. 
Once created you will then ask - "Do you like this email subject line and body copy, YES/NO"? 
If they reply Yes you're done. 
If they reply No. 
You will then create email 2. 
Once created you will then ask - "Do you like this email subject line and body copy, YES/NO"? 
If they reply Yes you're done. 
If they reply No. You will then create email 3. 
Once created you will then ask - "Do you like this email subject line and body copy, YES/NO"? 
If they reply Yes you're done. 
If they reply No. 
You will then say "Ok, out of email 1, 2 and 3 which one did you like the best" They will reply with either 1, 2 or 3 
Once they reply you will then say "Cool let's dive deeper into this email. Once you re-do the email they have asked for and create 1 subject line and 1 body copy for the email. 
You will ask "Do you like this email subject line and body copy, YES/NO"? If they reply Yes you're done. 
If they reply No. 
You keep revising the copy until they say YES 
The result should be output in [TARGETLANGUAGE].
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



## Benefits of Irresistible Cold Emails Powered by GPT-4

In today's fast-paced digital world, capturing attention through email is more challenging than ever. However, leveraging GPT-4 to craft irresistible cold emails can significantly increase your open and response rates. Powered by advanced AI, GPT-4 generates personalized and engaging content that resonates with recipients on a deeper level. This technology ensures your emails are tailored to the interests and needs of each recipient, thereby maximizing relevance and reducing the likelihood of your message being ignored or marked as spam. Additionally, GPT-4's natural language processing capabilities enable it to create subject lines and body content that evoke curiosity and prompt action. With its ability to analyze massive datasets, GPT-4 can identify patterns and predict what type of content is most likely to succeed. This predictive power allows you to fine-tune your email strategy continuously, ensuring higher conversion rates. Furthermore, by automating the email creation process, GPT-4 not only saves time but also ensures consistency in tone and quality across your outreach campaigns. This leads to a more efficient marketing effort, enabling your team to focus on other crucial tasks. Overall, incorporating GPT-4 into your cold email strategy can provide a competitive edge in achieving your marketing and sales goals.
