---
layout: docs_layouts/default
title: The model GPT-4o does not exist or you do not have access to it
nav_order: 1
parent: Troubleshooting GPT for Google Sheets, Docs, Slides, Forms, Gmail
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it
description: The model GPT-4o does not exist or you do not have access to it
---

# The model GPT-4o does not exist, or you do not have access to it


To access the pay-per-use API, you must first set up a payment plan and purchase credits. Please refer to the [Billing Overview](https://platform.openai.com/settings/organization/billing/overview) for details.

Here you can copy your API Key: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Your API Keys</a>

1. Upon a successful payment (minimum $5), higher rate limits for the GPT-4 model and above will be enabled. You need to have at least Tier 1!.
2. Usually it can take 5 minutes before the credit was noticed by the playground, even though the dashboard showed it right away.
3. Try also re-create API Key after successful payment
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Check your Rate Limits here: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits"> Rate Limits</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}
So you need to fill in your OpenAI account or try to use our other plans with our OpenAI API Key with the highest Tier and highest rate limit for enterprise apps from OpenAI.

**For using GPT-4o you need to have at least Tier 1!**
Good news — you do not need Open AI Plus Subscription.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

With GPT for Google Sheets, you can use gpt-4o without OpenAI Plus subscriptions. Pay as you go.

To increase Rate Limits check this page: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Guides Check your ChatGPT Rate Limits</a>

### How Do Rate Limits Work?

Rate limits are applied across five key metrics:

- **RPM (Requests Per Minute)**
- **RPD (Requests Per Day)**
- **TPM (Tokens Per Minute)**
- **TPD (Tokens Per Day)**
- **IPM (Images Per Minute)**

You can hit a rate limit based on any of these metrics, depending on which threshold is reached first. For example, if your RPM limit is 20, sending 20 requests with only 100 tokens each would reach that limit—even if you didn’t use up your token allocation (e.g., 150k tokens per minute).

### Batch API Queue Limits

Batch API queue limits are calculated by the total number of input tokens queued for a specific model. Tokens from pending batch jobs count toward this limit, but once a job is completed, those tokens no longer count against the model's limit.

### Key Points to Note:

- **Organizational & Project-Level Limits**: Rate limits apply at the organization and project levels, not the user level.
- **Model-Specific Limits**: Rate limits vary based on the model you're using.
- **Usage Limits**: There are monthly spending caps on API usage, also known as "usage limits."
- **Shared Limits**: Some model families share rate limits. For example, if your organization's limit page lists a shared TPM of 3.5M, all models under that shared limit will count toward the 3.5M total.

Understanding these limits ensures optimal API usage without interruptions due to rate capping.

### Usage Tiers

You can find the rate and usage limits for your organization in the limits section of your account settings. As you use the OpenAI API more and increase your spending, you'll automatically move up to the next usage tier. This typically leads to higher rate limits across most models.

| **Tier**   | **Qualification**                                                   | **Usage Limits** |
|------------|---------------------------------------------------------------------|------------------|
| **Free**   | Available to users in supported regions                             | $100 / month     |
| **Tier 1** | $5 paid                                                             | $100 / month     |
| **Tier 2** | $50 paid and at least 7 days since the first successful payment     | $500 / month     |
| **Tier 3** | $100 paid and at least 7 days since the first successful payment    | $1,000 / month   |
| **Tier 4** | $250 paid and at least 14 days since the first successful payment   | $5,000 / month   |
| **Tier 5** | $1,000 paid and at least 30 days since the first successful payment | $50,000 / month  |

As you move through the tiers, your rate limits will increase, giving you more flexibility to make the most of the API.


### Bulk using GPT-4 in Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="How to use GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Plans: Professional, Business

Here the link: [GPT, Claude, Mistral, Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/)


#### Links
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">How to increase — Rate Limits for Open AI Keys </a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Your API Keys</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Billing for OpenAI Account</a>
