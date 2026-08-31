import CtaButton from "./CtaButton";
import Portrait from "./Portrait";
import Reveal from "./Reveal";
import { CRN, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../siteConfig";

const provas = [
  { titulo: "Atendimento", detalhe: "100% online, por videochamada" },
  { titulo: "Abordagem", detalhe: "Nutrição comportamental" },
  { titulo: "Registro", detalhe: CRN },
];

/** Bloco 1 — Abertura (Hero). */
export default function Hero() {
  return (
    <section className="textured relative overflow-hidden bg-paper pt-32 pb-16 sm:pt-40 lg:pt-44 lg:pb-24">
      {/* Fundo: dois campos de luz muito suaves, sem gradiente chapado. */}
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(253,231,144,0.38),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-15%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(166,196,153,0.35),transparent_65%)]"
        aria-hidden
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Nutrição clínica · Base científica</p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
                Recupere o prazer em comer e faça as pazes com o seu corpo através de um{" "}
                <em className="not-italic text-brand">olhar humano, gentil e sem julgamentos</em>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="lead mt-7 max-w-measure text-pretty">
                Planos alinhados ao seu estilo de vida, exames e metas.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <CtaButton size="lg" />
                {/* CTA secundário, deliberadamente discreto: espiar o Instagram. */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-sans text-[15px] font-medium text-ink-soft transition-colors hover:text-brand"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px] text-brand/70 transition-colors group-hover:text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden
                  >
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                  <span className="underline decoration-ink/20 underline-offset-[6px] transition-colors group-hover:decoration-brand">
                    Veja meu Instagram
                  </span>
                  <span className="sr-only">{INSTAGRAM_HANDLE}</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <dl className="mt-14 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/8 sm:grid-cols-3">
                {provas.map((prova) => (
                  <div key={prova.titulo} className="bg-paper px-5 py-4">
                    <dt className="font-sans text-[10px] font-semibold uppercase tracking-eyebrow text-ink-muted">
                      {prova.titulo}
                    </dt>
                    <dd className="mt-1.5 font-sans text-[14px] font-medium leading-snug text-ink">
                      {prova.detalhe}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* PENDÊNCIA: ensaio fotográfico profissional para este bloco. */}
          <Reveal delay={140} className="lg:col-span-5">
            <div className="relative mx-auto max-w-[380px] lg:mr-0">
              <Portrait priority sizes="(max-width: 1024px) 80vw, 380px" />
              <div className="absolute -left-4 bottom-8 rounded-full border border-sun/50 bg-paper px-4 py-2 shadow-soft sm:-left-6">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-brand">
                  {CRN}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
