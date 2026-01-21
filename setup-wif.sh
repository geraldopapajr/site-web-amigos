#!/bin/bash

# Script para configurar Workload Identity Federation para GitHub Actions
# Execute: bash setup-wif.sh

set -e

PROJECT_ID="sites-web-amigos"
PROJECT_NUMBER=$(gcloud projects describe ${PROJECT_ID} --format="value(projectNumber)")
SA_EMAIL="site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com"
GITHUB_REPO="geraldopapajr/site-web-amigos"  # ⚠️ Ajuste se necessário

echo "🔧 Configurando Workload Identity Federation..."
echo "📋 Projeto: ${PROJECT_ID}"
echo "📋 Repositório GitHub: ${GITHUB_REPO}"
echo ""

# Criar Workload Identity Pool (se já existe, ignora o erro)
echo "1️⃣ Criando Workload Identity Pool..."
gcloud iam workload-identity-pools create github-pool \
    --project=${PROJECT_ID} \
    --location="global" \
    --display-name="GitHub Actions Pool" 2>/dev/null || echo "   ℹ️  Pool já existe, continuando..."

# Tentar deletar provider se existir (para recriar corretamente)
echo "2️⃣ Verificando provider existente..."
gcloud iam workload-identity-pools providers delete github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" 2>/dev/null && echo "   ℹ️  Provider antigo removido" || echo "   ℹ️  Nenhum provider existente encontrado"

# Criar Workload Identity Provider com sintaxe correta
echo "3️⃣ Criando Workload Identity Provider..."
gcloud iam workload-identity-pools providers create-oidc github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --display-name="GitHub Provider" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner"

# Obter o nome completo do provider
echo "4️⃣ Obtendo informações do provider..."
WIF_PROVIDER=$(gcloud iam workload-identity-pools providers describe github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --format="value(name)")

echo ""
echo "✅ =========================================="
echo "✅ WIF_PROVIDER (copie este valor):"
echo "✅ =========================================="
echo "${WIF_PROVIDER}"
echo "✅ =========================================="
echo ""

# Permitir que o repositório GitHub específico use a service account
echo "5️⃣ Configurando permissões da Service Account..."
gcloud iam service-accounts add-iam-policy-binding ${SA_EMAIL} \
    --project=${PROJECT_ID} \
    --role="roles/iam.workloadIdentityUser" \
    --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/github-pool/attribute.repository/${GITHUB_REPO}"

echo ""
echo "✅ =========================================="
echo "✅ Configuração concluída com sucesso!"
echo "✅ =========================================="
echo ""
echo "📝 Próximos passos:"
echo "   1. Copie o valor de WIF_PROVIDER acima"
echo "   2. Vá para GitHub > Settings > Secrets and variables > Actions"
echo "   3. Adicione/atualize os seguintes secrets:"
echo "      - GCP_PROJECT_ID: ${PROJECT_ID}"
echo "      - GCP_REGION: southamerica-east1 (ou sua região)"
echo "      - WIF_PROVIDER: ${WIF_PROVIDER}"
echo "      - WIF_SERVICE_ACCOUNT: ${SA_EMAIL}"
echo ""
