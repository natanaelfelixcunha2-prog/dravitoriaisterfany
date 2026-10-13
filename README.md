# Landing Page de Alta Conversão - Dra. Vitoria Isterfany

Landing page mobile-first de altíssima conversão focada em agendamento da **Primeira Consulta Gratuita** no WhatsApp para a **Dra. Vitoria Isterfany** (Harmonização Orofacial & Odontologia Estética em Tianguá - CE).

---

## 🎯 Estrutura Implementada (100% Foco no Expert e Sem Distrações)

1. **HERO (Primeira Dobra):**
   - Foto em destaque da Dra. Vitoria Isterfany
   - Headline em 1ª pessoa valorizando a autoridade médica
   - Subheadline orientada a segurança, individualidade e naturalidade
   - Botão principal: *"Agendar primeira consulta gratuita no WhatsApp"*
   - Microtexto: *"Resposta rápida • Sem compromisso"*

2. **BLOCO “QUEM SOU EU” (Autoridade Pessoal):**
   - Fotografia profissional do expert
   - Texto em 1ª pessoa transmitindo empatia, calor humano e sem frieza de clínica tradicional
   - Diferenciais: atendimento 100% direto com a Dra. Vitoria, produtos homologados ANVISA, foco em naturalidade

3. **BLOCO “RESULTADOS REAIS” (Prova Visual Forte):**
   - Grid moderno com todas as 17 imagens fornecidas de casos clínicos
   - Filtros instantâneos: *Todos*, *Harmonização Facial*, *Lábios & Contorno*, *Odontologia Estética*
   - Lightbox modal em tela cheia com navegação rápida (setas, toque, ESC)
   - Aviso ético: *"Resultados podem variar de pessoa para pessoa."*
   - CTA intermediário para quem acabou de ver os resultados

4. **BLOCO “POR QUE CONFIAR EM MIM?”:**
   - 6 cards com diferenciais: Avaliação Honesta, Atendimento Feito por Mim, Naturalidade Absoluta, Produtos Padrão Ouro, Acompanhamento Próximo e Localização Privilegiada no Centro de Tianguá

5. **CTA INTERMEDIÁRIO:**
   - Quebra de objeção para quem tem receio de agendar ou dúvidas sobre procedimentos

6. **BLOCO “COMO FUNCIONA A PRIMEIRA CONSULTA”:**
   - 3 passos simples (WhatsApp → Agendamento do melhor horário → Avaliação presencial completa)
   - Destaque para *"100% Gratuita e Sem Compromisso"*

7. **BLOCO “MAIS PROVAS” (Expert + Bastidores):**
   - Fotos da especialista em ação com legendas focadas no rigor e cuidado aos detalhes

8. **PERGUNTAS FREQUENTES (FAQ Anti-Objeção):**
   - Acordeom interativo tirando dúvidas sobre dor, durabilidade, artificialidade e gratuidade da avaliação

9. **CTA FINAL (Decisão):**
   - Headline forte + reforço de confiança e botão WhatsApp de alta conversão

10. **RODAPÉ SIMPLES:**
    - Identidade completa, link direto para rota no Google Maps e link oficial para o Instagram `@dra.vitoriaisterfany`

11. **STICKY MOBILE BAR (Recurso Mobile-First):**
    - Barra inferior de ação rápida com botão WhatsApp sempre ao alcance do polegar no celular

---

## 📸 Como Adicionar Mais Fotos à Galeria

Todas as fotos e dados estão centralizados em `src/data/expertData.ts`. Para adicionar novos casos clínicos, basta abrir o arquivo e adicionar novos itens ao array `RESULTS_GALLERY`:

```typescript
{
  id: "res-18",
  url: "https://seu-link-da-imagem.jpg",
  title: "Novo Procedimento",
  category: "harmonizacao", // ou "labios" ou "odonto"
  caption: "Descrição do resultado."
}
```

---

## 🚀 Como Fazer Deploy na Vercel (Configurações Corrigidas)

O erro comum de "Build Failed" na Vercel ocorria devido a conflito de dependências pares (`esbuild` / `vite`) durante o `npm install` inicial da Vercel. 

### O que foi corrigido:
1. Adicionado `.npmrc` com `legacy-peer-deps=true` para garantir que o `npm install` passe sem conflitos na Vercel.
2. Atualizado `esbuild` para compatibilidade total com o Vite no `package.json`.
3. Gerado o arquivo oficial `package-lock.json` e removido lockfiles ambíguos.
4. Simplificado o `vercel.json` com regra de rewrite padrão para SPA.

### Passo a passo para o Deploy:

1. **Faça o commit e envie para o GitHub:**
   ```bash
   git add .
   git commit -m "Fix: dependências e configuração Vercel"
   git push origin main
   ```
2. **Na Vercel:**
   - Acesse seu projeto na Vercel e clique em **"Redeploy"** (ou crie um novo projeto importando o repositório).
   - Se estiver criando do zero:
     - **Framework Preset:** `Vite`
     - **Root Directory:** `./`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`
   - Clique em **Deploy**.
3. O build levará menos de 30 segundos e o site estará no ar!
