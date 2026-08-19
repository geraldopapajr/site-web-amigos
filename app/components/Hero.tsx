import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { CRN, NOME, PROFISSAO } from "../siteConfig";

/** Bloco 1 — Abertura (Hero). */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-b from-cream via-cream-light to-cream">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-bronze/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-bronze/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="flex-1 flex flex-col lg:flex-row relative z-10 min-h-screen">
        <div className="flex-1 flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-12 xl:px-16 pt-28 pb-20 lg:pt-32 lg:pb-24">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-block text-xs font-sans font-semibold text-bronze-dark uppercase tracking-wider bg-bronze/10 px-4 py-2 rounded-full">
                Nutrição clínica · Base científica
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-graphite leading-tight text-balance">
                Recupere o prazer em comer e faça as pazes com o seu corpo através de um olhar
                humano, gentil e sem julgamentos.
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="w-20 h-1 bg-gradient-to-r from-bronze to-bronze-light my-8" />
              <p className="text-lg sm:text-xl text-graphite-light font-sans leading-relaxed max-w-xl text-balance">
                Planos alinhados ao seu estilo de vida, exames e metas.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
                <CtaButton size="lg" />
                <span className="text-sm font-sans font-medium text-bronze-dark/90">
                  {NOME} · {PROFISSAO} · {CRN}
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* PENDÊNCIA: foto profissional da Fernanda (ensaio fotográfico), aplicada sobre a identidade visual. */}
        <div className="flex-1 relative min-h-[320px] lg:min-h-0 flex items-center justify-center p-8 lg:p-12">
          <Reveal delay={120} className="w-full max-w-md">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-bronze/15 via-cream-light to-bronze/5 ring-1 ring-bronze/15" />
              <div className="absolute inset-6 rounded-[2rem] bg-white/70 backdrop-blur-sm shadow-soft flex flex-col items-center justify-center text-center p-8 ring-1 ring-bronze/10">
                <svg
                  className="w-14 h-14 text-bronze/30 mb-3"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  aria-hidden
                >
                  <path d="M24 8c-8 12-8 20 0 28M24 8c8 12 8 20 0 28M12 20c8 4 16 4 24 0M14 28c6 3 14 3 20 0" />
                </svg>
                <p className="font-display text-2xl text-graphite mb-2">{NOME}</p>
                <p className="text-sm text-graphite-light leading-relaxed">
                  {PROFISSAO} · {CRN}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/35 to-transparent z-30" />
    </section>
  );
}
