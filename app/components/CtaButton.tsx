import { CTA_LABEL, WHATSAPP_URL } from "../siteConfig";

/**
 * CTA repetido (Bloco Global): todo bloco termina com "Agende sua consulta",
 * apontando para o WhatsApp comercial. A repetição é intencional — cada seção
 * funciona como um novo ponto de saída.
 */
export default function CtaButton({
  size = "md",
  variant = "solid",
  className = "",
}: {
  size?: "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze";
  const sizes = {
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };
  const variants = {
    solid: "bg-bronze text-white shadow-bronze hover:bg-bronze-dark",
    outline:
      "border-2 border-bronze/35 bg-white/80 text-bronze-dark hover:border-bronze hover:bg-cream-light",
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {CTA_LABEL}
    </a>
  );
}
