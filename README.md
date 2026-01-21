# Triarquide

Site de arquitetura moderno e minimalista construído com Next.js (App Router) e Tailwind CSS.

## Tecnologias

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Google Fonts (Inter e Playfair Display)

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## Deploy no Google Cloud Run

1. Construir a imagem Docker:
```bash
docker build -t gcr.io/[PROJECT-ID]/triarquide .
```

2. Fazer push para o Google Container Registry:
```bash
docker push gcr.io/[PROJECT-ID]/triarquide
```

3. Deploy no Cloud Run:
```bash
gcloud run deploy triarquide \
  --image gcr.io/[PROJECT-ID]/triarquide \
  --platform managed \
  --region [REGION] \
  --allow-unauthenticated
```

O projeto está configurado para usar o modo `standalone` do Next.js, otimizado para containers.
