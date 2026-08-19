import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const passos = [
  {
    numero: "01",
    titulo: "Consulta inicial",
    descricao: "Conversa profunda sobre objetivos e histórico.",
  },
  { numero: "02", titulo: "Análise Digital", descricao: "Avaliação física via IA." },
  {
    numero: "03",
    titulo: "Plano personalizado",
    descricao: "Construído a partir da sua realidade e das suas metas.",
  },
  {
    numero: "04",
    titulo: "Acompanhamento contínuo",
    descricao: "Ajustes feitos com você ao longo do processo.",
  },
];

/** Bloco 4 — Meu método de trabalho. */
export default function MetodoSection() {
  return (
    <section id="metodo" className="relative bg-cream py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading eyebrow="Como funciona" title="Meu método de trabalho" align="center" />

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8" role="list">
          {passos.map((passo, index) => (
            <Reveal
              as="li"
              key={passo.numero}
              delay={index * 110}
              className="relative lg:after:absolute lg:after:left-9 lg:after:top-[13px] lg:after:h-px lg:after:w-[calc(100%+10px)] lg:after:bg-clay/25 lg:last:after:hidden"
            >
              <span
                className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-clay/35 bg-cream"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-clay" />
              </span>
              <p className="mt-6 font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-clay">
                Passo {passo.numero}
              </p>
              <h3 className="mt-3 font-display text-[22px] font-semibold leading-snug tracking-[-0.01em] text-ink">
                {passo.titulo}
              </h3>
              <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink-soft">
                {passo.descricao}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl border border-olive/12 bg-olive-tint/70 px-8 py-10 text-center">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 text-olive"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="2.5" y="5.5" width="13" height="13" rx="2.5" />
              <path d="M15.5 10.5l6-3.5v10l-6-3.5z" />
            </svg>
            <p className="max-w-measure text-[17px] leading-relaxed text-ink-soft sm:text-lg">
              Todos os atendimentos são feitos{" "}
              <strong className="font-semibold text-ink">online, por videochamada</strong>, com o mesmo
              cuidado e acolhimento de um consultório presencial.
            </p>
            <CtaButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
