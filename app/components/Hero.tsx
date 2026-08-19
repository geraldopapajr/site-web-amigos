import CtaButton from "./CtaButton";
import Portrait from "./Portrait";
import Reveal from "./Reveal";
import { CRN } from "../siteConfig";

const provas = [
  { titulo: "Atendimento", detalhe: "100% online, por videochamada" },
  { titulo: "Abordagem", detalhe: "Nutrição comportamental" },
  { titulo: "Registro", detalhe: CRN },
];

/** Bloco 1 — Abertura (Hero). */
export default function Hero() {
  return (
    <section className="textured relative overflow-hidden bg-cream pt-32 pb-16 sm:pt-40 lg:pt-44 lg:pb-24">
      {/* Fundo: dois campos de luz muito suaves, sem gradiente chapado. */}
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,164,74,0.16),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-15%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(63,74,58,0.10),transparent_65%)]"
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
                <em className="not-italic text-clay">olhar humano, gentil e sem julgamentos</em>.
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
                <a
                  href="#metodo"
                  className="font-sans text-[15px] font-medium text-ink-soft underline decoration-ink/20 underline-offset-[6px] transition-colors hover:text-clay hover:decoration-clay"
                >
                  Como funciona
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <dl className="mt-14 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/8 sm:grid-cols-3">
                {provas.map((prova) => (
                  <div key={prova.titulo} className="bg-cream px-5 py-4">
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
              <div className="absolute -left-4 bottom-8 rounded-full border border-ocre/50 bg-cream px-4 py-2 shadow-soft sm:-left-6">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-clay">
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
