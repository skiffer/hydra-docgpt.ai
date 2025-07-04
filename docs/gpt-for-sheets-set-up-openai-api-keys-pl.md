---
layout: docs_layouts/default
title: Konfiguracja kluczy API OpenAI - Kompletny przewodnik integracji AI w Arkuszach Google
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-pl
description: Szczegółowy przewodnik konfiguracji kluczy API OpenAI, Claude, Gemini, Perplexity i Mistral w Arkuszach Google. Zmaksymalizuj wydajność AI w swoich arkuszach.
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# Moc AI dla Arkuszy Google: Kompletny przewodnik instalacji OpenAI, Claude, Gemini, Perplexity i Mistral

## 🌐 Dostępne języki
- [English (Angielski)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Rosyjski)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (Szwedzki)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Aktualny)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Turecki)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Niemiecki)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Francuski)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Holenderski)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (Hiszpański)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Portugalski)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Japoński)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Chiński)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Ukraiński)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

## Spis treści
1. [Rozpoczęcie: Instalacja dodatku](#rozpoczęcie)
2. [Konfiguracja kluczy API OpenAI](#konfiguracja-kluczy-api-openai)
3. [Klucze API Claude (Anthropic)](#klucze-api-claude)
4. [Klucze API Gemini](#klucze-api-gemini)
5. [Klucze API Perplexity](#klucze-api-perplexity)
6. [Klucze API Mistral](#klucze-api-mistral)
7. [Rozwiązywanie problemów](#rozwiązywanie-problemów)

## Rozpoczęcie

Wykonaj te kroki, aby korzystać z AI w Arkuszach Google:

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">Zainstaluj dodatek GPT for Sheets</a>
2. <a href="/gpt-for-sheets/" target="_blank">Zaktualizuj do planu Pro User</a>
3. Utwórz nowy arkusz lub upewnij się, że jesteś **właścicielem** istniejącego
4. Uruchom dodatek: Rozszerzenia > GPT for Sheets, Docs, Slides, Forms > **Uruchom**
5. Zaktualizuj konto: Rozszerzenia > GPT for Sheets, Docs, Slides, Forms > **Odśwież konto** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Odśwież konto" width="400">

## Konfiguracja kluczy API OpenAI

### 1. Dostęp do platformy OpenAI
1. Odwiedź <a href="https://platform.openai.com/account/api-keys" target="_blank">platformę OpenAI</a>
2. Utwórz konto lub zaloguj się

![Strona rejestracji OpenAI]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. Tworzenie klucza API
1. Kliknij "Create new secret key"
2. Przejdź do <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">strony płatności</a> i dodaj **minimum $1**
   - Rzeczywiste koszty użytkowania są bardzo niskie
   - System jest zoptymalizowany pod kątem limitów API

![Generowanie klucza API]({{ site.baseurl }}/images/generate-api-key.png)

### 3. Kopiowanie klucza API

![Utworzony klucz API]({{ site.baseurl }}/images/created-api-key.png)

### 4. Konfiguracja dodatku
1. Otwórz arkusz i uruchom panel boczny
2. Kliknij "Skonfiguruj klucz API"
3. Wklej skopiowany klucz API
4. Kliknij "Sprawdź"
5. Kliknij "Zapisz"

### 5. Potwierdzenie planu Pro User
Plan Pro User jest wymagany do korzystania z dodatku:

![Potwierdzenie planu Pro User]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. Aktualizacja konta
Kliknij "Odśwież konto" w menu rozszerzeń:

![Odśwież konto]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. Konfiguracja klucza API
Kliknij "Skonfiguruj klucz OpenAI":

![Konfiguracja klucza API]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. Sprawdzanie i zapisywanie klucza API
Wprowadź klucz API i kliknij "Sprawdź":

![Sprawdzanie i zapisywanie klucza API]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## Przykłady użycia

Używaj tych funkcji AI bezpośrednio w swoich komórkach:

```
=GPT("Napisz tekst reklamowy dla kawiarni")
=CLAUDE("Przeanalizuj te opinie klientów")
=GEMINI("Stwórz prognozę sprzedaży")
=PERPLEXITY("Zbadaj aktualne trendy marketingowe")
=MISTRAL("Wygeneruj opisy produktów")
```

### Ważne uwagi

![Ważne uwagi GPT for Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Po otrzymaniu wyników koniecznie kliknij **"Zastąp wszystkie GPT"** lub **"Zastąp wybrane GPT"**.
> W przeciwnym razie formuły będą przeliczane przy odświeżaniu strony lub co 1-2 minuty.

## Limity darmowe i premium

### Darmowa kwota (Free Tier)
![Limity Free Tier]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### Kwota premium (Tier 1)
![Limity Tier 1]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Tworzenie profilu Chrome
Przy korzystaniu z wielu kont Google zalecamy oddzielny profil Chrome:

![Tworzenie profilu Chrome]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Klucze API Claude (Anthropic)

1. Odwiedź <a href="https://console.anthropic.com/settings/keys" target="_blank">stronę kluczy API Claude</a>
2. Utwórz konto lub zaloguj się
3. Wygeneruj klucz API
4. Wybierz Claude w panelu bocznym dodatku i wprowadź klucz API

## Klucze API Gemini

1. Otwórz <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>
2. Wygeneruj klucz API
3. Wybierz Gemini w panelu bocznym dodatku i wprowadź klucz API

## Klucze API Perplexity

1. Przejdź do <a href="https://www.perplexity.ai/settings/api" target="_blank">ustawień Perplexity</a>
2. Wygeneruj klucz API
3. Wybierz Perplexity w panelu bocznym dodatku i wprowadź klucz API

## Klucze API Mistral

1. Odwiedź <a href="https://console.mistral.ai/api-keys/" target="_blank">konsolę Mistral</a>
2. Wygeneruj klucz API
3. Wybierz Mistral w panelu bocznym dodatku i wprowadź klucz API

## Rozwiązywanie problemów

### "Ta akcja wymaga autoryzacji"

1. **Użyj osobistego konta Gmail**: Konta firmowe (Workspace) mogą mieć ograniczenia dla dodatków
2. Z osobistym kontem: Zainstaluj dodatek ponownie
3. Użyj oddzielnego profilu Chrome - ważne przy wielu kontach Google

### "Przekroczono limit. Sprawdź swój plan i płatności"

- Przejdź do <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">płatności OpenAI</a> i dodaj **minimum $1**

### Zalecenia

- Używaj przeglądarki Google Chrome
- Przy wielu kontach: Utwórz oddzielny profil Chrome
- Z kontem firmowym: Skontaktuj się z administratorem lub użyj konta osobistego

## Przydatne linki

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">Limity API OpenAI</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">Zarządzanie kluczami API OpenAI</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">Płatności OpenAI</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">Szczegółowe rozwiązywanie problemów</a>

Po konfiguracji wszyscy edytorzy arkusza mogą korzystać z funkcji AI z tym kluczem API. 