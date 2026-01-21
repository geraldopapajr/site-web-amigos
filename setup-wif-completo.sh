#!/bin/bash

# Script completo para configurar Workload Identity Federation para GitHub Actions
# Este script verifica e habilita todas as APIs necessárias antes de criar o provider
# Execute: bash setup-wif-completo.sh

set -e

PROJECT_ID="sites-web-amigos"
PROJECT_NUMBER=$(gcloud projects describe ${PROJECT_ID} --format="value(projectNumber)")
SA_EMAIL="site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com"
GITHUB_REPO="geraldopapajr/site-web-amigos"  # ⚠️ Ajuste se necessário
GITHUB_ORG="geraldopapajr"

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔧 Configurando Workload Identity Federation..."
echo "📋 Projeto: ${PROJECT_ID}"
echo "📋 Project Number: ${PROJECT_NUMBER}"
echo "📋 Repositório GitHub: ${GITHUB_REPO}"
echo ""

# ============================================================================
# ETAPA 1: Verificar e Habilitar APIs Necessárias
# ============================================================================
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1️⃣ Verificando e Habilitando APIs Necessárias..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

REQUIRED_APIS=(
    "iam.googleapis.com"
    "iamcredentials.googleapis.com"
    "sts.googleapis.com"
    "cloudresourcemanager.googleapis.com"
    "run.googleapis.com"
    "artifactregistry.googleapis.com"
)

APIS_TO_ENABLE=()

for API in "${REQUIRED_APIS[@]}"; do
    if gcloud services list --enabled --project=${PROJECT_ID} --filter="name:${API}" --format="value(name)" | grep -q "${API}"; then
        echo -e "${GREEN}✅ ${API} já está habilitada${NC}"
    else
        echo -e "${YELLOW}⚠️  ${API} não está habilitada - será habilitada${NC}"
        APIS_TO_ENABLE+=("${API}")
    fi
done

if [ ${#APIS_TO_ENABLE[@]} -gt 0 ]; then
    echo ""
    echo "Habilitando APIs que faltam..."
    gcloud services enable "${APIS_TO_ENABLE[@]}" --project=${PROJECT_ID}
    echo -e "${GREEN}✅ APIs habilitadas com sucesso${NC}"
else
    echo -e "${GREEN}✅ Todas as APIs necessárias já estão habilitadas${NC}"
fi

echo ""

# ============================================================================
# ETAPA 2: Verificar Permissões do Usuário
# ============================================================================
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2️⃣ Verificando Permissões do Usuário..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

CURRENT_USER=$(gcloud config get-value account)
echo "Usuário atual: ${CURRENT_USER}"

REQUIRED_ROLES=(
    "roles/iam.workloadIdentityPoolAdmin"
    "roles/iam.serviceAccountAdmin"
    "roles/serviceusage.serviceUsageAdmin"
)

echo ""
echo "Verificando roles..."
for ROLE in "${REQUIRED_ROLES[@]}"; do
    if gcloud projects get-iam-policy ${PROJECT_ID} \
        --flatten="bindings[].members" \
        --filter="bindings.members:${CURRENT_USER} AND bindings.role:${ROLE}" \
        --format="value(bindings.role)" | grep -q "${ROLE}"; then
        echo -e "${GREEN}✅ ${ROLE}${NC}"
    else
        echo -e "${YELLOW}⚠️  ${ROLE} não encontrada (pode ser necessário para algumas operações)${NC}"
    fi
done

echo ""

# ============================================================================
# ETAPA 3: Criar Workload Identity Pool
# ============================================================================
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3️⃣ Criando Workload Identity Pool..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if gcloud iam workload-identity-pools describe github-pool \
    --project=${PROJECT_ID} \
    --location="global" &>/dev/null; then
    echo -e "${GREEN}✅ Pool 'github-pool' já existe${NC}"
else
    echo "Criando pool..."
    gcloud iam workload-identity-pools create github-pool \
        --project=${PROJECT_ID} \
        --location="global" \
        --display-name="GitHub Actions Pool"
    echo -e "${GREEN}✅ Pool criado com sucesso${NC}"
fi

echo ""

# ============================================================================
# ETAPA 4: Criar OIDC Provider
# ============================================================================
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "4️⃣ Criando Workload Identity Provider..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Verificar se o provider já existe
if gcloud iam workload-identity-pools providers describe github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" &>/dev/null; then
    echo -e "${YELLOW}⚠️  Provider 'github-provider' já existe${NC}"
    echo "Removendo provider existente para recriar..."
    gcloud iam workload-identity-pools providers delete github-provider \
        --project=${PROJECT_ID} \
        --location="global" \
        --workload-identity-pool="github-pool" \
        --quiet
    echo "Aguardando propagação..."
    sleep 3
fi

# Tentar criar com attribute-condition primeiro (mais seguro)
echo "Tentando criar provider com attribute-condition..."
if gcloud iam workload-identity-pools providers create-oidc github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --display-name="GitHub Provider" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner" \
    --attribute-condition="assertion.repository_owner=='${GITHUB_ORG}'" 2>&1; then
    echo -e "${GREEN}✅ Provider criado com attribute-condition${NC}"
else
    echo -e "${YELLOW}⚠️  Falha ao criar com condition, tentando sem condition...${NC}"
    # Tentar sem attribute-condition
    gcloud iam workload-identity-pools providers create-oidc github-provider \
        --project=${PROJECT_ID} \
        --location="global" \
        --workload-identity-pool="github-pool" \
        --display-name="GitHub Provider" \
        --issuer-uri="https://token.actions.githubusercontent.com" \
        --attribute-mapping="google.subject=assertion.sub"
    echo -e "${GREEN}✅ Provider criado sem attribute-condition${NC}"
fi

echo ""

# ============================================================================
# ETAPA 5: Obter WIF_PROVIDER
# ============================================================================
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "5️⃣ Obtendo WIF_PROVIDER..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

WIF_PROVIDER=$(gcloud iam workload-identity-pools providers describe github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --format="value(name)")

if [ -z "$WIF_PROVIDER" ]; then
    echo -e "${RED}❌ Erro: Não foi possível obter o WIF_PROVIDER${NC}"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✅ WIF_PROVIDER (COPIE ESTE VALOR COMPLETO):${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "${WIF_PROVIDER}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ============================================================================
# ETAPA 6: Configurar Permissões da Service Account
# ============================================================================
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "6️⃣ Configurando Permissões da Service Account..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

MEMBER="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/github-pool/attribute.repository/${GITHUB_REPO}"

echo "Adicionando binding para: ${MEMBER}"

gcloud iam service-accounts add-iam-policy-binding ${SA_EMAIL} \
    --project=${PROJECT_ID} \
    --role="roles/iam.workloadIdentityUser" \
    --member="${MEMBER}"

echo -e "${GREEN}✅ Permissões configuradas${NC}"
echo ""

# ============================================================================
# RESUMO FINAL
# ============================================================================
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✅ Configuração concluída com sucesso!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 Próximos passos:"
echo ""
echo "1. Copie o valor de WIF_PROVIDER acima"
echo ""
echo "2. Configure os secrets no GitHub:"
echo "   Acesse: https://github.com/${GITHUB_REPO}/settings/secrets/actions"
echo ""
echo "   Adicione/atualize os seguintes secrets:"
echo "   - GCP_PROJECT_ID: ${PROJECT_ID}"
echo "   - GCP_REGION: southamerica-east1 (ou sua região)"
echo "   - WIF_PROVIDER: ${WIF_PROVIDER}"
echo "   - WIF_SERVICE_ACCOUNT: ${SA_EMAIL}"
echo ""
echo "3. Faça push para a branch main ou acione o workflow manualmente"
echo ""
