# Site — Fernanda Zanateli, Nutricionista

Site institucional da nutricionista Fernanda Zanateli (CRN 73044), em Next.js
(App Router) + Tailwind CSS, publicado no Cloud Run.

A copy e a estrutura seguem o documento "Estrutura e copy finais do site"
(Vincla Studio), com os blocos na ordem definida lá: Hero, Quem sou eu,
Minhas especialidades, Meu método, Depoimentos e Contato.

## Onde mexer no conteúdo

`app/siteConfig.ts` concentra o que muda com frequência: link do WhatsApp
comercial, Instagram, nome, CRN, rótulo do CTA e a lista de depoimentos.

Os textos de cada bloco ficam no componente correspondente em
`app/components/`, e a página "Sobre mim" completa em `app/sobre/page.tsx`.

## Identidade visual

Sistema "Terra & Oliva": paleta (creme, terracota, oliva, ocre) em
`tailwind.config.ts`, tipografia (Fraunces + DM Sans) em `app/layout.tsx`.
Trocar a identidade da marca significa mexer nesses dois arquivos.

## Pendências de conteúdo

- Ensaio fotográfico profissional — a foto atual é informal e está com recorte
  fechado e vinheta para disfarçar o ambiente (ver `app/components/Portrait.tsx`)
- Ao menos 3 depoimentos reais — o Bloco 5 fica oculto enquanto `DEPOIMENTOS`
  estiver vazio, para não publicar depoimento inventado
- Logo oficial (hoje há uma marca gráfica provisória em `app/components/Logo.tsx`)
- Ícones/ilustrações das especialidades no estilo da identidade

## Desenvolvimento

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de produção (inclui checagem de tipos)
npm start      # serve o build
```

## Deploy

Push na branch `main` dispara o workflow `.github/workflows/deploy.yml`, que
faz build da imagem Docker, envia para o Artifact Registry e publica no serviço
Cloud Run `fernanda-zanateli`. Também é possível rodar manualmente pelo
`workflow_dispatch` na aba Actions.

Secrets usados: `GCP_PROJECT_ID`, `GCP_REGION`, `GCP_SA_KEY`.
Detalhes de configuração da infra em `DEPLOY.md`.

O site da GeraTech, que antes ocupava este `main`, foi preservado na branch
`geratech` e segue publicado no serviço Cloud Run `geratech`.
