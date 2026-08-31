import Image from "next/image";
import { LOGO_SRC, NOME, PROFISSAO } from "../siteConfig";

/**
 * Lockup da marca: logo oficial (public/logo.png) + assinatura tipográfica.
 * O logo é um monograma circular; ao lado dele mantemos o nome escrito,
 * porque no tamanho do cabeçalho o monograma sozinho não se lê.
 *
 * O arquivo usado (logo-marca.png) já vem recortado em disco, então funciona
 * tanto no cabeçalho claro quanto no rodapé escuro.
 */
export default function Logo({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const claro = tone === "paper";

  return (
    <span className="flex items-center gap-3">
      {LOGO_SRC ? (
        <span className="relative block h-12 w-12 shrink-0 rounded-full">
          <Image
            src={LOGO_SRC}
            alt={`Marca de ${NOME}`}
            fill
            sizes="48px"
            priority
            className="object-contain"
          />
        </span>
      ) : (
        <svg viewBox="0 0 32 32" className="h-9 w-9 shrink-0" aria-hidden>
          <circle cx="16" cy="16" r="15" className={claro ? "fill-paper/12" : "fill-sun/45"} />
          <path
            d="M16 24.5c0-5 1.6-8.6 5.4-11.2-.6 4.9-2.3 8.6-5.4 11.2Z"
            className={claro ? "fill-sun" : "fill-brand"}
          />
          <path
            d="M16 24.5C13 21.9 11.2 18.2 10.6 13.3 14.4 15.9 16 19.5 16 24.5Z"
            className={claro ? "fill-sage" : "fill-sage-dark"}
          />
        </svg>
      )}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-semibold tracking-[-0.01em] ${
            claro ? "text-paper" : "text-ink"
          }`}
        >
          {NOME}
        </span>
        <span
          className={`mt-1 font-sans text-[10px] font-medium uppercase tracking-eyebrow ${
            claro ? "text-paper/60" : "text-ink-muted"
          }`}
        >
          {PROFISSAO}
        </span>
      </span>
    </span>
  );
}
