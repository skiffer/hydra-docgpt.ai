---
layout: docs_layouts/default
title: El modelo GPT-4o no existe o no tienes acceso a él
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/spanish
description: El modelo GPT-4o no existe o no tienes acceso a él
---

# El modelo GPT-4o no existe, o no tienes acceso a él

Para acceder a la API de pago por uso, primero debes configurar un plan de pago y comprar créditos. Consulta los detalles en la [Visión general de facturación](https://platform.openai.com/settings/organization/billing/overview).

Aquí puedes copiar tu clave API: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Tus claves API</a>

1. Después de un pago exitoso (mínimo $5), se habilitarán límites más altos para el modelo GPT-4 y superiores. ¡Necesitas tener al menos el Nivel 1!
2. Generalmente puede tomar hasta 5 minutos para que los créditos sean reconocidos por el playground, incluso si el panel de control lo muestra de inmediato.
3. También intenta recrear tu clave API después de un pago exitoso.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Verifica tus límites de tasa aquí: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Límites de tasa</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

Por lo tanto, necesitas completar tu cuenta de OpenAI o intentar usar otros planes con nuestra clave API de OpenAI con el nivel más alto y el límite de tasa más alto para aplicaciones empresariales de OpenAI.

**Para usar GPT-4o, necesitas tener al menos el Nivel 1!**
Buenas noticias: no necesitas la suscripción de OpenAI Plus.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Con GPT para Google Sheets, puedes usar GPT-4o sin suscripciones de OpenAI Plus. Paga según lo que uses.

Para aumentar los límites de tasa, consulta esta página: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Guía para verificar tus límites de tasa de ChatGPT</a>

### ¿Cómo funcionan los límites de tasa?

Los límites de tasa se aplican en cinco métricas clave:

- **RPM (Solicitudes por minuto)**
- **RPD (Solicitudes por día)**
- **TPM (Tokens por minuto)**
- **TPD (Tokens por día)**
- **IPM (Imágenes por minuto)**

Puedes alcanzar un límite de tasa basado en cualquiera de estas métricas, dependiendo de cuál se alcance primero. Por ejemplo, si tu límite de RPM es 20, enviar 20 solicitudes con solo 100 tokens cada una alcanzaría ese límite, incluso si no usaste tu asignación de tokens (por ejemplo, 150k tokens por minuto).

### Límites de cola de API por lotes

Los límites de cola de API por lotes se calculan según el número total de tokens de entrada en cola para un modelo específico. Los tokens de trabajos pendientes en lotes se cuentan para este límite, pero una vez que un trabajo en lote se completa, esos tokens ya no se cuentan contra el límite del modelo.

### Puntos importantes a tener en cuenta:

- **Límites a nivel organizacional y de proyecto**: Los límites de tasa se aplican a nivel de la organización y del proyecto, no a nivel de usuario.
- **Límites específicos por modelo**: Los límites de tasa varían según el modelo que estés utilizando.
- **Límites de uso**: Existen límites mensuales de gasto en el uso de la API, también conocidos como "límites de uso".
- **Límites compartidos**: Algunas familias de modelos comparten límites de tasa. Por ejemplo, si la página de límites de tu organización muestra un TPM compartido de 3.5M, todas las llamadas a cualquier modelo en la lista de "límite compartido" contarán para ese total de 3.5M.

Entender estos límites garantiza un uso óptimo de la API sin interrupciones debido a la limitación de tasa.

### Niveles de uso

Puedes ver los límites de tasa y uso para tu organización en la sección de límites de la configuración de tu cuenta. A medida que utilices más la API de OpenAI y aumentes tu gasto, se te moverá automáticamente al siguiente nivel de uso. Esto generalmente resulta en límites de tasa más altos para la mayoría de los modelos.

| **Nivel**   | **Calificación**                                                  | **Límites de Uso** |
|-------------|-------------------------------------------------------------------|--------------------|
| **Gratis**  | Disponible para usuarios en regiones compatibles                  | $100 / mes         |
| **Nivel 1** | Pago de $5                                                        | $100 / mes         |
| **Nivel 2** | Pago de $50 y al menos 7 días desde el primer pago exitoso         | $500 / mes         |
| **Nivel 3** | Pago de $100 y al menos 7 días desde el primer pago exitoso        | $1,000 / mes       |
| **Nivel 4** | Pago de $250 y al menos 14 días desde el primer pago exitoso       | $5,000 / mes       |
| **Nivel 5** | Pago de $1,000 y al menos 30 días desde el primer pago exitoso     | $50,000 / mes      |

A medida que avances por los niveles, tus límites de tasa aumentarán, brindándote más flexibilidad para aprovechar al máximo la API.

### Uso masivo de GPT-4 en Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="Cómo usar GPT para Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Planes: Profesional, Negocios

Aquí el enlace: [GPT, Claude, Mistral, Gemini para Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Enlaces
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Cómo aumentar los límites de tasa para claves de OpenAI</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Tus claves API</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Facturación de cuenta OpenAI</a>
