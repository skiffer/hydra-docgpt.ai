---
layout: docs_layouts/default
title: 设置 OpenAI API 密钥
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-zh
description: 如何设置 OpenAI API 密钥
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};

</script>

# Google Sheets 的 AI 能力：OpenAI、Claude、Gemini、Perplexity 和 Mistral 完整安装指南

## 🌐 可用语言
- [English (英语)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (俄语)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (瑞典语)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (波兰语)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (土耳其语)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (德语)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (法语)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (荷兰语)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (西班牙语)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (葡萄牙语)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (日语)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (当前)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (乌克兰语)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

## 目录
1. [开始之前](#开始之前)
2. [设置说明](#设置说明)
3. [Mistral 密钥设置](#mistral-密钥设置)
4. [Claude 密钥设置](#claude-密钥设置)
5. [Perplexity 密钥设置](#perplexity-密钥设置)
6. [Gemini 密钥设置](#gemini-密钥设置)
7. [故障排除](#故障排除)

### 开始之前
1. 安装 <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">GPT for Sheets 插件</a>
2. <a href="/gpt-for-sheets/" target="_blank">将订阅升级到专业用户计划</a>
3. 创建新的工作表文档或**确保您是当前文档的所有者**
4. 启动插件：扩展程序 > GPT for Sheets, Docs, Slides, Forms > **启动**
5. 请点击**"刷新账户"**按钮，位置：扩展程序 > GPT for Sheets, Docs, Slides, Forms > **刷新账户** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="刷新账户" width="400">
6. 如果您**已经拥有所需 AI 模型的 API 密钥**（OpenAI、Claude、Mistral、Perplexity、Gemini），请点击**"设置 API 密钥"**并粘贴**您的 API 密钥** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-2.png" alt="刷新账户" width="400"> **使用 OpenAI 的实际成本将非常低**，因为它被设计用来绕过 GPT 的速率限制。
7. <a href="/docs/gpt-for-sheets/set-up-openai-api-keys-zh/#1-登录或注册-openai-平台">如果您**没有 API 密钥**，请按照这些说明获取一个</a>
8. 确保您的 OpenAI 计费账户中至少有 **1 美元**。使用 OpenAI 的实际成本将非常低，因为它被设计用来**绕过 GPT 的速率限制**。如果您的账户是新的，您最初将可以访问具有相对较小限制的免费层。建议在您的账户中至少添加 5 美元以升级到第 1 层，这提供更高的速率限制和对 GPT-4o 的访问：<a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">OpenAI 账户计费</a>
9. 从侧边栏复制并粘贴示例到任何单元格：扩展程序 > 插件 > **启动**。
10. 当您满意结果时，请使用**"替换所有 GPT"**或**"替换选定的 GPT"**按钮。Google Sheets 会定期刷新公式，如果您刷新页面，可能会丢失更改。
11. 当您满意结果时，**不要忘记点击"替换所有/选定的 GPT"按钮**。这将用它们的输出替换函数，防止它们在工作表刷新或一定时间后重新计算（Google Sheets 特有）
12. 建议：确保 Google 插件最佳性能的最佳方法是为您的单个 Gmail 账户使用**独立的 Google Chrome 配置文件！**（有时，Google API 在同一个 Chrome 配置文件中使用多个账户时效果不佳）这有助于绕过可能因与其他浏览器兼容性而产生的潜在问题。

如果您在使用或启动时遇到任何错误，请在联系支持之前查看这些页面：
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank"> 故障排除</a>
- <a href="/docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/" target="_blank"> 模型 GPT-4o 不存在或您无权访问</a>

### 重要！
#### 如果您遇到消息："需要授权才能执行此操作。"
1. **使用个人 Gmail 账户**：如果您使用公司邮箱（工作区），它可能对使用插件有限制。您可能需要要求公司的邮箱管理员配置设置以允许安装插件。因此，建议使用个人账户。如果您需要转移订阅，请通过聊天或邮箱 yaroslav91@gmail.com 联系支持。
2. 如果您使用个人账户仍然遇到此问题，只需重新安装插件
3. 在独立的 Google Chrome 配置文件中使用 Google 账户 - 如果您使用多个 Google 账户通常需要这样做（Google 问题）

4. ![create-profile.png]({{ site.baseurl }}/images/create-profile.png){: width="300"}

#### 如果您遇到消息："您已超出当前配额，请检查您的计划和计费详细信息"
- <a href="https://platform.openai.com/settings/organization/billing/overview" rel="noopener noreferrer nofollow" target="_blank">确保您的 OpenAI 计费账户中至少有 **1 美元**。</a> 使用 OpenAI 的实际成本会很低，因为它被设计用来绕过 GPT 的速率限制

#### 建议：
- Google 插件的最佳性能是使用 Google Chrome 浏览器。
- 如果您在同一个 Google Chrome 配置文件中使用多个账户，请为此账户创建独立的 Google Chrome 配置文件。（Google 有时在多账户 cookie 方面不稳定）
- 如果您使用公司邮箱 - 有时公司邮箱在安装插件方面有限制。这可能需要要求公司邮箱的管理员配置以允许安装插件或使用个人账户。（如果需要移动订阅，请写信给支持聊天或邮箱 — yaroslav91@gmail.com）

#### 如果您在同一个 Chrome 浏览器中使用多个账户 - 请为这一个账户创建独立的 Chrome 配置文件。有时 Google API 会将您视为另一个账户。

# 说明 - 如何设置 OpenAI API 密钥

> 创建 OpenAI API 密钥以获得对 ChatGPT API 和其他 OpenAI API 的访问。此密钥允许 OpenAI 跟踪您的使用情况并生成准确的账单。

#### 1. 登录或注册 <a href="https://platform.openai.com/account/api-keys" rel="noopener noreferrer nofollow" target="_blank">OpenAI 平台</a>

![sign-up-openai.png]({{ site.baseurl }}/images/sign-up-openai.png)

#### 2. 点击创建新的秘密密钥。<a href="https://platform.openai.com/settings/organization/billing/overview" rel="noopener noreferrer nofollow" target="_blank">确保您的 OpenAI 计费账户中至少有 **1 美元**。</a> 使用 OpenAI 的实际成本会很低，因为它被设计用来绕过 GPT 的速率限制

![generate-api-key.png]({{ site.baseurl }}/images/generate-api-key.png)

#### 3. 将您的密钥复制到剪贴板

![created-api-key.png]({{ site.baseurl }}/images/created-api-key.png)

#### 4. 打开安装了插件的电子表格并启动侧边栏 <b>扩展程序 > GPT for Docs, Sheets, Forms, Slides > 启动</b>
#### 5. 请确保您已移除所有其他提供 GPT 功能的插件，以避免冲突
#### 6. 在此步骤，您应该有 <a href="/gpt-for-sheets/" target="_blank">专业用户计划</a> 的订阅
![created-api-key.png]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}
#### 7. 点击"刷新账户"：扩展程序 > GPT for Sheets, Docs, Slides, Forms > 刷新账户
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}
#### 8. 点击"设置 OpenAI 密钥"：扩展程序 > GPT for Sheets, Docs, Slides, Forms > 刷新账户
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}
#### 9. 在指定位置粘贴您的 OpenAI API 密钥，并点击"检查"按钮
![check-and-save-api-key.png]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}
#### 10. 点击"保存"按钮
#### 11. 在单元格中输入简单公式并从 GPT 获得响应
> =GPT("为咖啡店写一个标题")

### !!! 订阅或更改计划后，请点击"刷新账户"按钮，位置：扩展程序 > GPT for Sheets, Docs, Slides, Forms > 刷新账户
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 重要！

![IMPORTANT-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> 获得最终结果后，请点击**"替换所有 GPT"**或**"替换选定"**按钮用结果替换公式。
> 如果不这样做 - Google Sheets 会在刷新页面时和每 1-2 分钟重新执行所有公式。（可能会影响您在 Open AI 或内部积分，取决于计划）

### 免费层和第 1 层的速率限制比较

#### 免费层
![tier-0.png]({{ site.baseurl }}/images/tier-0.png){: width="500"}

#### 第 1 层
![tier-1.png]({{ site.baseurl }}/images/tier-1.png){: width="500"}

#### 故障排除
##### 您已超出当前配额，请检查您的计划和计费详细信息
##### 异常："模型 gpt-4-0125-preview 不存在或您无权访问"

>OpenAI 从 2024 年 3 月 25 日开始转向预付费计划。
>请在此处查看您的 OpenAI API 密钥账户：<a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">OpenAI 账户计费</a>

这是由于您在 Open AI 中的层级，请提高您在 OpenAI 中的层级，模型将为您的账户显示。
1. 如果您有免费层 - 请至少为您的账户充值 5 美元以获得第 1 层 <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-one" rel="nofollow" target="_blank">速率限制</a>
2. 要查看您的层级，请点击此链接：<a href="https://platform.openai.com/settings/organization/limits" rel="nofollow" target="_blank">检查您的层级</a>
3. 重新创建 API 密钥并尝试使用新的（重新创建的）API 密钥使用 [GPT, Claude, Mistral, Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/)

##### ScriptError：需要授权才能执行该操作

原因
> 您使用公司邮箱账户，需要使用个人邮箱或要求管理员允许执行插件
> 您在同一个 Chrome 会话中使用了多个 Google 账户

解决方案 #1
1. 使用个人邮箱

解决方案 #2
1. 创建新的 Chrome 配置文件
2. 创建新的电子表格
3. 再次尝试 GPT 功能

解决方案 #3
- 清理浏览器中的 cookie
- 重新登录 Google 账户
- 卸载并重新安装插件

解决方案 #4
- 要求工作区账户的管理员允许执行插件

其他可能的问题可以在这里找到：<a target="_blank" href="/docs/support-gpt-sheets-docs-slides-forms-gmail/">故障排除</a>

#### 有用链接
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">如何增加 — Open AI 密钥的速率限制 </a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">您的 API 密钥</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">OpenAI 账户计费</a>

您已在 GPT for Sheets and Docs 中配置了您的 OpenAI API 密钥。现在，任何拥有此电子表格编辑访问权限的用户都可以使用此 API 密钥使用 GPT 功能

### 如何创建 Mistral API 密钥

#### 1. 请创建账户 https://console.mistral.ai/

#### 2. 转到 https://console.mistral.ai/api-keys/ 并创建 api 密钥

#### 3. 这是 Mistral api 密钥的定价页面：https://docs.mistral.ai/platform/pricing/

### 如何创建 Claude (Anthropic) api 密钥

#### 1. 请关注此官方页面 https://docs.anthropic.com/claude/reference/getting-started-with-the-api

#### 2. 如果您已经有账户，请在此处查看您的密钥：https://console.anthropic.com/settings/keys

### 如何创建 Perplexity AI api 密钥

#### 1. 请关注此官方页面 https://docs.perplexity.ai/docs/getting-started

#### 2. 如果您已经有账户，请在此处查看您的密钥：https://www.perplexity.ai/settings/api

#### 3. 生成 API 密钥，复制它

#### 4. 转到 GPT for Sheets 并点击设置 Open AI 密钥。向下滚动并插入密钥

#### 5. 点击"检查"按钮来验证它。之后点击"保存"按钮

#### 6. 现在您可以使用 Perplexity AI 与函数 =PERPLEXITY('今天最热门的 youtube 视频是什么')

### 如何创建 Gemini API 密钥

#### 您可以在此页面创建您的 api 密钥：https://aistudio.google.com/app/apikey 