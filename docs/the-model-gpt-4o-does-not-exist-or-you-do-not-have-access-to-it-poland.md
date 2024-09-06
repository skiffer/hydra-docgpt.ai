---
layout: docs_layouts/default
title: Model GPT-4o nie istnieje lub nie masz do niego dostępu
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/poland
description: Model GPT-4o nie istnieje lub nie masz do niego dostępu
---

# Model GPT-4o nie istnieje, lub nie masz do niego dostępu

Aby uzyskać dostęp do API z opłatą za użycie, musisz najpierw ustawić plan płatności i zakupić kredyty. Szczegóły znajdziesz w sekcji [Przegląd rozliczeń](https://platform.openai.com/settings/organization/billing/overview).

Tutaj możesz skopiować swój klucz API: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI – Twoje klucze API</a>

1. Po pomyślnej płatności (minimum 5 USD) zostaną aktywowane wyższe limity dla modelu GPT-4 i wyższych. Musisz osiągnąć co najmniej **Poziom 1**!
2. Zwykle może minąć do 5 minut, zanim kredyt zostanie rozpoznany przez playground, nawet jeśli na pulpicie widoczne są środki od razu.
3. Spróbuj również wygenerować nowy klucz API po udanej płatności.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Sprawdź swoje limity tutaj: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Limity</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

Dlatego musisz doładować swoje konto OpenAI lub skorzystać z innych naszych planów z kluczem API OpenAI na najwyższym poziomie i najwyższymi limitami dla aplikacji korporacyjnych OpenAI.

**Aby korzystać z GPT-4o, musisz być co najmniej na Poziomie 1!**
Dobra wiadomość: nie potrzebujesz subskrypcji Open AI Plus.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Dzięki GPT dla Google Sheets możesz korzystać z GPT-4o bez subskrypcji OpenAI Plus. Płacisz zgodnie z użyciem.

Aby zwiększyć limity, odwiedź tę stronę: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Przewodnik po sprawdzaniu limitów ChatGPT</a>

### Jak działają limity?

Limity są stosowane na podstawie pięciu głównych wskaźników:

- **RPM (Żądania na minutę)**
- **RPD (Żądania na dzień)**
- **TPM (Tokeny na minutę)**
- **TPD (Tokeny na dzień)**
- **IPM (Obrazy na minutę)**

Możesz osiągnąć limit na podstawie któregoś z tych wskaźników, w zależności od tego, który zostanie osiągnięty jako pierwszy. Na przykład, jeśli twój limit RPM wynosi 20, wysłanie 20 żądań z tylko 100 tokenami każde, osiągnie ten limit, nawet jeśli nie wykorzystasz pełnej alokacji tokenów (np. 150 tys. tokenów na minutę).

### Limity kolejek API w trybie batch

Limity kolejek API w trybie batch są obliczane na podstawie łącznej liczby tokenów ustawionych w kolejce dla określonego modelu. Tokeny z oczekujących zadań batch liczą się do limitu kolejki. Gdy zadanie batch zostanie zakończone, te tokeny nie będą już liczone do limitu modelu.

### Kluczowe informacje:

- **Limity na poziomie organizacji i projektu**: Limity są stosowane na poziomie organizacji i projektu, a nie na poziomie użytkownika.
- **Limity specyficzne dla modelu**: Limity różnią się w zależności od używanego modelu.
- **Limity użycia**: Istnieją miesięczne limity wydatków na korzystanie z API, znane również jako „limity użycia”.
- **Współdzielone limity**: Niektóre grupy modeli dzielą limity. Na przykład, jeśli na stronie limitów twojej organizacji znajduje się współdzielony TPM o wartości 3,5 miliona, wszystkie żądania do modeli z tej listy będą liczone do tego łącznego limitu.

Zrozumienie tych limitów zapewnia optymalne korzystanie z API bez przerw spowodowanych przekroczeniem limitów.

### Poziomy użycia

Możesz zobaczyć limity szybkości i użycia dla swojej organizacji w sekcji limitów ustawień konta. W miarę wzrostu użycia OpenAI API i wydatków, automatycznie przejdziesz na wyższy poziom użycia. To zazwyczaj prowadzi do zwiększenia limitów dla większości modeli.

| **Poziom**  | **Kwalifikacje**                                                  | **Limity użycia**  |
|-------------|-------------------------------------------------------------------|--------------------|
| **Darmowy** | Dostępny dla użytkowników w obsługiwanych regionach                | 100 USD / miesiąc  |
| **Poziom 1**| Zapłacone 5 USD                                                   | 100 USD / miesiąc  |
| **Poziom 2**| Zapłacone 50 USD i co najmniej 7 dni od pierwszej udanej płatności | 500 USD / miesiąc  |
| **Poziom 3**| Zapłacone 100 USD i co najmniej 7 dni od pierwszej udanej płatności| 1 000 USD / miesiąc|
| **Poziom 4**| Zapłacone 250 USD i co najmniej 14 dni od pierwszej udanej płatności| 5 000 USD / miesiąc|
| **Poziom 5**| Zapłacone 1 000 USD i co najmniej 30 dni od pierwszej udanej płatności| 50 000 USD / miesiąc|

W miarę przechodzenia przez poziomy, twoje limity będą wzrastać, co zapewni większą elastyczność w korzystaniu z API.

### Masowe użycie GPT-4 w Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="Jak używać GPT dla Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Plany: Profesjonalny, Biznesowy

Link tutaj: [GPT, Claude, Mistral, Gemini dla Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Linki
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Jak zwiększyć limity dla kluczy OpenAI</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI – Twoje klucze API</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Fakturowanie dla konta OpenAI</a>
