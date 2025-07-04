---
layout: docs_layouts/default
title: Налаштування ключів API OpenAI
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-uk
description: Як налаштувати ключі API OpenAI
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};

</script>

# Сила ШІ для Google Таблиць: Повний посібник з встановлення OpenAI, Claude, Gemini, Perplexity та Mistral

## 🌐 Доступні мови
- [English (Англійська)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Російська)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (Шведська)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Польська)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Турецька)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Німецька)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Французька)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Нідерландська)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (Іспанська)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Португальська)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Японська)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Китайська)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Поточна)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

## Зміст
1. [Перед початком](#перед-початком)
2. [Інструкції з налаштування](#інструкції-з-налаштування)
3. [Налаштування ключів Mistral](#налаштування-ключів-mistral)
4. [Налаштування ключів Claude](#налаштування-ключів-claude)
5. [Налаштування ключів Perplexity](#налаштування-ключів-perplexity)
6. [Налаштування ключів Gemini](#налаштування-ключів-gemini)
7. [Усунення неполадок](#усунення-неполадок)

### Перед початком
1. Встановіть <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">доповнення GPT for Sheets</a>
2. <a href="/gpt-for-sheets/" target="_blank">Оновіть підписку до плану Pro User</a>
3. Створіть новий документ таблиці або **переконайтеся, що ви ВЛАСНИК поточного**
4. Запустіть доповнення: Розширення > GPT for Sheets, Docs, Slides, Forms > **Запустити**
5. Будь ласка, натисніть кнопку **'Оновити акаунт'**, розташовану: Розширення > GPT for Sheets, Docs, Slides, Forms > **Оновити акаунт** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Оновити акаунт" width="400">
6. Якщо у вас **вже є ключ API** для бажаної моделі ШІ (OpenAI, Claude, Mistral, Perplexity, Gemini), будь ласка, натисніть **'Налаштувати ключ API'** та вставте **ваш ключ API** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-2.png" alt="Оновити акаунт" width="400"> **Справжня вартість використання OpenAI буде ДУЖЕ НИЗЬКОЮ**, оскільки вона була розроблена для обходу обмежень швидкості GPT.
7. <a href="/docs/gpt-for-sheets/set-up-openai-api-keys-uk/#1-увійдіть-або-зареєструйтеся-на-платформі-openai">Якщо у вас **немає ключа API**, будь ласка, дотримуйтесь цих інструкцій для його отримання</a>
8. Переконайтеся, що у вашому обліковому записі білінгу OpenAI є **принаймні $1**. Справжня вартість використання OpenAI буде ДУЖЕ НИЗЬКОЮ, оскільки вона була розроблена **ДЛЯ ОБХОДУ ОБМЕЖЕНЬ ШВИДКОСТІ GPT**. Якщо ваш акаунт новий, ви спочатку матимете доступ до безкоштовного рівня з відносно малими обмеженнями. Рекомендується додати принаймні $5 до вашого акаунта для переходу на рівень 1, який пропонує вищі обмеження швидкості та доступ до GPT-4o: <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Білінг для акаунта OpenAI</a>
9. Скопіюйте та вставте приклади з бічної панелі в будь-яку комірку: Розширення > Доповнення > **Запустити**.
10. Будь ласка, використовуйте кнопки **'Замінити всі GPT'** або **'Замінити обрані GPT'**, коли ви задоволені результатами. Google Таблиці оновлюють формули періодично, і якщо ви оновите сторінку, ви можете втратити свої зміни.
11. Коли ви задоволені результатами, **не забудьте натиснути кнопки 'Замінити всі/обрані GPT'**. Це замінить функції їхніми виходами, запобігаючи їх перерахунку при оновленні таблиці або через певний час (специфічно для Google Таблиць)
12. РЕКОМЕНДАЦІЯ: Найкращий спосіб забезпечити оптимальну продуктивність з доповненнями Google - це використовувати **окремий профіль Google Chrome для вашого єдиного акаунта Gmail!** (іноді Google API не працює добре з кількома акаунтами в одному профілі Chrome) Це допомагає обійти потенційні проблеми, які можуть виникнути через сумісність з іншими браузерами.

Якщо ви зіткнулися з будь-якими помилками під час використання або запуску, будь ласка, перевірте ці сторінки перед зверненням до підтримки:
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank"> Усунення неполадок</a>
- <a href="/docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/" target="_blank"> Модель GPT-4o не існує або у вас немає доступу до неї</a>

### Важливо!
#### Якщо ви зіткнулися з повідомленням: "Для виконання цієї дії потрібна авторизація."
1. **Використовуйте особистий акаунт Gmail**: Якщо ви використовуєте корпоративну електронну пошту (workspace), у неї можуть бути обмеження на використання доповнень. Вам може знадобитися попросити адміністратора електронної пошти вашої компанії налаштувати параметри для дозволу встановлення доповнень. Тому рекомендується використовувати особистий акаунт. Якщо вам потрібно перенести підписку, будь ласка, зверніться до підтримки через чат або електронну пошту yaroslav91@gmail.com.
2. Якщо ви використовуєте особистий акаунт і все ще маєте цю проблему, просто перевстановіть доповнення
3. Використовуйте акаунт Google в окремому профілі Google Chrome - зазвичай потрібно, якщо ви використовуєте кілька акаунтів Google (проблема Google)

4. ![create-profile.png]({{ site.baseurl }}/images/create-profile.png){: width="300"}

#### Якщо ви зіткнулися з повідомленням: "Ви перевищили свою поточну квоту, будь ласка, перевірте ваш план та деталі білінгу"
- <a href="https://platform.openai.com/settings/organization/billing/overview" rel="noopener noreferrer nofollow" target="_blank">Переконайтеся, що у вашому обліковому записі білінгу OpenAI є **принаймні $1**.</a> Справжня вартість використання OpenAI буде низькою, оскільки вона була розроблена для обходу обмежень швидкості GPT

#### РЕКОМЕНДАЦІЯ:
- Оптимальна продуктивність з доповненнями Google досягається за допомогою браузера Google Chrome.
- Якщо ви використовуєте кілька акаунтів в одному профілі Google Chrome, будь ласка, створіть окремий профіль Google Chrome для цього акаунта. (Google іноді нестабільний з cookies кількох акаунтів)
- Якщо ви використовуєте корпоративну електронну пошту - іноді корпоративні електронні пошти мають обмеження з встановленням доповнень. Це може вимагати запиту адміністратора корпоративної електронної пошти налаштувати для дозволу встановлення доповнень або ВИКОРИСТОВУВАТИ ОСОБИСТИЙ АКАУНТ. (якщо потрібно перемістити підписку, будь ласка, напишіть в чат підтримки або на електронну пошту — yaroslav91@gmail.com)

#### Якщо ви використовуєте кілька акаунтів в одному браузері Chrome - Будь ласка, створіть окремий профіль Chrome для цього одного акаунта. Іноді Google API бачить вас як інший акаунт.

# Інструкції - Як налаштувати ключі API OpenAI

> Створіть ключ API OpenAI для отримання доступу до API ChatGPT та інших API OpenAI. Цей ключ дозволяє OpenAI відстежувати ваше використання та генерувати точний білінг.

#### 1. Увійдіть або зареєструйтеся на <a href="https://platform.openai.com/account/api-keys" rel="noopener noreferrer nofollow" target="_blank">платформі OpenAI</a>

![sign-up-openai.png]({{ site.baseurl }}/images/sign-up-openai.png)

#### 2. Натисніть "Створити новий секретний ключ". <a href="https://platform.openai.com/settings/organization/billing/overview" rel="noopener noreferrer nofollow" target="_blank">Переконайтеся, що у вашому обліковому записі білінгу OpenAI є **принаймні $1**.</a> Справжня вартість використання OpenAI буде низькою, оскільки вона була розроблена для обходу обмежень швидкості GPT

![generate-api-key.png]({{ site.baseurl }}/images/generate-api-key.png)

#### 3. Скопіюйте ваш ключ до буфера обміну

![created-api-key.png]({{ site.baseurl }}/images/created-api-key.png)

#### 4. Відкрийте електронну таблицю з встановленим доповненням та запустіть бічну панель <b>Розширення > GPT for Docs, Sheets, Forms, Slides > Запустити</b>
#### 5. Будь ласка, переконайтеся, що ви видалили всі інші доповнення, які надають функції GPT, щоб уникнути конфліктів
#### 6. На цьому етапі у вас повинна бути підписка на <a href="/gpt-for-sheets/" target="_blank">план Pro User</a>
![created-api-key.png]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}
#### 7. Натисніть 'Оновити акаунт': Розширення > GPT for Sheets, Docs, Slides, Forms > Оновити акаунт
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}
#### 8. Натисніть 'Налаштувати ключ OpenAI': Розширення > GPT for Sheets, Docs, Slides, Forms > Оновити акаунт
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}
#### 9. Вставте ваш ключ API OpenAI в зазначене місце та натисніть кнопку 'Перевірити'
![check-and-save-api-key.png]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}
#### 10. Натисніть кнопку 'Зберегти'
#### 11. Введіть просту формулу в комірку та отримайте відповідь від GPT
> =GPT("Напишіть назву для кав'ярні")

### !!! Після підписки або зміни вашого плану, будь ласка, натисніть кнопку 'Оновити акаунт', розташовану: Розширення > GPT for Sheets, Docs, Slides, Forms > Оновити акаунт
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### Важливо!

![IMPORTANT-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Після отримання остаточного результату, будь ласка, натисніть **'Замінити всі GPT'** або **'Замінити обрані'** кнопку для заміни формули результатом.
> Якщо не зробити цього - Google Таблиці повторно виконують всі формули при оновленні сторінки та кожні 1-2 хвилини. (може вплинути на ваші кредити на Open AI або внутрішні кредити, залежно від плану)

### Порівняння обмежень швидкості для безкоштовного рівня та рівня 1

#### Безкоштовний рівень
![tier-0.png]({{ site.baseurl }}/images/tier-0.png){: width="500"}

#### Рівень 1
![tier-1.png]({{ site.baseurl }}/images/tier-1.png){: width="500"}

#### Усунення неполадок
##### Ви перевищили свою поточну квоту, будь ласка, перевірте ваш план та деталі білінгу
##### Виняток: "Модель gpt-4-0125-preview не існує або у вас немає доступу до неї

>OpenAI перейшов на передплачені плани з 25 березня 2024 року.
>Будь ласка, перегляньте ваш акаунт ключа API OpenAI тут: <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Білінг для акаунта OpenAI</a>

Це відбувається через ваш рівень в Open AI, будь ласка, підвищте ваш рівень в OpenAI і модель з'явиться для вашого акаунта.
1. Якщо у вас безкоштовний рівень - Будь ласка, поповніть ваш акаунт принаймні на $5, щоб мати рівень 1 <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-one" rel="nofollow" target="_blank">Обмеження швидкості</a>
2. Щоб перевірити ваш рівень, будь ласка, перейдіть за цим посиланням: <a href="https://platform.openai.com/settings/organization/limits" rel="nofollow" target="_blank">Перевірити ваш рівень</a>
3. Повторно створіть ключ API та спробуйте використовувати [GPT, Claude, Mistral, Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/) з новим (повторно створеним) ключем API

##### ScriptError: Авторизація необхідна для виконання цієї дії

Причина
> Ви використовуєте корпоративний акаунт електронної пошти, вам потрібно використовувати особисту електронну пошту або попросити адміністратора дозволити виконання доповнень
> Ви використовували кілька акаунтів Google в одній сесії Chrome

Рішення #1
1. Використовуйте особисту електронну пошту

Рішення #2
1. Створіть новий профіль Chrome
2. Створіть нову електронну таблицю
3. Спробуйте функцію GPT знову

Рішення #3
- Очистіть cookies у вашому браузері
- Увійдіть знову в акаунт Google
- Видаліть та встановіть доповнення знову

Рішення #4
- Попросіть адміністратора акаунта workspace дозволити виконання доповнень

Інші можливі проблеми можна знайти тут: <a target="_blank" href="/docs/support-gpt-sheets-docs-slides-forms-gmail/">Усунення неполадок</a>

#### Корисні посилання
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Як підвищити — Обмеження швидкості для ключів Open AI </a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Ваші ключі API</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Білінг для акаунта OpenAI</a>

Ви налаштували ваш ключ API OpenAI в GPT for Sheets and Docs. Тепер будь-який користувач з правами редактора цієї електронної таблиці може використовувати функції GPT, використовуючи цей ключ API

### Як створити ключі API Mistral

#### 1. Будь ласка, створіть акаунт https://console.mistral.ai/

#### 2. Перейдіть на https://console.mistral.ai/api-keys/ та створіть api ключ

#### 3. Ось сторінка з цінами для api ключів Mistral: https://docs.mistral.ai/platform/pricing/

### Як створити api ключ Claude (Anthropic)

#### 1. Будь ласка, дотримуйтесь цієї офіційної сторінки https://docs.anthropic.com/claude/reference/getting-started-with-the-api

#### 2. Якщо у вас вже є акаунт, перевірте ваші ключі тут: https://console.anthropic.com/settings/keys

### Як створити api ключ Perplexity AI

#### 1. Будь ласка, дотримуйтесь цієї офіційної сторінки https://docs.perplexity.ai/docs/getting-started

#### 2. Якщо у вас вже є акаунт, перевірте ваші ключі тут: https://www.perplexity.ai/settings/api

#### 3. Згенеруйте ключ API, скопіюйте його

#### 4. Перейдіть до GPT for Sheets та натисніть "Налаштувати ключі Open AI". Прокрутіть вниз та вставте ключ

#### 5. Натисніть кнопку 'Перевірити' для його валідації. Після цього натисніть кнопку 'Зберегти'

#### 6. Тепер ви можете використовувати Perplexity AI з функцією =PERPLEXITY('які найпопулярніші відео на youtube сьогодні')

### Як створити ключі API Gemini

#### Ви можете створити ваш api ключ на цій сторінці: https://aistudio.google.com/app/apikey 