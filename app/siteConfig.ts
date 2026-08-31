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
 * Depoimentos reais, enviados pela Fernanda, publicados na íntegra e sem
 * reescrita — só o sobrenome foi abreviado. A seção não é renderizada
 * enquanto esta lista estiver vazia.
 * Use uma linha em branco para separar parágrafos dentro de um depoimento.
 * O PRIMEIRO da lista aparece em destaque, ocupando a largura toda.
 */
export const DEPOIMENTOS: { texto: string; nome: string; detalhe?: string }[] = [
  {
    texto:
      "Minha experiência com a nutricionista Fernanda Zanateli, foi excelente! Desde o início, ela se preocupou em entender o meu dia a dia, a minha rotina e as minhas necessidades, adaptando tudo de forma personalizada e realista para que eu conseguisse alcançar o resultado que buscava.\n\nE, para mim, o mais importante foi o acompanhamento durante todo o processo. Sempre que surgia alguma dúvida ou dificuldade, ela estava pronta para me orientar, ajudar e, principalmente, me motivar a continuar.\n\nFoi um acompanhamento acolhedor, próximo e muito personalizado. Me senti realmente cuidada e incentivada em cada etapa. Sou muito grata por todo o apoio e por tornar esse processo mais leve e possível!",
    nome: "Samira A.",
  },
  {
    texto:
      "Fernanda é uma nutricionista muito atenciosa e dedicada. Uma profissional que escuta todas as nossas necessidades e aplica da melhor forma em nosso tratamento. Recebi uma dieta personalizada que melhorou minha qualidade de vida e relação com a comida. Agradeço muito por ter como aliada uma profissional com um conhecimento técnico valioso e ao mesmo tempo um carinho enorme por nós e atenção ao que preciso e gosto.",
    nome: "Gabriela S.",
  },
  {
    texto:
      "Recomendo muito!! Foi a primeira vez que eu passei em nutricionista e ela mudou muito minha forma de ver a comida e me alimentar. Perdi o medo de comer, me senti orientada, acompanhada e num espaço que me acolhe e não julga! Excelente profissional",
    nome: "Carolina C.",
  },
  {
    texto:
      "Passei em consulta com a Fernanda no mês passado, atendimento super direcionado, leve e que me fizeram mudar radicalmente meus hábitos de consumo e rotina esportiva. Pensei que isso era impossível, entretanto, foi possível ajustar tudo com um ótimo acompanhamento",
    nome: "Fabrizzio S.",
  },
];
