/**
 * Configuração central do site GeraTech.
 *
 * >>> PREENCHA OS PLACEHOLDERS ABAIXO com os dados reais <<<
 * Tudo que precisa de dado do cliente está aqui, num lugar só.
 */

// WhatsApp — número no formato internacional, só dígitos (55 + DDD + número).
// Ex.: "5511987654321"
export const WHATSAPP_NUMBER = "5518996293544";

// Mensagem que já vem escrita quando o cliente abre o WhatsApp.
export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da GeraTech e quero um diagnóstico da minha operação de e-commerce.";

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// E-mail de contato.
export const CONTACT_EMAIL = "geraldopapajr@gmail.com";
export const emailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Contato via site GeraTech"
)}`;

// Cliente do case.
export const CLIENT_NAME = "Hub Smart Home";

// Métricas do case Hub Smart Home.
// Troque os valores por números reais; o campo `ilustrativo` some da UI quando for real.
export const CASE_METRICS: {
  valor: string;
  label: string;
  ilustrativo?: boolean;
}[] = [
  { valor: "+18%", label: "de margem otimizada" },
  { valor: "−63%", label: "de ruptura de estoque" },
  { valor: "100%", label: "das decisões orientadas por dados" },
];

// Depoimento do cliente.
export const TESTIMONIAL = {
  quote:
    "A GeraTech mudou a estrutura da nossa operação. Saímos das planilhas para uma base de dados que sustenta cada decisão — isso nos permitiu escalar com segurança e otimizar os resultados em precificação, estoque e promoções.",
  author: "Rômulo Leon",
  role: "CEO · Hub Smart Home",
};
