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

### 3. Criar Service Account e Configurar Permissões

```bash
# Se a service account já existe, pule para as permissões
# Caso contrário, criar service account:
# gcloud iam service-accounts create site-web-amigos-sa \
#     --display-name="GitHub Actions Service Account"

# Definir variável com o email da service account
SA_EMAIL="site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com"
PROJECT_ID="sites-web-amigos"

# Conceder permissões necessárias
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/run.admin"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/storage.admin"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/artifactregistry.writer"
```

### 4. Configurar Workload Identity Federation (Recomendado - Mais Seguro)

Workload Identity Federation permite autenticação sem chaves JSON, usando tokens OIDC.

```bash
# Definir variáveis
PROJECT_ID="sites-web-amigos"
PROJECT_NUMBER=$(gcloud projects describe ${PROJECT_ID} --format="value(projectNumber)")
SA_EMAIL="site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com"
GITHUB_REPO="geraldopapajr/triarquide"  # ⚠️ Ajuste para seu repositório GitHub (usuario/repositorio)

# Criar Workload Identity Pool (se já existe, vai dar erro mas não tem problema)
gcloud iam workload-identity-pools create github-pool \
    --project=${PROJECT_ID} \
    --location="global" \
    --display-name="GitHub Actions Pool" 2>/dev/null || echo "Pool já existe, continuando..."

# Tentar deletar provider se existir (para recriar)
gcloud iam workload-identity-pools providers delete github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" 2>/dev/null || echo "Provider não existe, criando novo..."

# Criar Workload Identity Provider com sintaxe correta
gcloud iam workload-identity-pools providers create-oidc github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --display-name="GitHub Provider" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner"

# Obter o nome completo do provider
WIF_PROVIDER=$(gcloud iam workload-identity-pools providers describe github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --format="value(name)")

echo "✅ WIF_PROVIDER: ${WIF_PROVIDER}"
echo ""
echo "⚠️  IMPORTANTE: Copie o valor acima e adicione como secret WIF_PROVIDER no GitHub"

# Permitir que o repositório GitHub específico use a service account
gcloud iam service-accounts add-iam-policy-binding ${SA_EMAIL} \
    --project=${PROJECT_ID} \
    --role="roles/iam.workloadIdentityUser" \
    --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/github-pool/attribute.repository/${GITHUB_REPO}"

echo ""
echo "✅ Configuração concluída!"
echo "📝 Próximo passo: Configure os secrets no GitHub (veja seção 5)"
```

### 5. Configurar Secrets no GitHub

1. Acesse seu repositório no GitHub
2. Vá em **Settings** > **Secrets and variables** > **Actions**
3. Clique em **New repository secret** e adicione:

   - **GCP_PROJECT_ID**: ID do seu projeto GCP (ex: `sites-web-amigos`)
   - **GCP_REGION**: Região onde o Cloud Run será deployado (ex: `southamerica-east1`)
   - **WIF_PROVIDER**: O valor completo do provider (obtido no passo anterior, algo como `projects/123456789/locations/global/workloadIdentityPools/github-pool/providers/github-provider`)
   - **WIF_SERVICE_ACCOUNT**: Email completo da service account (ex: `site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com`)

### 6. Criar Repositório no Artifact Registry

```bash
PROJECT_ID="sites-web-amigos"
REGION="southamerica-east1"  # Ajuste conforme sua região

gcloud artifacts repositories create triarquide-repo \
    --repository-format=docker \
    --location=${REGION} \
    --description="Docker repository for Triarquide" \
    --project=${PROJECT_ID}
```

### 7. Fazer Deploy

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
- Verifique se o Workload Identity Provider está configurado corretamente
- Verifique se os secrets `WIF_PROVIDER` e `WIF_SERVICE_ACCOUNT` estão corretos no GitHub
- Verifique se o repositório GitHub no binding do IAM está correto (formato: `usuario/repositorio`)

### Erro: "API not enabled"
- Execute: `gcloud services enable run.googleapis.com containerregistry.googleapis.com`

### Erro: "Image not found"
- Verifique se o build da imagem Docker está funcionando localmente
- Verifique se o Dockerfile está correto

### Build falha no GitHub Actions
- Verifique os logs completos na aba Actions do GitHub
- Teste o build localmente: `docker build -t test .`
