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
 * ARQUIVOS DE MARCA — é só jogar o arquivo em `public/` e apontar aqui.
 *
 *   Logo:            public/logo.svg   (ou .png com fundo transparente)
 *   Foto do hero:    public/fernanda-hero.jpg      — vertical 4:5, >= 1200x1500
 *   Foto do retrato: public/fernanda-retrato.jpg   — quadrada, plano fechado
 *
 * Enquanto LOGO_SRC for null, o site usa a marca gráfica provisória.
 * As fotos abaixo apontam para a foto antiga até as novas chegarem.
 */
export const LOGO_SRC: string | null = null;
export const FOTO_HERO = "/fernanda-zanatelli.jpeg";
export const FOTO_RETRATO = "/fernanda-zanatelli.jpeg";

// Quando a foto for o ensaio profissional, deixe como false para desligar
// a vinheta que hoje disfarça o fundo do ambiente da selfie.
export const FOTO_PRECISA_TRATAMENTO = true;

/**
 * Bloco 5 — Depoimentos.
 * PENDÊNCIA: coletar/reescrever ao menos 3 depoimentos reais com a Fernanda
 * antes de publicar. Enquanto a lista estiver vazia, a seção não é renderizada
 * (não publicamos depoimentos inventados no site de uma profissional real).
 */
export const DEPOIMENTOS: { texto: string; nome: string; detalhe?: string }[] = [];
