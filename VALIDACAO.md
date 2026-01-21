# Guia de Validação - Secrets do GitHub Actions

Este guia ajuda a validar se todos os secrets estão configurados corretamente no GitHub.

## 🔍 Validação Local (Execute no seu terminal)

Execute o script de validação:

```bash
bash validate-secrets.sh
```

Este script irá:
- ✅ Verificar se o projeto GCP existe
- ✅ Verificar se a Service Account existe
- ✅ Verificar se o Workload Identity Pool e Provider estão configurados
- ✅ Mostrar os valores que devem ser configurados no GitHub

## 📝 Secrets Necessários no GitHub

Você precisa configurar **4 secrets** no GitHub:

### 1. Acesse a página de Secrets

1. Vá para: `https://github.com/geraldopapajr/site-web-amigos/settings/secrets/actions`
2. Ou navegue: **Settings** → **Secrets and variables** → **Actions**

### 2. Configure os seguintes secrets:

#### ✅ GCP_PROJECT_ID
- **Nome do secret**: `GCP_PROJECT_ID`
- **Valor**: `sites-web-amigos`
- **Como verificar**: Execute `bash validate-secrets.sh` e veja o valor exibido

#### ✅ GCP_REGION
- **Nome do secret**: `GCP_REGION`
- **Valor**: `southamerica-east1` (ou a região que você escolheu)
- **Regiões comuns**:
  - `southamerica-east1` (São Paulo)
  - `us-central1` (Iowa)
  - `us-east1` (Carolina do Sul)

#### ✅ WIF_PROVIDER
- **Nome do secret**: `WIF_PROVIDER`
- **Valor**: O valor completo retornado pelo comando (algo como `projects/99805140512/locations/global/workloadIdentityPools/github-pool/providers/github-provider`)
- **Como obter**: Execute `bash setup-wif.sh` ou `bash validate-secrets.sh` e copie o valor exibido
- **⚠️ IMPORTANTE**: Copie o valor COMPLETO, sem espaços extras no início ou fim

#### ✅ WIF_SERVICE_ACCOUNT
- **Nome do secret**: `WIF_SERVICE_ACCOUNT`
- **Valor**: `site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com`
- **Como verificar**: Execute `bash validate-secrets.sh` e veja o valor exibido

## 🔧 Como Obter o WIF_PROVIDER

Se você ainda não tem o `WIF_PROVIDER`, execute:

```bash
bash setup-wif.sh
```

Ou manualmente:

```bash
PROJECT_ID="sites-web-amigos"

WIF_PROVIDER=$(gcloud iam workload-identity-pools providers describe github-provider \
    --project=${PROJECT_ID} \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --format="value(name)")

echo "WIF_PROVIDER: ${WIF_PROVIDER}"
```

## ✅ Checklist de Validação

Antes de fazer deploy, verifique:

- [ ] Executei `bash validate-secrets.sh` localmente
- [ ] Todos os 4 secrets estão configurados no GitHub
- [ ] O valor de `WIF_PROVIDER` está completo (começa com `projects/`)
- [ ] Não há espaços extras nos valores dos secrets
- [ ] O repositório GitHub no binding do IAM está correto (`geraldopapajr/site-web-amigos`)

## 🐛 Troubleshooting

### Erro: "workload_identity_provider or credentials_json must be specified"

**Causa**: O secret `WIF_PROVIDER` não está configurado ou está vazio.

**Solução**:
1. Verifique se o secret existe: GitHub → Settings → Secrets → Actions
2. Verifique se o nome está correto: `WIF_PROVIDER` (exatamente assim, sem espaços)
3. Verifique se o valor não está vazio
4. Execute `bash validate-secrets.sh` para obter o valor correto
5. Atualize o secret com o valor completo

### Erro: "Service account not found"

**Causa**: O secret `WIF_SERVICE_ACCOUNT` está incorreto.

**Solução**:
1. Verifique o valor: deve ser `site-web-amigos-sa@sites-web-amigos.iam.gserviceaccount.com`
2. Execute `bash validate-secrets.sh` para confirmar o valor correto

### Erro: "Project not found"

**Causa**: O secret `GCP_PROJECT_ID` está incorreto.

**Solução**:
1. Verifique o valor: deve ser `sites-web-amigos`
2. Execute `gcloud projects list` para ver seus projetos

### Erro: "Region not found"

**Causa**: O secret `GCP_REGION` está incorreto ou a região não existe.

**Solução**:
1. Verifique se a região existe: `gcloud run regions list`
2. Use uma região válida, por exemplo: `southamerica-east1`

## 📞 Testando o Workflow

Após configurar todos os secrets:

1. Faça um pequeno commit e push para a branch `main`
2. Ou acione manualmente: GitHub → Actions → Deploy to Cloud Run → Run workflow
3. Verifique os logs do workflow para ver se há erros

## 🔒 Segurança

- ✅ Nunca commite secrets no código
- ✅ Use sempre GitHub Secrets para valores sensíveis
- ✅ O arquivo `sites-web-amigos-sa.json` está no `.gitignore` (não será commitado)
- ✅ Workload Identity Federation é mais seguro que chaves JSON
