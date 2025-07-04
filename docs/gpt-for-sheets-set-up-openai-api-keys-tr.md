---
layout: docs_layouts/default
title: OpenAI API Anahtarlarını Yapılandırma - Google E-Tablolar için Kapsamlı AI Entegrasyon Kılavuzu
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-tr
description: Google E-Tablolar'da OpenAI, Claude, Gemini, Perplexity ve Mistral API anahtarlarının yapılandırılması için detaylı kılavuz. E-tablolarınızda AI performansını en üst düzeye çıkarın.
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# Google E-Tablolar için AI Gücü: OpenAI, Claude, Gemini, Perplexity ve Mistral Kurulum Kılavuzu

## 🌐 Mevcut Diller
- [English (İngilizce)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Rusça)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (İsveççe)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Lehçe)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Mevcut)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Almanca)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Fransızca)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Hollandaca)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (İspanyolca)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Portekizce)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Japonca)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Çince)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Ukraynaca)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

## İçindekiler
1. [Başlangıç: Eklenti Kurulumu](#başlangıç)
2. [OpenAI API Anahtarlarının Yapılandırılması](#openai-api-anahtarlarının-yapılandırılması)
3. [Claude (Anthropic) API Anahtarları](#claude-api-anahtarları)
4. [Gemini API Anahtarları](#gemini-api-anahtarları)
5. [Perplexity API Anahtarları](#perplexity-api-anahtarları)
6. [Mistral API Anahtarları](#mistral-api-anahtarları)
7. [Sorun Giderme](#sorun-giderme)

## Başlangıç

Google E-Tablolar'da AI kullanmak için bu adımları izleyin:

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">GPT for Sheets Eklentisini Yükleyin</a>
2. <a href="/gpt-for-sheets/" target="_blank">Pro User planına yükseltin</a>
3. Yeni bir e-tablo oluşturun veya mevcut tablonun **sahibi** olduğunuzdan emin olun
4. Eklentiyi başlatın: Uzantılar > GPT for Sheets, Docs, Slides, Forms > **Başlat**
5. Hesabınızı güncelleyin: Uzantılar > GPT for Sheets, Docs, Slides, Forms > **Hesabı Yenile** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Hesabı Yenile" width="400">

## OpenAI API Anahtarlarının Yapılandırılması

### 1. OpenAI Platformuna Erişim
1. <a href="https://platform.openai.com/account/api-keys" target="_blank">OpenAI platformunu</a> ziyaret edin
2. Hesap oluşturun veya giriş yapın

![OpenAI Kayıt Sayfası]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. API Anahtarı Oluşturma
1. "Create new secret key" düğmesine tıklayın
2. <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">ödeme sayfasına</a> gidin ve **minimum $1** ekleyin
   - Gerçek kullanım maliyetleri çok düşüktür
   - Sistem API limitleri için optimize edilmiştir

![API Anahtarı Oluşturma]({{ site.baseurl }}/images/generate-api-key.png)

### 3. API Anahtarını Kopyalama

![Oluşturulan API Anahtarı]({{ site.baseurl }}/images/created-api-key.png)

### 4. Eklenti Yapılandırması
1. E-tabloyu açın ve yan paneli başlatın
2. "API Anahtarını Yapılandır" düğmesine tıklayın
3. Kopyalanan API anahtarını yapıştırın
4. "Kontrol Et" düğmesine tıklayın
5. "Kaydet" düğmesine tıklayın

### 5. Pro User Planı Onayı
Eklentiyi kullanmak için Pro User planı gereklidir:

![Pro User Planı Onayı]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. Hesap Güncelleme
Uzantılar menüsünden "Hesabı Yenile" düğmesine tıklayın:

![Hesabı Yenile]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. API Anahtarı Yapılandırması
"OpenAI Anahtarını Yapılandır" düğmesine tıklayın:

![API Anahtarı Yapılandırması]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. API Anahtarını Kontrol Etme ve Kaydetme
API anahtarını girin ve "Kontrol Et" düğmesine tıklayın:

![API Anahtarını Kontrol Etme ve Kaydetme]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## Kullanım Örnekleri

Bu AI fonksiyonlarını hücrelerinizde doğrudan kullanın:

```
=GPT("Bir kafe için reklam metni yaz")
=CLAUDE("Bu müşteri yorumlarını analiz et")
=GEMINI("Satış tahmini oluştur")
=PERPLEXITY("Güncel pazarlama trendlerini araştır")
=MISTRAL("Ürün açıklamaları oluştur")
```

### Önemli Notlar

![GPT for Sheets Önemli Notlar]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Sonuçları aldıktan sonra mutlaka **"Tüm GPT'leri Değiştir"** veya **"Seçilenleri Değiştir"** düğmesine tıklayın.
> Aksi takdirde formüller sayfa yenilendiğinde veya her 1-2 dakikada bir yeniden hesaplanacaktır.

## Ücretsiz ve Premium Limitler

### Ücretsiz Kota (Free Tier)
![Free Tier Limitleri]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### Premium Kota (Tier 1)
![Tier 1 Limitleri]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Chrome Profili Oluşturma
Birden fazla Google hesabı kullanıyorsanız ayrı bir Chrome profili öneriyoruz:

![Chrome Profili Oluşturma]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Claude API Anahtarları (Anthropic)

1. <a href="https://console.anthropic.com/settings/keys" target="_blank">Claude API anahtarları sayfasını</a> ziyaret edin
2. Hesap oluşturun veya giriş yapın
3. API anahtarı oluşturun
4. Eklentinin yan panelinde Claude'u seçin ve API anahtarını girin

## Gemini API Anahtarları

1. <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio'yu</a> açın
2. API anahtarı oluşturun
3. Eklentinin yan panelinde Gemini'yi seçin ve API anahtarını girin

## Perplexity API Anahtarları

1. <a href="https://www.perplexity.ai/settings/api" target="_blank">Perplexity ayarlarına</a> gidin
2. API anahtarı oluşturun
3. Eklentinin yan panelinde Perplexity'yi seçin ve API anahtarını girin

## Mistral API Anahtarları

1. <a href="https://console.mistral.ai/api-keys/" target="_blank">Mistral konsolunu</a> ziyaret edin
2. API anahtarı oluşturun
3. Eklentinin yan panelinde Mistral'ı seçin ve API anahtarını girin

## Sorun Giderme

### "Bu işlem için yetkilendirme gerekli"

1. **Kişisel Gmail hesabı kullanın**: Kurumsal hesaplar (Workspace) eklenti kısıtlamalarına sahip olabilir
2. Kişisel hesapla: Eklentiyi yeniden yükleyin
3. Ayrı Chrome profili kullanın - birden fazla Google hesabı varsa önemli

### "Kotanızı aştınız. Planınızı ve ödeme detaylarınızı kontrol edin"

- <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">OpenAI ödemelerine</a> gidin ve **minimum $1** ekleyin

### Öneriler

- Google Chrome tarayıcısını kullanın
- Birden fazla hesap varsa: Ayrı Chrome profili oluşturun
- Kurumsal hesapla: Yöneticinizle iletişime geçin veya kişisel hesap kullanın

## Faydalı Bağlantılar

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">OpenAI API Limitleri</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI API Anahtarları Yönetimi</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">OpenAI Ödemeleri</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">Detaylı Sorun Giderme</a>

Yapılandırma sonrasında, e-tablonun tüm düzenleyicileri bu API anahtarıyla AI fonksiyonlarını kullanabilir. 