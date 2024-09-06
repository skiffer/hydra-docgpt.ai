---
layout: docs_layouts/default
title: GPT-4o modeli mevcut değil veya erişiminiz yok
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/turkey
description: GPT-4o modeli mevcut değil veya erişiminiz yok
---

# GPT-4o modeli mevcut değil veya erişiminiz yok

Kullanım başına ödeme yapılan API'ye erişmek için önce bir ödeme planı oluşturmanız ve kredi satın almanız gerekir. Ayrıntılar için lütfen [Fatura Özeti](https://platform.openai.com/settings/organization/billing/overview) sayfasına bakın.

API Anahtarınızı buradan kopyalayabilirsiniz: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - API Anahtarlarınız</a>

1. Başarılı bir ödeme (en az 5 USD) yapıldıktan sonra, GPT-4 modeli ve üzeri için daha yüksek hız sınırları etkinleştirilecektir. En az **1. Seviye** olmanız gerekir!
2. Kredi, gösterge panelinde hemen görünüyor olsa da, playground tarafından tanınması genellikle 5 dakika sürebilir.
3. Başarılı ödeme sonrası API Anahtarınızı yeniden oluşturmayı deneyin.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Hız Sınırlarınızı buradan kontrol edin: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Hız Sınırları</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

Bu nedenle, OpenAI hesabınızı doldurmanız veya en yüksek Seviye ve kurumsal uygulamalar için en yüksek hız sınırlarına sahip OpenAI API Anahtarımız ile diğer planlarımızı denemeniz gerekir.

**GPT-4o kullanmak için en az 1. Seviyede olmanız gerekiyor!**
İyi haber — Open AI Plus aboneliğine ihtiyacınız yok.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Google Sheets için GPT ile OpenAI Plus abonelikleri olmadan GPT-4o kullanabilirsiniz. Kullanım başına ödeme yapın.

Hız sınırlarını artırmak için bu sayfaya göz atın: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">ChatGPT Hız Sınırlarınızı Kontrol Etme Kılavuzu</a>

### Hız Sınırları Nasıl Çalışır?

Hız sınırları beş ana metrik üzerinden uygulanır:

- **RPM (Dakika başına istek sayısı)**
- **RPD (Gün başına istek sayısı)**
- **TPM (Dakika başına token sayısı)**
- **TPD (Gün başına token sayısı)**
- **IPM (Dakika başına resim sayısı)**

Bu metriklerden herhangi birine dayalı olarak hız sınırına ulaşabilirsiniz; bu, hangi sınırın önce karşılandığına bağlıdır. Örneğin, RPM sınırınız 20 ise, her biri yalnızca 100 token içeren 20 istek gönderdiğinizde, token kotanızı (örneğin, dakikada 150k token) tamamen kullanmamış olsanız bile bu sınıra ulaşırsınız.

### Toplu API Kuyruk Sınırları

Toplu API kuyruk sınırları, belirli bir model için kuyruğa alınan toplam token sayısına göre hesaplanır. Bekleyen toplu işlerden gelen tokenlar, kuyruk sınırınıza dahil edilir. Bir toplu iş tamamlandığında, bu tokenlar artık model sınırına dahil edilmez.

### Önemli Noktalar:

- **Kurumsal ve Proje Seviyesi Sınırları**: Hız sınırları, kullanıcı düzeyinde değil, kurumsal ve proje düzeyinde uygulanır.
- **Model Bazlı Sınırlar**: Hız sınırları, kullandığınız modele bağlı olarak değişir.
- **Kullanım Sınırları**: API kullanımı için aylık harcama sınırları vardır ve bunlar "kullanım sınırları" olarak da bilinir.
- **Paylaşılan Sınırlar**: Bazı model grupları hız sınırlarını paylaşır. Örneğin, kurumsal sınırlar sayfanızda 3,5 milyon TPM paylaşımı varsa, paylaşılan sınır listesindeki modellere yapılan tüm çağrılar bu 3,5 milyonun toplamına dahil edilir.

Bu sınırları anlamak, API'yi hız sınırlarına takılmadan en iyi şekilde kullanmanızı sağlar.

### Kullanım Seviyeleri

Hesap ayarlarınızdaki sınır bölümünde organizasyonunuzun hız ve kullanım sınırlarını görebilirsiniz. OpenAI API'sini daha fazla kullandıkça ve harcamalarınız arttıkça, otomatik olarak bir üst kullanım seviyesine geçersiniz. Bu, genellikle çoğu model için daha yüksek hız sınırlarına yol açar.

| **Seviye**   | **Koşul**                                                          | **Kullanım Sınırları** |
|--------------|--------------------------------------------------------------------|------------------------|
| **Ücretsiz** | Desteklenen bölgelerdeki kullanıcılar için kullanılabilir            | 100 USD / ay           |
| **Seviye 1** | 5 USD ödeme yapıldı                                                | 100 USD / ay           |
| **Seviye 2** | 50 USD ödeme yapıldı ve ilk başarılı ödemeden itibaren en az 7 gün  | 500 USD / ay           |
| **Seviye 3** | 100 USD ödeme yapıldı ve ilk başarılı ödemeden itibaren en az 7 gün | 1.000 USD / ay         |
| **Seviye 4** | 250 USD ödeme yapıldı ve ilk başarılı ödemeden itibaren en az 14 gün| 5.000 USD / ay         |
| **Seviye 5** | 1.000 USD ödeme yapıldı ve ilk başarılı ödemeden itibaren en az 30 gün| 50.000 USD / ay        |

Seviyelerde ilerledikçe, hız sınırlarınız artacak ve API'yi daha esnek bir şekilde kullanmanızı sağlayacaktır.

### Google Sheets'te GPT-4'ü Toplu Kullanma
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="Sheets için GPT Nasıl Kullanılır" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Planlar: Profesyonel, Kurumsal

Bağlantı burada: [GPT, Claude, Mistral, Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Bağlantılar
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">OpenAI Anahtarlarınız için Hız Sınırlarını Artırma</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - API Anahtarlarınız</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">OpenAI Hesabı için Faturalandırma</a>
