---
layout: docs_layouts/default
title: GPT-4o 模型不存在或您没有访问权限
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/chinese
description: GPT-4o 模型不存在或您没有访问权限
---

# GPT-4o 模型不存在，或您没有访问权限

要使用按使用付费的 API，您首先需要设置一个付款计划并购买积分。有关详细信息，请参阅 [计费概览](https://platform.openai.com/settings/organization/billing/overview)。

您可以在此复制您的 API 密钥：<a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - 您的 API 密钥</a>

1. 完成支付（至少 $5）后，将启用 GPT-4 及更高版本模型的更高速率限制。您需要至少达到 **第1级**！
2. 通常，信用在 playground 被识别可能需要最多 5 分钟，即使仪表板已经立即显示。
3. 支付成功后，请尝试重新创建您的 API 密钥。
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. 在此检查您的速率限制：<a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">速率限制</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

因此，您需要充值您的 OpenAI 帐户或使用我们的其他计划，使用我们为企业应用程序提供的 OpenAI API 密钥最高级别和最高速率限制。

**要使用 GPT-4o，您至少需要达到第 1 级！**
好消息是，您不需要 Open AI Plus 订阅。

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

通过 Google Sheets 的 GPT，您可以在无需 OpenAI Plus 订阅的情况下使用 GPT-4o。按使用量付费。

要增加速率限制，请查看此页面：<a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">指南：检查您的 ChatGPT 速率限制</a>

### 速率限制是如何工作的？

速率限制应用于五个关键指标：

- **RPM（每分钟请求数）**
- **RPD（每日请求数）**
- **TPM（每分钟令牌数）**
- **TPD（每日令牌数）**
- **IPM（每分钟图像数）**

您可能会根据其中任何一个指标达到速率限制，取决于首先达到的阈值。例如，如果您的 RPM 限制是 20，发送 20 个仅有 100 个令牌的请求将达到该限制，即使您没有使用完您的令牌分配（例如，每分钟 150k 令牌）。

### 批量 API 队列限制

批量 API 队列限制根据为特定模型排队的输入令牌总数计算。等待中的批处理任务的令牌将计入队列限制中。一旦批处理任务完成，这些令牌将不再计入模型的限制。

### 需要注意的关键点：

- **组织和项目级别的限制**：速率限制适用于组织和项目级别，而非用户级别。
- **模型特定的限制**：速率限制因您使用的模型而异。
- **使用限制**：API 使用的月度支出限制也被称为“使用限制”。
- **共享限制**：某些模型系列共享速率限制。例如，如果您的组织限制页面显示共享的 TPM 为 3.5M，列在共享限制中的所有模型调用都将计入该 3.5M 的总数。

理解这些限制可以确保您在使用 API 时不会因为速率限制而中断。

### 使用级别

您可以在帐户设置的限制部分查看您的组织的速率和使用限制。随着您使用 OpenAI API 的增多以及支出的增加，您将自动升级到下一个使用级别。这通常会导致大多数模型的速率限制增加。

| **级别**    | **资格要求**                                                 | **使用限制**      |
|-------------|--------------------------------------------------------------|-------------------|
| **免费**    | 对于支持地区的用户可用                                         | $100 / 月         |
| **第 1 级** | 支付 $5                                                      | $100 / 月         |
| **第 2 级** | 支付 $50 且首次成功付款后至少 7 天                           | $500 / 月         |
| **第 3 级** | 支付 $100 且首次成功付款后至少 7 天                          | $1,000 / 月       |
| **第 4 级** | 支付 $250 且首次成功付款后至少 14 天                         | $5,000 / 月       |
| **第 5 级** | 支付 $1,000 且首次成功付款后至少 30 天                       | $50,000 / 月      |

随着您在级别中的提升，您的速率限制将增加，使您可以更灵活地充分利用 API。

### 在 Google Sheets 中批量使用 GPT-4
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="如何使用 GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

计划：专业版、企业版

链接在此： [GPT, Claude, Mistral, Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/)

#### 链接
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">如何增加 OpenAI 密钥的速率限制</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - 您的 API 密钥</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">OpenAI 帐户的计费</a>
