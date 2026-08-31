/**
 * Configuração central do site da Fernanda Zanateli.
 * Textos e links seguem o documento "Estrutura e copy finais do site" (Vincla Studio).
 */

// Todos os botões e links de saída do site apontam para este link (Bloco Global).
export const WHATSAPP_URL = "https://wa.me/message/2UFAFGAF5IOLM1";

export const INSTAGRAM_URL =
  "https://www.instagram.com/nutrifezanateli?igsh=a29kaGhqc2psMzBw";
export const INSTAGRAM_HANDLE = "@nutrifezanateli";

export const NOME = "Fernanda Zanateli";
export const PROFISSAO = "Nutricionista";
export const CRN = "CRN 73044";

// CTA único do site — repetido ao fim de cada bloco, de forma intencional.
export const CTA_LABEL = "Agende sua consulta";

/**
 * ARQUIVOS DE MARCA — ficam em `public/` e são apontados aqui.
 * Para trocar qualquer um, basta substituir o arquivo ou mudar o caminho.
 */
// logo-marca.png = logo.png recortado no desenho e com máscara circular
// (o arquivo original vem com fundo branco quadrado, que aparecia como
// mancha nos fundos escuros). Script: scripts/mascara-logo.py
export const LOGO_SRC: string | null = "/logo-marca.png";
export const FOTO_HERO = "/fernanda-retrato.jpeg";
export const FOTO_RETRATO = "/fernanda-retrato.jpeg";

/**
 * Só ligar se a foto for informal e precisar de recorte fechado + vinheta
 * para disfarçar o ambiente. Com o ensaio profissional, fica desligado.
 */
export const FOTO_PRECISA_TRATAMENTO = false;

/**
 * Bloco 5 — Depoimentos.
 * PENDÊNCIA: coletar/reescrever ao menos 3 depoimentos reais com a Fernanda
 * antes de publicar. Enquanto a lista estiver vazia, a seção não é renderizada
 * (não publicamos depoimentos inventados no site de uma profissional real).
 */
export const DEPOIMENTOS: { texto: string; nome: string; detalhe?: string }[] = [];
