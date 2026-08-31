# Site — Fernanda Zanateli, Nutricionista

Site institucional da nutricionista Fernanda Zanateli (CRN 73044), em Next.js
(App Router) + Tailwind CSS, publicado no Cloud Run.

A copy e a estrutura seguem o documento "Estrutura e copy finais do site"
(Vincla Studio), com os blocos na ordem definida lá: Hero, Quem sou eu,
Minhas especialidades, Meu método, Depoimentos e Contato.

## Onde mexer no conteúdo

`app/siteConfig.ts` concentra o que muda com frequência: link do WhatsApp
comercial, Instagram, nome, CRN, rótulo do CTA e a lista de depoimentos (o
primeiro da lista aparece em destaque; a seção some se a lista ficar vazia).

Os textos de cada bloco ficam no componente correspondente em
`app/components/`, e a página "Sobre mim" completa em `app/sobre/page.tsx`.

## Identidade visual

Sistema "Terra & Oliva": paleta oficial (`#6f4532`, `#593f28`, `#fde790`,
`#a6c499`, `#000000`, `#ffffff`) em `tailwind.config.ts`, tipografia
(Fraunces + DM Sans) em `app/layout.tsx`. Trocar a identidade da marca
significa mexer nesses dois arquivos.

### Arquivos de marca

Ficam em `public/` e são apontados por `app/siteConfig.ts`:

| arquivo | uso |
| --- | --- |
| `logo.png` | logo oficial entregue pela cliente (fonte, não usado direto) |
| `logo-marca.png` | logo usado no site — recortado e com máscara circular |
| `fernanda-retrato.jpeg` | foto do hero e do bloco "Quem sou eu" |
| `favicon.ico`, `icon-*.png`, `apple-touch-icon.png` | ícone da aba e do atalho |

Os derivados são gerados a partir do `logo.png`, que vem com fundo branco
chapado (viraria mancha quadrada nos fundos escuros) e com aneis finos mais o
texto "CRN 3 73044", ilegíveis em 16-32 px:

```bash
python3 scripts/mascara-logo.py   # logo-marca.png (máscara circular)
python3 scripts/gera-favicon.py   # ícones, recortados só no monograma F.Z
```

Se algum dia chegar o logo em SVG ou PNG com transparência real, basta
substituir os arquivos e apontar `LOGO_SRC`.

## Pendências de conteúdo

- Uma segunda foto, mais aberta, para o hero (hoje hero e retrato usam a mesma)
- Ícones/ilustrações das especialidades no estilo da identidade
- Imagem de Open Graph (compartilhamento em WhatsApp e redes)
- Definir se o site escreve "CRN 73044" (copy aprovada) ou "CRN-3 73044" (logo)

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
