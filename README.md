# GeraTech

Site institucional / landing de prospecção da **GeraTech** — _Gerando tecnologia para seu negócio_.
Engenharia e ciência de dados para e-commerce (precificação, estoque/supply e promoções).

Construído com Next.js (App Router), TypeScript e Tailwind CSS.

## Tecnologias

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Google Fonts: Space Grotesk (display), Inter (corpo), JetBrains Mono (dados)

## Desenvolvimento

```bash
npm install     # instalar dependências
npm run dev     # ambiente de desenvolvimento (http://localhost:3000)
npm run build   # build de produção
npm start       # servir o build
```

## Configuração de conteúdo

Todos os dados que precisam ser preenchidos ficam em **`app/siteConfig.ts`**:

- `WHATSAPP_NUMBER` — número no formato `55DDDNNNNNNNNN`
- `CONTACT_EMAIL` — e-mail de contato
- `CASE_METRICS` — métricas reais do case do Mercado Livre (remova `ilustrativo` ao usar números reais)
- `FOUNDER_NAME` / `FOUNDER_BIO` — nome e bio da seção Sobre

## Estrutura

Landing única (scroll) em `app/page.tsx` com as seções:
Hero → Problema → Como funciona → O que faço → Case → Para quem → Sobre → Contato.
Sub-páginas (`/sobre`, `/servicos`, `/contato`) são stubs de SEO que apontam para as âncoras da home.

## Deploy no Google Cloud Run

Projeto configurado com `output: 'standalone'` (Docker-ready). Ver `DEPLOY.md`.
