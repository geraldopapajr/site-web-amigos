#!/bin/bash

# Script para validar configuração de secrets do GitHub Actions
# Execute: bash validate-secrets.sh

echo "🔍 Validando configuração para deploy no Cloud Run..."
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar se gcloud está instalado
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ gcloud CLI não está instalado${NC}"
    exit 1
fi

echo -e "${GREEN}✅ gcloud CLI encontrado${NC}"

# Verificar projeto GCP
PROJECT_ID="sites-web-amigos"
echo ""
echo "📋 Verificando projeto GCP: ${PROJECT_ID}"

if gcloud projects describe ${PROJECT_ID} &> /dev/null; then
    echo -e "${GREEN}✅ Projeto GCP existe${NC}"
    PROJECT_NUMBER=$(gcloud projects describe ${PROJECT_ID} --format="value(projectNumber)")
    echo "   Project Number: ${PROJECT_NUMBER}"
else
    echo -e "${RED}❌ Projeto GCP não encontrado${NC}"
    exit 1
fi

# Verificar Service Account
SA_EMAIL="site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com"
echo ""
echo "📋 Verificando Service Account: ${SA_EMAIL}"

if gcloud iam service-accounts describe ${SA_EMAIL} --project=${PROJECT_ID} &> /dev/null; then
    echo -e "${GREEN}✅ Service Account existe${NC}"
else
    echo -e "${RED}❌ Service Account não encontrada${NC}"
    exit 1
fi

# Verificar Workload Identity Pool
echo ""
echo "📋 Verificando Workload Identity Pool..."

if gcloud iam workload-identity-pools describe github-pool \
    --project=${PROJECT_ID} \
    --location="global" &> /dev/null; then
    echo -e "${GREEN}✅ Workload Identity Pool 'github-pool' existe${NC}"
else
    echo -e "${RED}❌ Workload Identity Pool 'github-pool' não encontrado${NC}"
    echo "   Execute: bash setup-wif.sh"
    exit 1
fi

# Verificar Workload Identity Provider
echo ""
echo "📋 Verificando Workload Identity Provider..."

WIF_PROVIDER=$(gcloud iam workload-identity-pools providers describe github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --format="value(name)" 2>/dev/null)

if [ -n "$WIF_PROVIDER" ]; then
    echo -e "${GREEN}✅ Workload Identity Provider encontrado${NC}"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${YELLOW}📝 WIF_PROVIDER (copie este valor para o secret no GitHub):${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "${WIF_PROVIDER}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo -e "${RED}❌ Workload Identity Provider não encontrado${NC}"
    echo "   Execute: bash setup-wif.sh"
    exit 1
fi

# Verificar Artifact Registry
echo ""
echo "📋 Verificando Artifact Registry..."

REGION="southamerica-east1"  # Ajuste se necessário
REPO_NAME="triarquide-repo"

if gcloud artifacts repositories describe ${REPO_NAME} \
    --project=${PROJECT_ID} \
    --location=${REGION} &> /dev/null; then
    echo -e "${GREEN}✅ Repositório Artifact Registry '${REPO_NAME}' existe${NC}"
else
    echo -e "${YELLOW}⚠️  Repositório Artifact Registry '${REPO_NAME}' não encontrado${NC}"
    echo "   Execute: gcloud artifacts repositories create ${REPO_NAME} \\"
    echo "     --repository-format=docker \\"
    echo "     --location=${REGION} \\"
    echo "     --project=${PROJECT_ID}"
fi

# Verificar APIs habilitadas
echo ""
echo "📋 Verificando APIs necessárias..."

# APIs essenciais para Workload Identity Federation e Cloud Run
APIS=(
    "iam.googleapis.com"
    "iamcredentials.googleapis.com"
    "sts.googleapis.com"
    "cloudresourcemanager.googleapis.com"
    "run.googleapis.com"
    "artifactregistry.googleapis.com"
)
ALL_APIS_OK=true

for API in "${APIS[@]}"; do
    if gcloud services list --enabled --project=${PROJECT_ID} --filter="name:${API}" --format="value(name)" | grep -q "${API}"; then
        echo -e "${GREEN}✅ ${API} está habilitada${NC}"
    else
        echo -e "${RED}❌ ${API} não está habilitada${NC}"
        ALL_APIS_OK=false
    fi
done

if [ "$ALL_APIS_OK" = false ]; then
    echo ""
    echo -e "${YELLOW}⚠️  Algumas APIs não estão habilitadas${NC}"
    echo "   Execute: bash setup-wif-completo.sh"
    echo "   Ou habilite manualmente:"
    echo "   gcloud services enable \\"
    echo "     iam.googleapis.com \\"
    echo "     iamcredentials.googleapis.com \\"
    echo "     sts.googleapis.com \\"
    echo "     cloudresourcemanager.googleapis.com \\"
    echo "     run.googleapis.com \\"
    echo "     artifactregistry.googleapis.com \\"
    echo "     --project=${PROJECT_ID}"
fi

# Resumo dos secrets necessários
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${YELLOW}📝 Secrets necessários no GitHub:${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. GCP_PROJECT_ID"
echo "   Valor: ${PROJECT_ID}"
echo ""
echo "2. GCP_REGION"
echo "   Valor: ${REGION}"
echo ""
echo "3. WIF_PROVIDER"
echo "   Valor: ${WIF_PROVIDER}"
echo ""
echo "4. WIF_SERVICE_ACCOUNT"
echo "   Valor: ${SA_EMAIL}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}✅ Validação concluída!${NC}"
echo ""
echo "📝 Próximos passos:"
echo "   1. Acesse: https://github.com/geraldopapajr/site-web-amigos/settings/secrets/actions"
echo "   2. Verifique se todos os 4 secrets acima estão configurados"
echo "   3. Se algum estiver faltando ou incorreto, adicione/atualize"
echo "   4. Certifique-se de que os valores estão corretos (sem espaços extras)"
echo ""
