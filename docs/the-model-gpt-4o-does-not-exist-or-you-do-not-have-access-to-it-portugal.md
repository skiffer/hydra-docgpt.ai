---
layout: docs_layouts/default
title: O modelo GPT-4o não existe ou você não tem acesso a ele
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/portugal
description: O modelo GPT-4o não existe ou você não tem acesso a ele
---

# O modelo GPT-4o não existe ou você não tem acesso a ele

Para acessar a API de pagamento por uso, você deve primeiro configurar um plano de pagamento e comprar créditos. Consulte a [Visão geral da cobrança](https://platform.openai.com/settings/organization/billing/overview) para mais detalhes.

Aqui você pode copiar sua chave API: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Suas chaves API</a>

1. Após um pagamento bem-sucedido (mínimo de $5), limites de taxa mais altos para o modelo GPT-4 e superiores serão ativados. Você precisa estar no **Nível 1** ou superior!
2. Geralmente, pode demorar até 5 minutos para que o crédito seja reconhecido no playground, mesmo que o painel mostre isso imediatamente.
3. Tente recriar sua chave API após o pagamento bem-sucedido.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Verifique seus limites de taxa aqui: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Limites de taxa</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

Portanto, você precisa adicionar crédito à sua conta OpenAI ou tentar usar nossos outros planos com a chave API OpenAI de nível mais alto e limites de taxa mais elevados para aplicativos empresariais.

**Para usar o GPT-4o, você precisa estar no mínimo no **Nível 1**!**
Boas notícias: você não precisa da assinatura do OpenAI Plus.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Com o GPT para Google Sheets, você pode usar o GPT-4o sem assinaturas do OpenAI Plus. Pague conforme o uso.

Para aumentar os limites de taxa, consulte esta página: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Guia para verificar seus limites de taxa do ChatGPT</a>

### Como funcionam os limites de taxa?

Os limites de taxa são aplicados com base em cinco métricas principais:

- **RPM (Requisições por minuto)**
- **RPD (Requisições por dia)**
- **TPM (Tokens por minuto)**
- **TPD (Tokens por dia)**
- **IPM (Imagens por minuto)**

Você pode atingir um limite de taxa com base em qualquer uma dessas métricas, dependendo de qual limite for alcançado primeiro. Por exemplo, se o seu limite de RPM for 20, enviar 20 requisições com apenas 100 tokens cada atingiria esse limite, mesmo que você não tenha usado toda a sua cota de tokens (por exemplo, 150k tokens por minuto).

### Limites de fila da API em lotes

Os limites de fila da API em lotes são calculados com base no número total de tokens de entrada em fila para um modelo específico. Os tokens de trabalhos em lotes pendentes são contados contra esse limite de fila. Uma vez que o trabalho em lote é concluído, esses tokens não são mais contabilizados contra o limite do modelo.

### Pontos importantes a serem notados:

- **Limites no nível da organização e do projeto**: Os limites de taxa se aplicam no nível da organização e do projeto, não no nível do usuário.
- **Limites específicos do modelo**: Os limites de taxa variam de acordo com o modelo utilizado.
- **Limites de uso**: Existem limites mensais de gastos na utilização da API, conhecidos como "limites de uso".
- **Limites compartilhados**: Algumas famílias de modelos compartilham limites de taxa. Por exemplo, se na página de limites da sua organização for listado um TPM compartilhado de 3,5 milhões, todas as chamadas para modelos dessa lista de "limite compartilhado" contarão para esse total de 3,5 milhões.

Entender esses limites garante o uso ideal da API sem interrupções devido ao atingimento do limite de taxa.

### Níveis de uso

Você pode visualizar os limites de taxa e uso para sua organização na seção de limites das configurações da sua conta. À medida que você usa mais a API da OpenAI e aumenta seus gastos, você será automaticamente promovido ao próximo nível de uso. Isso geralmente resulta em limites de taxa mais altos para a maioria dos modelos.

| **Nível**  | **Qualificação**                                                    | **Limites de uso**  |
|------------|---------------------------------------------------------------------|---------------------|
| **Gratuito** | Disponível para usuários em regiões suportadas                     | $100 / mês          |
| **Nível 1** | $5 pagos                                                           | $100 / mês          |
| **Nível 2** | $50 pagos e pelo menos 7 dias desde o primeiro pagamento bem-sucedido | $500 / mês          |
| **Nível 3** | $100 pagos e pelo menos 7 dias desde o primeiro pagamento bem-sucedido | $1.000 / mês        |
| **Nível 4** | $250 pagos e pelo menos 14 dias desde o primeiro pagamento bem-sucedido | $5.000 / mês        |
| **Nível 5** | $1.000 pagos e pelo menos 30 dias desde o primeiro pagamento bem-sucedido | $50.000 / mês       |

À medida que você avança pelos níveis, seus limites de taxa aumentam, oferecendo mais flexibilidade para aproveitar ao máximo a API.

### Uso em massa do GPT-4 no Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="Como usar GPT para Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Planos: Profissional, Empresarial

Aqui está o link: [GPT, Claude, Mistral, Gemini para Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Links
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Como aumentar seus limites de taxa para chaves OpenAI</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Suas chaves API</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Cobrança da conta OpenAI</a>
