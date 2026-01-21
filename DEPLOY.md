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

**⚠️ IMPORTANTE**: Antes de criar o Workload Identity Pool e Provider, você DEVE habilitar todas estas APIs. O erro "The attribute condition must reference one of the provider's claims" geralmente ocorre quando essas APIs não estão habilitadas.

```bash
PROJECT_ID="sites-web-amigos"

# APIs essenciais para Workload Identity Federation
gcloud services enable iam.googleapis.com \
    --project=${PROJECT_ID}

gcloud services enable iamcredentials.googleapis.com \
    --project=${PROJECT_ID}

gcloud services enable sts.googleapis.com \
    --project=${PROJECT_ID}

gcloud services enable cloudresourcemanager.googleapis.com \
    --project=${PROJECT_ID}

# APIs para Cloud Run e Artifact Registry
gcloud services enable run.googleapis.com \
    --project=${PROJECT_ID}

gcloud services enable artifactregistry.googleapis.com \
    --project=${PROJECT_ID}
```

Ou habilite todas de uma vez:

```bash
PROJECT_ID="sites-web-amigos"

gcloud services enable \
    iam.googleapis.com \
    iamcredentials.googleapis.com \
    sts.googleapis.com \
    cloudresourcemanager.googleapis.com \
    run.googleapis.com \
    artifactregistry.googleapis.com \
    --project=${PROJECT_ID}
```

**Verificar APIs habilitadas:**

```bash
gcloud services list --enabled --project=${PROJECT_ID} \
    --filter="name:iam.googleapis.com OR name:iamcredentials.googleapis.com OR name:sts.googleapis.com OR name:cloudresourcemanager.googleapis.com OR name:run.googleapis.com OR name:artifactregistry.googleapis.com"
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

**⚠️ IMPORTANTE**: Certifique-se de que todas as APIs da seção 2 estão habilitadas antes de prosseguir!

#### Opção A: Usar Script Automatizado (Recomendado)

Execute o script completo que verifica e habilita tudo automaticamente:

```bash
bash setup-wif-completo.sh
```

Este script:
- ✅ Verifica e habilita todas as APIs necessárias
- ✅ Verifica permissões do usuário
- ✅ Cria o Workload Identity Pool
- ✅ Cria o OIDC Provider corretamente
- ✅ Obtém o WIF_PROVIDER
- ✅ Configura permissões da Service Account

#### Opção B: Configuração Manual

Se preferir fazer manualmente:

```bash
# Definir variáveis
PROJECT_ID="sites-web-amigos"
PROJECT_NUMBER=$(gcloud projects describe ${PROJECT_ID} --format="value(projectNumber)")
SA_EMAIL="site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com"
GITHUB_REPO="geraldopapajr/site-web-amigos"  # ⚠️ Ajuste para seu repositório GitHub
GITHUB_ORG="geraldopapajr"

# Criar Workload Identity Pool
gcloud iam workload-identity-pools create github-pool \
    --project=${PROJECT_ID} \
    --location="global" \
    --display-name="GitHub Actions Pool"

# Criar Workload Identity Provider
# Tentar com attribute-condition primeiro (mais seguro)
gcloud iam workload-identity-pools providers create-oidc github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --display-name="GitHub Provider" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner" \
    --attribute-condition="assertion.repository_owner=='${GITHUB_ORG}'" || \
gcloud iam workload-identity-pools providers create-oidc github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --display-name="GitHub Provider" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub"

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
