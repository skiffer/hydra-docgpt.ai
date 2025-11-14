---
layout: docs_layouts/default
title: Configurar chaves API OpenAI - Guia completo para integração de IA no Google Planilhas
nav_order: 1
parent: GPT for Sheets - other languages
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-pt
description: Guia detalhado para configurar as chaves API do OpenAI, Claude, Gemini, Perplexity e Mistral no Google Planilhas. Maximize o desempenho da IA em suas planilhas.
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# Poder da IA para Google Planilhas: Guia completo de instalação para OpenAI, Claude, Gemini, Perplexity e Mistral

## 🌐 Idiomas disponíveis
- [English (Inglês)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Russo)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (Sueco)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Polonês)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Turco)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Alemão)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Francês)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Holandês)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (Espanhol)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Atual)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Japonês)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Chinês)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Ucraniano)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

> 🔥 **Última atualização**: Agora com suporte para GPT-4, Claude 3, Gemini Pro, Mistral e Perplexity!

## Índice
1. [Primeiros passos: Instalação do complemento](#primeiros-passos)
2. [Configurar chaves API OpenAI](#configurar-chaves-api-openai)
3. [Chaves API Claude (Anthropic)](#chaves-api-claude)
4. [Chaves API Gemini](#chaves-api-gemini)
5. [Chaves API Perplexity](#chaves-api-perplexity)
6. [Chaves API Mistral](#chaves-api-mistral)
7. [Solução de problemas](#solução-de-problemas)

## Primeiros passos

Siga estes passos para usar IA no Google Planilhas:

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">Instale o complemento GPT for Sheets</a>
2. <a href="/gpt-for-sheets/" target="_blank">Atualize para o plano Pro User</a>
3. Crie uma nova planilha ou garanta **direitos de proprietário** em uma existente
4. Inicie o complemento: Extensões > GPT for Sheets, Docs, Slides, Forms > **Iniciar**
5. Atualize a conta: Extensões > GPT for Sheets, Docs, Slides, Forms > **Atualizar conta** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Atualizar conta" width="400">

## Configurar chaves API OpenAI

### 1. Acesso à plataforma OpenAI
1. Visite a <a href="https://platform.openai.com/account/api-keys" target="_blank">plataforma OpenAI</a>
2. Crie uma conta ou faça login

![Página de registro OpenAI]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. Criar chave API
1. Clique em "Create new secret key"
2. Acesse a <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">página de faturamento</a> e carregue **no mínimo $1**
   - Os custos reais de uso são muito baixos
   - O sistema é projetado para limites ótimos de API

![Gerar chave API]({{ site.baseurl }}/images/generate-api-key.png)

### 3. Copiar chave API

![Chave API criada]({{ site.baseurl }}/images/created-api-key.png)

### 4. Configuração do complemento
1. Abra a planilha e inicie a barra lateral
2. Clique em "Configurar chave API"
3. Cole a chave API copiada
4. Clique em "Verificar"
5. Clique em "Salvar"

### 5. Confirmar plano Pro User
É necessário um plano Pro User para usar o complemento:

![Confirmação do plano Pro User]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. Atualizar conta
Clique em "Atualizar conta" no menu de extensões:

![Atualizar conta]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. Configurar chave API
Clique em "Configurar chave API OpenAI":

![Configurar chave API]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. Verificar e salvar chave API
Digite a chave API e clique em "Verificar":

![Verificar e salvar chave API]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## Exemplos de uso

Use estas funções de IA diretamente em suas células:

```
=GPT("Escreva um texto publicitário para um café")
=CLAUDE("Analise estas avaliações de clientes")
=GEMINI("Crie uma projeção de vendas")
=PERPLEXITY("Pesquise tendências atuais de marketing")
=MISTRAL("Gere descrições de produtos")
```

### Notas importantes

![Notas importantes do GPT for Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Após receber resultados, clique em **"Substituir todos os GPTs"** ou **"Substituir GPTs selecionados"**.
> Caso contrário, as fórmulas serão recalculadas ao atualizar a página ou a cada 1-2 minutos.

## Limites gratuitos vs. Premium

### Cota gratuita (Free Tier)
![Limites Free Tier]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### Cota Premium (Tier 1)
![Limites Tier 1]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Criar perfil Chrome
Para múltiplas contas Google, recomendamos um perfil Chrome separado:

![Criar perfil Chrome]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Chaves API Claude (Anthropic)

1. Visite a <a href="https://console.anthropic.com/settings/keys" target="_blank">página de chaves API Claude</a>
2. Crie uma conta ou faça login
3. Gere a chave API
4. Selecione Claude na barra lateral do complemento e insira a chave API

## Chaves API Gemini

1. Abra o <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>
2. Gere a chave API
3. Selecione Gemini na barra lateral do complemento e insira a chave API

## Chaves API Perplexity

1. Acesse as <a href="https://www.perplexity.ai/settings/api" target="_blank">configurações do Perplexity</a>
2. Gere a chave API
3. Selecione Perplexity na barra lateral do complemento e insira a chave API

## Chaves API Mistral

1. Visite o <a href="https://console.mistral.ai/api-keys/" target="_blank">Console Mistral</a>
2. Gere a chave API
3. Selecione Mistral na barra lateral do complemento e insira a chave API

## Solução de problemas

### "Esta ação requer autorização"

1. **Use uma conta Gmail pessoal**: E-mails corporativos (Workspace) podem ter restrições de complementos
2. Com conta pessoal: Reinstale o complemento
3. Use um perfil Chrome separado - importante com múltiplas contas Google

### "Cota excedida. Verifique seu plano e faturamento"

- Acesse o <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">faturamento OpenAI</a> e carregue **no mínimo $1**

### Recomendações

- Use o navegador Google Chrome
- Com múltiplas contas: Crie um perfil Chrome separado
- Com e-mail corporativo: Contate o administrador ou use conta pessoal

## Links úteis

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">Limites de API OpenAI</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">Gerenciamento de chaves API OpenAI</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">Faturamento OpenAI</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">Solução de problemas detalhada</a>

Após a configuração, todos os editores da planilha podem usar as funções de IA com esta chave API. 