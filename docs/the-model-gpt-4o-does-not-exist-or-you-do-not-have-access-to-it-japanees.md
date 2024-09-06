---
layout: docs_layouts/default
title: GPT-4oモデルが存在しない、またはアクセスできない
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/japanese
description: GPT-4oモデルが存在しない、またはアクセスできない
---

# GPT-4oモデルが存在しない、またはアクセスできない

従量制APIにアクセスするには、まず支払いプランを設定し、クレジットを購入する必要があります。詳細については、[請求の概要](https://platform.openai.com/settings/organization/billing/overview)をご参照ください。

ここからAPIキーをコピーできます：<a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - あなたのAPIキー</a>

1. 支払いが成功した後（最低5ドル）、GPT-4モデルおよびそれ以上のモデルのためのより高いレート制限が有効になります。最低でもTier 1に到達している必要があります！
2. クレジットがplaygroundに認識されるまで通常5分かかることがありますが、ダッシュボードにはすぐに表示されます。
3. 支払いが成功した後、APIキーを再作成してみてください。
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. ここでレート制限を確認できます：<a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">レート制限</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

したがって、OpenAIアカウントにクレジットを追加するか、OpenAIのエンタープライズアプリ向けの最も高いTierおよびレート制限を持つ他のプランを使用してください。

**GPT-4oを使用するには、少なくともTier 1に到達している必要があります！**
良いニュース：Open AI Plusサブスクリプションは必要ありません。

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Google Sheets用GPTでは、OpenAI PlusサブスクリプションなしでGPT-4oを使用できます。従量制で利用可能です。

レート制限を増やすには、このページをご覧ください：<a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">ChatGPTのレート制限を確認するガイド</a>

### レート制限はどのように機能しますか？

レート制限は、以下の5つの主要な指標に基づいて適用されます：

- **RPM（1分あたりのリクエスト数）**
- **RPD（1日あたりのリクエスト数）**
- **TPM（1分あたりのトークン数）**
- **TPD（1日あたりのトークン数）**
- **IPM（1分あたりの画像数）**

これらの指標のいずれかに基づいてレート制限が適用され、最初に達成されたしきい値によって決定されます。たとえば、RPM制限が20の場合、100トークンしか使用しない20件のリクエストを送信すると、その制限に達します（1分あたり150kトークンの割り当てを使い切らなくても）。

### バッチAPIキュー制限

バッチAPIキューの制限は、特定のモデルに対してキューに入れられた入力トークンの総数に基づいて計算されます。保留中のバッチジョブからのトークンはキュー制限にカウントされますが、バッチジョブが完了すると、それらのトークンはモデルの制限にはカウントされなくなります。

### 重要なポイント：

- **組織およびプロジェクトレベルの制限**：レート制限は、ユーザーレベルではなく、組織およびプロジェクトレベルで適用されます。
- **モデルごとの制限**：使用するモデルに応じて、レート制限は異なります。
- **使用制限**：APIの使用には月間の支出制限があり、これらは「使用制限」とも呼ばれます。
- **共有制限**：一部のモデルファミリーはレート制限を共有します。たとえば、組織の制限ページに「共有TPM」として3.5Mが表示されている場合、その「共有制限」リストにあるすべてのモデルへの呼び出しが3.5Mにカウントされます。

これらの制限を理解することで、レートキャッピングによる中断を防ぎ、APIを最適に活用することができます。

### 使用ティア

アカウント設定の制限セクションで、組織のレートおよび使用制限を確認できます。OpenAI APIの使用が増加し、支出が増えると、次の使用ティアに自動的に昇格します。これにより、ほとんどのモデルでレート制限が増加します。

| **ティア**   | **資格要件**                                                     | **使用制限** |
|-------------|--------------------------------------------------------------------|-----------------|
| **無料**    | サポートされている地域のユーザーに利用可能                           | $100 / 月       |
| **ティア1** | 5ドルを支払い済み                                                 | $100 / 月       |
| **ティア2** | 50ドルを支払い済みかつ最初の支払いから7日以上経過                   | $500 / 月       |
| **ティア3** | 100ドルを支払い済みかつ最初の支払いから7日以上経過                  | $1,000 / 月     |
| **ティア4** | 250ドルを支払い済みかつ最初の支払いから14日以上経過                 | $5,000 / 月     |
| **ティア5** | 1,000ドルを支払い済みかつ最初の支払いから30日以上経過               | $50,000 / 月    |

ティアを進むにつれて、レート制限が増加し、APIをより柔軟に活用できるようになります。

### Google SheetsでGPT-4を大量利用する方法
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="SheetsでGPTを使用する方法" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

プラン: プロフェッショナル、ビジネス

リンクはこちら: [GPT、Claude、Mistral、Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/)

#### リンク
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">OpenAIキーのレート制限を増やす方法</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - あなたのAPIキー</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">OpenAIアカウントの請求</a>
