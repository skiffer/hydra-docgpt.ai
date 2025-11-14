---
layout: docs_layouts/default
title: OpenAI APIキーの設定方法 - Google スプレッドシートでAIを使う完全ガイド
nav_order: 1
parent: GPT for Sheets - other languages
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-ja
description: Google スプレッドシートでOpenAI、Claude、Gemini、Perplexity、MistralのAPIキーを設定する方法を詳しく解説。初心者でも簡単に導入できる完全ガイド。
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# Google スプレッドシートでAIを使うための完全セットアップガイド - OpenAI、Claude、Gemini、Perplexity、Mistral対応

## 🌐 利用可能な言語
- [English (英語)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (ロシア語)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (スウェーデン語)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (ポーランド語)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (トルコ語)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (ドイツ語)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (フランス語)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (オランダ語)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (スペイン語)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (ポルトガル語)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (現在)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (中国語)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (ウクライナ語)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

> 🔥 **最新アップデート**: GPT-4、Claude 3、Gemini Pro、Mistral、Perplexityなど、最新のAIモデルに対応しました。

## 目次
1. [はじめに：アドオンのインストール](#はじめに)
2. [OpenAI APIキーの設定手順](#openai-apiキーの設定手順)
3. [Claude（Anthropic）APIキーの設定](#claude-apiキーの設定)
4. [Gemini APIキーの設定](#gemini-apiキーの設定)
5. [Perplexity APIキーの設定](#perplexity-apiキーの設定)
6. [Mistral APIキーの設定](#mistral-apiキーの設定)
7. [トラブルシューティング](#トラブルシューティング)

## はじめに

Google スプレッドシートでAIを活用するための準備として、以下の手順を実行してください：

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">GPT for Sheets アドオン</a>をインストール
2. <a href="/gpt-for-sheets/" target="_blank">Pro Userプランにアップグレード</a>
3. 新規スプレッドシートを作成するか、**既存のスプレッドシートのオーナー権限**を確認
4. アドオンを起動：拡張機能 > GPT for Sheets, Docs, Slides, Forms > **起動**
5. アカウントの更新：拡張機能 > GPT for Sheets, Docs, Slides, Forms > **アカウントの更新** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="アカウントの更新" width="400">

## OpenAI APIキーの設定手順

### 1. OpenAIプラットフォームへのアクセス
1. <a href="https://platform.openai.com/account/api-keys" target="_blank">OpenAIプラットフォーム</a>にアクセス
2. アカウントを作成またはログイン

![OpenAIサインアップ画面]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. APIキーの作成
1. 「Create new secret key」をクリック
2. <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">請求設定ページ</a>で**最低$1**をチャージ
   - 実際の使用コストは非常に低く抑えられます
   - GPTの制限を回避するように設計されています

![APIキー生成画面]({{ site.baseurl }}/images/generate-api-key.png)

### 3. APIキーのコピー

![作成されたAPIキー]({{ site.baseurl }}/images/created-api-key.png)

### 4. アドオンでの設定
1. スプレッドシートを開き、サイドバーを起動
2. 「APIキーの設定」をクリック
3. コピーしたAPIキーを貼り付け
4. 「確認」ボタンをクリック
5. 「保存」をクリック

### 5. Pro Userプランの確認
アドオンを使用するには、Pro Userプランへのアップグレードが必要です：

![Pro Userプランの確認]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. アカウントの更新
拡張機能メニューから「アカウントの更新」をクリックしてください：

![アカウントの更新]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. APIキーの設定
「OpenAI APIキーの設定」をクリックします：

![APIキーの設定]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. APIキーの確認と保存
APIキーを入力し、「確認」ボタンをクリックします：

![APIキーの確認と保存]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## 重要な注意事項

![GPT for Sheetsの重要な注意事項]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> 結果が表示されたら、必ず**「すべてのGPTを置換」**または**「選択したGPTを置換」**ボタンをクリックしてください。
> これを行わないと、Google Sheetsがページ更新時や1-2分ごとに関数を再実行し、クレジットに影響を与える可能性があります。

## 無料プランと有料プランの制限比較

### 無料プラン（Free Tier）の制限
![無料プランの制限]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### 有料プラン（Tier 1）の制限
![有料プランの制限]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Chromeプロファイルの作成方法
複数のGoogleアカウントを使用する場合は、専用のChromeプロファイルを作成することを推奨します：

![Chromeプロファイルの作成]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Claude（Anthropic）APIキーの設定

1. <a href="https://console.anthropic.com/settings/keys" target="_blank">Claude APIキー設定ページ</a>にアクセス
2. アカウントを作成またはログイン
3. APIキーを生成
4. アドオンのサイドバーでClaudeを選択し、APIキーを設定

## Gemini APIキーの設定

1. <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>にアクセス
2. APIキーを生成
3. アドオンのサイドバーでGeminiを選択し、APIキーを設定

## Perplexity APIキーの設定

1. <a href="https://www.perplexity.ai/settings/api" target="_blank">Perplexity設定ページ</a>にアクセス
2. APIキーを生成
3. アドオンのサイドバーでPerplexityを選択し、APIキーを設定

## Mistral APIキーの設定

1. <a href="https://console.mistral.ai/api-keys/" target="_blank">Mistralコンソール</a>にアクセス
2. APIキーを生成
3. アドオンのサイドバーでMistralを選択し、APIキーを設定

## 使用例

スプレッドシートのセルに以下のような関数を入力するだけで、AIを活用できます：

```
=GPT("コーヒーショップの魅力的なキャッチコピーを考えて")
=CLAUDE("顧客アンケートの分析をして")
=GEMINI("売上データのトレンドを分析して")
=PERPLEXITY("最新のマーケティングトレンドを教えて")
=MISTRAL("商品説明文を生成して")
```

### 重要な注意点

1. 結果が表示されたら、「すべてのGPTを置換」または「選択したGPTを置換」ボタンをクリックしてください
2. これにより、ページ更新時やGoogle Sheetsの定期的な再計算時に関数が再実行されるのを防ぎます

## トラブルシューティング

### 「このアクションを実行するには承認が必要です」というエラーが表示される場合

1. **個人のGmailアカウントを使用**: 会社のメール（Workspace）では、アドオンの使用に制限がある場合があります
2. 個人アカウントでもエラーが出る場合は、アドオンを再インストール
3. Chromeの別プロファイルで使用 - 複数のGoogleアカウントを使用している場合に必要

### 「現在の制限を超えました。プランと請求の詳細を確認してください」というエラーが表示される場合

- <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">OpenAIの請求設定</a>で**最低$1**をチャージしてください

### 推奨設定

- Google Chrome ブラウザの使用を推奨
- 複数のアカウントを使用する場合は、専用のChromeプロファイルを作成
- 会社のメールアドレスを使用する場合は、管理者に確認するか個人アカウントを使用

## 関連リンク

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">OpenAI APIの制限について</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI APIキー管理</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">OpenAI請求設定</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">トラブルシューティング詳細</a>

設定が完了すると、スプレッドシートの編集者権限を持つすべてのユーザーがAI機能を利用できるようになります。 