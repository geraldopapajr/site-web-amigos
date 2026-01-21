# Guia de Deploy no Google Cloud Run

Este guia explica como configurar o deploy automático do projeto no Google Cloud Run usando GitHub Actions.

## Pré-requisitos

1. Conta no Google Cloud Platform (GCP)
2. Projeto criado no GCP
3. Repositório no GitHub

## Etapas de Configuração

### 1. Criar Projeto no GCP (se ainda não tiver)

```bash
# Instalar Google Cloud SDK (se ainda não tiver)
# https://cloud.google.com/sdk/docs/install

# Fazer login
gcloud auth login

# Criar projeto (substitua TRIARQUIDE_PROJECT_ID por um ID único)
gcloud projects create TRIARQUIDE_PROJECT_ID --name="Triarquide"

# Definir como projeto padrão
gcloud config set project TRIARQUIDE_PROJECT_ID
```

### 2. Habilitar APIs Necessárias

```bash
# Habilitar Cloud Run API
gcloud services enable run.googleapis.com

# Habilitar Container Registry API (para armazenar imagens Docker)
gcloud services enable containerregistry.googleapis.com

# Ou usar Artifact Registry (recomendado, mais moderno)
gcloud services enable artifactregistry.googleapis.com
```

### 3. Criar Service Account

```bash
# Criar service account
gcloud iam service-accounts create github-actions \
    --display-name="GitHub Actions Service Account"

# Obter email da service account
SA_EMAIL=$(gcloud iam service-accounts list \
    --filter="displayName:GitHub Actions Service Account" \
    --format="value(email)")

# Conceder permissões necessárias
gcloud projects add-iam-policy-binding TRIARQUIDE_PROJECT_ID \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/run.admin"

gcloud projects add-iam-policy-binding TRIARQUIDE_PROJECT_ID \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/storage.admin"

gcloud projects add-iam-policy-binding TRIARQUIDE_PROJECT_ID \
    --role="roles/iam.serviceAccountUser" \
    --member="serviceAccount:${SA_EMAIL}"

# Criar e baixar chave JSON
gcloud iam service-accounts keys create github-actions-key.json \
    --iam-account=${SA_EMAIL}
```

### 4. Configurar Secrets no GitHub

1. Acesse seu repositório no GitHub
2. Vá em **Settings** > **Secrets and variables** > **Actions**
3. Clique em **New repository secret** e adicione:

   - **GCP_PROJECT_ID**: ID do seu projeto GCP (ex: `triarquide-123456`)
   - **GCP_SA_KEY**: Conteúdo completo do arquivo `github-actions-key.json` criado no passo anterior
   - **GCP_REGION**: Região onde o Cloud Run será deployado (ex: `us-central1`, `southamerica-east1`)

### 5. Configurar Variáveis (Opcional)

Se quiser usar Artifact Registry ao invés de Container Registry, você pode:

1. Criar um repositório no Artifact Registry:
```bash
gcloud artifacts repositories create triarquide-repo \
    --repository-format=docker \
    --location=us-central1 \
    --description="Docker repository for Triarquide"
```

2. Atualizar o workflow para usar Artifact Registry:
   - Alterar `IMAGE_NAME` de `gcr.io` para `us-central1-docker.pkg.dev`
   - Atualizar permissões da service account para incluir `roles/artifactregistry.writer`

### 6. Fazer Deploy

O deploy acontecerá automaticamente quando você fizer push para a branch `main`, ou você pode acionar manualmente em **Actions** > **Deploy to Cloud Run** > **Run workflow**.

## Verificação

Após o deploy, você pode verificar:

```bash
# Listar serviços Cloud Run
gcloud run services list

# Ver detalhes do serviço
gcloud run services describe triarquide --region=us-central1

# Ver logs
gcloud run services logs read triarquide --region=us-central1
```

## Custos

O Cloud Run tem um tier gratuito generoso:
- 2 milhões de requisições por mês
- 360.000 GB-segundos de memória
- 180.000 vCPU-segundos

Para este projeto, é muito provável que fique dentro do tier gratuito.

## Troubleshooting

### Erro: "Permission denied"
- Verifique se todas as permissões foram concedidas à service account
- Verifique se a chave JSON está correta no GitHub secret

### Erro: "API not enabled"
- Execute: `gcloud services enable run.googleapis.com containerregistry.googleapis.com`

### Erro: "Image not found"
- Verifique se o build da imagem Docker está funcionando localmente
- Verifique se o Dockerfile está correto

### Build falha no GitHub Actions
- Verifique os logs completos na aba Actions do GitHub
- Teste o build localmente: `docker build -t test .`
