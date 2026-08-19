import { NOME, PROFISSAO } from "../siteConfig";

/**
 * Lockup da marca: marca gráfica (folha/semente) + assinatura tipográfica.
 * PENDÊNCIA: substituir a marca gráfica pelo logo oficial quando a identidade
 * visual da Fernanda estiver fechada.
 */
export default function Logo({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  const claro = tone === "cream";

  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden>
        <circle cx="16" cy="16" r="15" className={claro ? "fill-cream/10" : "fill-clay/10"} />
        <path
          d="M16 24.5c0-5 1.6-8.6 5.4-11.2-.6 4.9-2.3 8.6-5.4 11.2Z"
          className={claro ? "fill-ocre" : "fill-clay"}
        />
        <path
          d="M16 24.5C13 21.9 11.2 18.2 10.6 13.3 14.4 15.9 16 19.5 16 24.5Z"
          className={claro ? "fill-cream/70" : "fill-olive"}
        />
        <path
          d="M16 24.5V9"
          className={claro ? "stroke-cream/45" : "stroke-ocre"}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-semibold tracking-[-0.01em] ${
            claro ? "text-cream" : "text-ink"
          }`}
        >
          {NOME}
        </span>
        <span
          className={`mt-1 font-sans text-[10px] font-medium uppercase tracking-eyebrow ${
            claro ? "text-cream/60" : "text-ink-muted"
          }`}
        >
          {PROFISSAO}
        </span>
      </span>
    </span>
  );
}
