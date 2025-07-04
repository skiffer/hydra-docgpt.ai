---
layout: docs_layouts/default
title: Настройка API-ключей OpenAI - Полное руководство по интеграции ИИ в Google Таблицы
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-ru
description: Подробное руководство по настройке API-ключей OpenAI, Claude, Gemini, Perplexity и Mistral в Google Таблицах. Максимизируйте производительность ИИ в ваших таблицах.
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# Мощь ИИ для Google Таблиц: Полное руководство по установке OpenAI, Claude, Gemini, Perplexity и Mistral

## 🌐 Доступные языки
- [English (Английский)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Текущий)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (Шведский)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Польский)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Турецкий)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Немецкий)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Французский)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Голландский)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (Испанский)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Португальский)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Японский)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Китайский)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Украинский)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

## Содержание
1. [Начало работы: Установка дополнения](#начало-работы)
2. [Настройка API-ключей OpenAI](#настройка-api-ключей-openai)
3. [API-ключи Claude (Anthropic)](#api-ключи-claude)
4. [API-ключи Gemini](#api-ключи-gemini)
5. [API-ключи Perplexity](#api-ключи-perplexity)
6. [API-ключи Mistral](#api-ключи-mistral)
7. [Решение проблем](#решение-проблем)

## Начало работы

Следуйте этим шагам для использования ИИ в Google Таблицах:

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">Установите дополнение GPT for Sheets</a>
2. <a href="/gpt-for-sheets/" target="_blank">Обновитесь до плана Pro User</a>
3. Создайте новую таблицу или убедитесь, что у вас есть **права владельца** на существующую
4. Запустите дополнение: Расширения > GPT for Sheets, Docs, Slides, Forms > **Запустить**
5. Обновите аккаунт: Расширения > GPT for Sheets, Docs, Slides, Forms > **Обновить аккаунт** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Обновить аккаунт" width="400">

## Настройка API-ключей OpenAI

### 1. Доступ к платформе OpenAI
1. Посетите <a href="https://platform.openai.com/account/api-keys" target="_blank">платформу OpenAI</a>
2. Создайте аккаунт или войдите

![Страница регистрации OpenAI]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. Создание API-ключа
1. Нажмите "Create new secret key"
2. Перейдите на <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">страницу оплаты</a> и пополните баланс на **минимум $1**
   - Реальные затраты на использование очень низкие
   - Система оптимизирована для API-лимитов

![Генерация API-ключа]({{ site.baseurl }}/images/generate-api-key.png)

### 3. Копирование API-ключа

![Созданный API-ключ]({{ site.baseurl }}/images/created-api-key.png)

### 4. Настройка дополнения
1. Откройте таблицу и запустите боковую панель
2. Нажмите "Настроить API-ключ"
3. Вставьте скопированный API-ключ
4. Нажмите "Проверить"
5. Нажмите "Сохранить"

### 5. Подтверждение плана Pro User
Для использования дополнения требуется план Pro User:

![Подтверждение плана Pro User]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. Обновление аккаунта
Нажмите "Обновить аккаунт" в меню расширений:

![Обновить аккаунт]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. Настройка API-ключа
Нажмите "Настроить API-ключ OpenAI":

![Настройка API-ключа]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. Проверка и сохранение API-ключа
Введите API-ключ и нажмите "Проверить":

![Проверка и сохранение API-ключа]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## Примеры использования

Используйте эти функции ИИ прямо в ваших ячейках:

```
=GPT("Напиши рекламный текст для кафе")
=CLAUDE("Проанализируй эти отзывы клиентов")
=GEMINI("Создай прогноз продаж")
=PERPLEXITY("Исследуй текущие тренды маркетинга")
=MISTRAL("Сгенерируй описания продуктов")
```

### Важные примечания

![Важные примечания GPT for Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> После получения результатов обязательно нажмите **"Заменить все GPT"** или **"Заменить выбранные GPT"**.
> В противном случае формулы будут пересчитываться при обновлении страницы или каждые 1-2 минуты.

## Бесплатные и премиум-лимиты

### Бесплатная квота (Free Tier)
![Лимиты Free Tier]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### Премиум-квота (Tier 1)
![Лимиты Tier 1]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Создание профиля Chrome
При использовании нескольких аккаунтов Google рекомендуем отдельный профиль Chrome:

![Создание профиля Chrome]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## API-ключи Claude (Anthropic)

1. Посетите <a href="https://console.anthropic.com/settings/keys" target="_blank">страницу API-ключей Claude</a>
2. Создайте аккаунт или войдите
3. Сгенерируйте API-ключ
4. Выберите Claude в боковой панели дополнения и введите API-ключ

## API-ключи Gemini

1. Откройте <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>
2. Сгенерируйте API-ключ
3. Выберите Gemini в боковой панели дополнения и введите API-ключ

## API-ключи Perplexity

1. Перейдите в <a href="https://www.perplexity.ai/settings/api" target="_blank">настройки Perplexity</a>
2. Сгенерируйте API-ключ
3. Выберите Perplexity в боковой панели дополнения и введите API-ключ

## API-ключи Mistral

1. Посетите <a href="https://console.mistral.ai/api-keys/" target="_blank">Консоль Mistral</a>
2. Сгенерируйте API-ключ
3. Выберите Mistral в боковой панели дополнения и введите API-ключ

## Решение проблем

### "Это действие требует авторизации"

1. **Используйте личный аккаунт Gmail**: Корпоративные почты (Workspace) могут иметь ограничения на дополнения
2. С личным аккаунтом: Переустановите дополнение
3. Используйте отдельный профиль Chrome - важно при наличии нескольких аккаунтов Google

### "Квота превышена. Проверьте ваш план и оплату"

- Перейдите в <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">оплату OpenAI</a> и пополните баланс на **минимум $1**

### Рекомендации

- Используйте браузер Google Chrome
- При наличии нескольких аккаунтов: Создайте отдельный профиль Chrome
- С корпоративной почтой: Свяжитесь с администратором или используйте личный аккаунт

## Полезные ссылки

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">Лимиты API OpenAI</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">Управление API-ключами OpenAI</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">Оплата OpenAI</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">Подробное решение проблем</a>

После настройки все редакторы таблицы могут использовать функции ИИ с этим API-ключом. 