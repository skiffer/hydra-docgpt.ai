---
title: ChatGPT Presenta o1-preview y o1-mini (Septiembre 2024)
description: 
permalink: /chatgpt-presenta-o1-preview-y-o1-mini-septiembre-2024/
---

<div style="
  position: fixed;
  right: 0;
  top: 100px; /* Ajusta el valor superior según sea necesario */
  width: 283px; /* Ajusta el ancho según sea necesario */
  border: 2px solid #007bff;
  border-radius: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
  z-index: 9999;
">
            <h3>🤔️ ¿Necesitas ejecutar tareas en masa?</h3>
            <img src="https://github.com/skiffer/hydra-docgpt.ai/blob/main/images/demo-sheets2.gif?raw=true" alt="GIF Demo" style="width: 100%; border-radius: 10px; margin-bottom: 15px;"/>
            <p style="font-size: 18px; margin-top: 10px;"><b>👍️️️️️️ ¡Prueba <a href="https://docgpt.ai/gpt-for-sheets/" style="color: #007bff; text-decoration: none;" target="_blank">GPT para Sheets!</a></b></p>
            <ul style="list-style-type: none; padding: 0; font-size: 16px;">
              <li>📄 Crea descripciones de productos a la vez</li>
              <li>💼 Genera leads y enriquece datos</li>
              <li>🔗️️️️️️ Scraping de sitios</li>
              <li>🌎 Búsqueda en Google</li>
              <li>🔍 SEO programático y generación masiva de páginas</li>
              <li>📣 Generador de publicaciones en redes sociales impulsado por IA</li>
              <li>📈 Extrae palabras clave de competidores mejor posicionados</li>
              <li>🤖 Compatible con Perplexity, Claude, Mistral, Gemini, OpenRoute</li>
            </ul>
</div>

<style>
body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
    color: black;
    font-size: 18px;
    line-height: 1.6;
}

p {
    font-size: 18px;
    margin-bottom: 1.5em;
}

h1 {
    font-size: 36px;
    margin-bottom: 0.8em;
}

h2 {
    font-size: 30px;
    margin-bottom: 0.75em;
}

h3 {
    font-size: 24px;
    margin-bottom: 0.7em;
}

h4 {
    font-size: 20px;
    margin-bottom: 0.65em;
}

h5, h6 {
    font-size: 18px;
    margin-bottom: 0.6em;
}
</style>

<div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/50W4YeQdnSg?si=_QK6iDY2ux-ThqR9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

OpenAI ha presentado su último modelo de IA, con nombre en clave *Strawberry*, y oficialmente llamado *OpenAI o1*. Este nuevo modelo forma parte de una familia que incluye dos versiones: **o1-preview** y **o1-mini**. Mientras que **o1-preview** es un modelo completo, **o1-mini** es más pequeño y eficiente, diseñado principalmente para la generación de código.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-family: Arial, sans-serif; text-align: left;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th style="border: 1px solid #dddddd; padding: 12px;">Modelo</th>
      <th style="border: 1px solid #dddddd; padding: 12px;">Ventana de contexto (tokens)</th>
      <th style="border: 1px solid #dddddd; padding: 12px;">Límite máximo de tokens de salida</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 12px;">o1-preview</td>
      <td style="border: 1px solid #dddddd; padding: 12px;">128,000</td>
      <td style="border: 1px solid #dddddd; padding: 12px;">Hasta 32,768 tokens</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 12px;">o1-mini</td>
      <td style="border: 1px solid #dddddd; padding: 12px;">128,000</td>
      <td style="border: 1px solid #dddddd; padding: 12px;">Hasta 65,536 tokens</td>
    </tr>
  </tbody>
</table>

## Precios

Los usuarios de ChatGPT Plus y Team ya pueden acceder tanto a **o1-preview** como a **o1-mini**, con acceso anticipado para usuarios de Enterprise y Edu la próxima semana. OpenAI también planea ofrecer **o1-mini** a los usuarios gratuitos de ChatGPT, aunque la fecha exacta de lanzamiento aún no se ha determinado.

Para los desarrolladores, **OpenAI o1** tiene un costo más alto. La API de **o1-preview** tiene un precio de $15 por 1 millón de tokens de entrada y $60 por 1 millón de tokens de salida. En comparación, **GPT-4o** es más asequible, a $5 por tokens de entrada y $15 por tokens de salida.

## Ejemplos de Casos de Uso

Para ayudar a ilustrar mejor las diferencias entre estos modelos, aquí hay algunos ejemplos de cómo se puede aplicar cada modelo:

### **Ejemplo 1: Programación con o1-mini**
Si eres un desarrollador trabajando en un proyecto complejo que requiere generar grandes bloques de código o manejar flujos de trabajo de varios pasos, **o1-mini** es una excelente opción. Su mayor salida de tokens (hasta 65,536 tokens) te permite generar y ejecutar fragmentos de código extensos con menos interrupciones, lo que lo hace perfecto para tareas de **desarrollo de software** o **procesamiento de datos**.

### **Ejemplo 2: Investigación Científica con o1-preview**
Supón que eres un investigador que analiza conjuntos de datos complejos o resuelve problemas matemáticos de varios pasos. En ese caso, **o1-preview** te proporcionará las capacidades de **razonamiento avanzado** que necesitas para desglosar tareas intrincadas, razonar sobre los problemas y producir resultados precisos. Esto es especialmente útil en campos como la **bioquímica**, **física** o **investigación en aprendizaje automático**.

### **Ejemplo 3: Proyectos Creativos con GPT-4**
Para tareas en las que el **contenido visual** es integral a tu trabajo, como generar infografías, diseñar materiales de marketing o producir contenido creativo para redes sociales, **GPT-4** es ideal. Su capacidad para combinar texto e imágenes lo convierte en la solución perfecta para optimizar los **flujos de trabajo creativos** en industrias como **marketing**, **publicidad** y **creación de contenido**.

## Características Clave de OpenAI o1

<div style="text-align: center">
    <img src="{{ site.baseurl }}/images/o1-tokens.png" alt="chatpgt-o1-preview-mini-tokens" class="" style="width: 700px !important;"/>
</div>

Una de las características destacadas de **OpenAI o1** es su capacidad para "autoevaluarse". Esto permite que el modelo tome tiempo adicional para procesar y considerar varios aspectos de una consulta antes de proporcionar una respuesta, lo que lleva a respuestas más reflexivas y precisas. Esta característica es particularmente útil para tareas complejas que requieren un análisis profundo, como el análisis de correos electrónicos en busca de información privilegiada o la lluvia de ideas sobre estrategias de marketing.

El modelo utiliza el aprendizaje por refuerzo para "pensar" antes de responder, lo que imita un proceso de pensamiento. Con el apoyo de un sistema de recompensas y castigos, **o1** planifica y ejecuta múltiples pasos para generar una respuesta integral. La teoría es que cuanto más tiempo tome **OpenAI o1** para procesar una consulta, mejor será la respuesta.

## Para Quién Está Diseñado

Las capacidades avanzadas de razonamiento de **OpenAI o1** lo convierten en una herramienta ideal para profesionales que enfrentan desafíos complejos en campos
