---
layout: docs_layouts/default
title: Configurar claves API de OpenAI - Guía completa para integración de IA en Google Sheets
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-es
description: Guía detallada para configurar las claves API de OpenAI, Claude, Gemini, Perplexity y Mistral en Google Sheets. Maximiza el rendimiento de la IA en tus hojas de cálculo.
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# Poder de IA para Google Sheets: Guía completa de instalación para OpenAI, Claude, Gemini, Perplexity y Mistral

## 🌐 Idiomas disponibles
- [English (Inglés)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Ruso)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (Sueco)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Polaco)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Turco)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Alemán)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Francés)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Holandés)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (Actual)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Portugués)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Japonés)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Chino)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Ucraniano)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

> 🔥 **Última actualización**: ¡Ahora con soporte para GPT-4, Claude 3, Gemini Pro, Mistral y Perplexity!

## Índice
1. [Primeros pasos: Instalación del complemento](#primeros-pasos)
2. [Configurar claves API de OpenAI](#configurar-claves-api-de-openai)
3. [Claves API de Claude (Anthropic)](#claves-api-de-claude)
4. [Claves API de Gemini](#claves-api-de-gemini)
5. [Claves API de Perplexity](#claves-api-de-perplexity)
6. [Claves API de Mistral](#claves-api-de-mistral)
7. [Solución de problemas](#solución-de-problemas)

## Primeros pasos

Sigue estos pasos para usar IA en Google Sheets:

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">Instala el complemento GPT for Sheets</a>
2. <a href="/gpt-for-sheets/" target="_blank">Actualiza al plan Pro User</a>
3. Crea una nueva hoja de cálculo o asegúrate de tener **derechos de propietario** en una existente
4. Inicia el complemento: Extensiones > GPT for Sheets, Docs, Slides, Forms > **Iniciar**
5. Actualiza la cuenta: Extensiones > GPT for Sheets, Docs, Slides, Forms > **Actualizar cuenta** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Actualizar cuenta" width="400">

## Configurar claves API de OpenAI

### 1. Acceso a la plataforma OpenAI
1. Visita la <a href="https://platform.openai.com/account/api-keys" target="_blank">plataforma OpenAI</a>
2. Crea una cuenta o inicia sesión

![Página de registro de OpenAI]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. Crear clave API
1. Haz clic en "Create new secret key"
2. Ve a la <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">página de facturación</a> y carga **mínimo $1**
   - Los costos reales de uso son muy bajos
   - El sistema está diseñado para límites óptimos de API

![Generar clave API]({{ site.baseurl }}/images/generate-api-key.png)

### 3. Copiar clave API

![Clave API creada]({{ site.baseurl }}/images/created-api-key.png)

### 4. Configuración del complemento
1. Abre la hoja de cálculo e inicia la barra lateral
2. Haz clic en "Configurar clave API"
3. Pega la clave API copiada
4. Haz clic en "Verificar"
5. Haz clic en "Guardar"

### 5. Confirmar plan Pro User
Se requiere un plan Pro User para usar el complemento:

![Confirmación del plan Pro User]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. Actualizar cuenta
Haz clic en "Actualizar cuenta" en el menú de extensiones:

![Actualizar cuenta]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. Configurar clave API
Haz clic en "Configurar clave API de OpenAI":

![Configurar clave API]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. Verificar y guardar clave API
Ingresa la clave API y haz clic en "Verificar":

![Verificar y guardar clave API]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## Ejemplos de uso

Usa estas funciones de IA directamente en tus celdas:

```
=GPT("Escribe un texto publicitario para un café")
=CLAUDE("Analiza estas reseñas de clientes")
=GEMINI("Crea una proyección de ventas")
=PERPLEXITY("Investiga tendencias actuales de marketing")
=MISTRAL("Genera descripciones de productos")
```

### Notas importantes

![Notas importantes de GPT for Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Después de recibir resultados, haz clic en **"Reemplazar todos los GPTs"** o **"Reemplazar GPTs seleccionados"**.
> De lo contrario, las fórmulas se recalcularán al actualizar la página o cada 1-2 minutos.

## Límites gratuitos vs. Premium

### Cuota gratuita (Free Tier)
![Límites Free Tier]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### Cuota Premium (Tier 1)
![Límites Tier 1]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Crear perfil de Chrome
Para múltiples cuentas de Google, recomendamos un perfil de Chrome separado:

![Crear perfil de Chrome]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Claves API de Claude (Anthropic)

1. Visita la <a href="https://console.anthropic.com/settings/keys" target="_blank">página de claves API de Claude</a>
2. Crea una cuenta o inicia sesión
3. Genera la clave API
4. Selecciona Claude en la barra lateral del complemento e ingresa la clave API

## Claves API de Gemini

1. Abre <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>
2. Genera la clave API
3. Selecciona Gemini en la barra lateral del complemento e ingresa la clave API

## Claves API de Perplexity

1. Ve a <a href="https://www.perplexity.ai/settings/api" target="_blank">configuración de Perplexity</a>
2. Genera la clave API
3. Selecciona Perplexity en la barra lateral del complemento e ingresa la clave API

## Claves API de Mistral

1. Visita la <a href="https://console.mistral.ai/api-keys/" target="_blank">Consola de Mistral</a>
2. Genera la clave API
3. Selecciona Mistral en la barra lateral del complemento e ingresa la clave API

## Solución de problemas

### "Esta acción requiere autorización"

1. **Usa una cuenta personal de Gmail**: Los correos empresariales (Workspace) pueden tener restricciones de complementos
2. Con cuenta personal: Reinstala el complemento
3. Usa un perfil de Chrome separado - importante con múltiples cuentas de Google

### "Cuota excedida. Verifica tu plan y facturación"

- Ve a <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">facturación de OpenAI</a> y carga **mínimo $1**

### Recomendaciones

- Usa el navegador Google Chrome
- Con múltiples cuentas: Crea un perfil de Chrome separado
- Con correo empresarial: Contacta al administrador o usa cuenta personal

## Enlaces útiles

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">Límites de API de OpenAI</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">Gestión de claves API de OpenAI</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">Facturación de OpenAI</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">Solución de problemas detallada</a>

Después de la configuración, todos los editores de la hoja de cálculo pueden usar las funciones de IA con esta clave API. 