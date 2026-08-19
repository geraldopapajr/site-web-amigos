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
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "cream";
  className?: string;
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-[13px]",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-9 py-4 text-base",
  };
  const variants = {
    solid: "bg-clay text-cream shadow-cta hover:bg-clay-dark",
    outline: "border border-ink/15 bg-transparent text-ink hover:border-clay hover:text-clay-dark",
    cream: "bg-cream text-ink hover:bg-white",
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 rounded-full font-sans font-semibold tracking-[-0.01em] transition-all duration-300 ease-gentle ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {CTA_LABEL}
      <svg
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 transition-transform duration-300 ease-gentle group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M2.5 8h11M9.5 4l4 4-4 4" />
      </svg>
    </a>
  );
}
