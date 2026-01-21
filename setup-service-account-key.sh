#!/bin/bash

# Script para criar e obter Service Account Key para GitHub Actions
# Execute: bash setup-service-account-key.sh

PROJECT_ID="sites-web-amigos"
SA_EMAIL="site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com"
KEY_FILE="github-actions-key.json"

echo "🔧 Configurando Service Account Key para GitHub Actions..."
echo "📋 Projeto: ${PROJECT_ID}"
echo "📋 Service Account: ${SA_EMAIL}"
echo ""

# Verificar se a service account existe
if ! gcloud iam service-accounts describe ${SA_EMAIL} --project=${PROJECT_ID} &>/dev/null; then
    echo "❌ Erro: Service Account não encontrada!"
    echo "   Execute primeiro: gcloud iam service-accounts create site-web-amigos-sa \\"
    echo "     --display-name='GitHub Actions Service Account' \\"
    echo "     --project=${PROJECT_ID}"
    exit 1
fi

echo "✅ Service Account encontrada"
echo ""

# Criar chave JSON
echo "Criando chave JSON..."
gcloud iam service-accounts keys create ${KEY_FILE} \
    --iam-account=${SA_EMAIL} \
    --project=${PROJECT_ID}

if [ $? -eq 0 ]; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ Chave criada com sucesso: ${KEY_FILE}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "📝 Próximos passos:"
    echo ""
    echo "1. Copie o CONTEÚDO COMPLETO do arquivo ${KEY_FILE}"
    echo "   Execute: cat ${KEY_FILE}"
    echo ""
    echo "2. No GitHub, vá para:"
    echo "   https://github.com/geraldopapajr/site-web-amigos/settings/secrets/actions"
    echo ""
    echo "3. Adicione/atualize o secret:"
    echo "   - Nome: GCP_SA_KEY"
    echo "   - Valor: Cole o conteúdo completo do arquivo JSON (todo o conteúdo)"
    echo ""
    echo "4. Certifique-se de que também tem estes secrets configurados:"
    echo "   - GCP_PROJECT_ID: ${PROJECT_ID}"
    echo "   - GCP_REGION: southamerica-east1 (ou sua região)"
    echo ""
    echo "⚠️  IMPORTANTE:"
    echo "   - O arquivo ${KEY_FILE} está no .gitignore e NÃO será commitado"
    echo "   - Nunca compartilhe ou commite este arquivo"
    echo "   - Mantenha o arquivo seguro localmente"
    echo ""
else
    echo "❌ Erro ao criar chave"
    exit 1
fi
