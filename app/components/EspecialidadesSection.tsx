import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Bloco 3 — Minhas especialidades.
 * PENDÊNCIA: os ícones abaixo são de linha, desenhados para o sistema atual.
 * Trocar por ícones/ilustrações da identidade visual quando a Fase 1 fechar.
 */
const especialidades: { titulo: string; icone: React.ReactNode }[] = [
  {
    titulo: "Avaliação Corporal",
    icone: (
      <>
        <path d="M4.5 8.5h15A1.5 1.5 0 0 1 21 10v4a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 14v-4a1.5 1.5 0 0 1 1.5-1.5Z" />
        <path d="M7 8.5v3M10 8.5v4.5M13 8.5v3M16 8.5v4.5" />
      </>
    ),
  },
  {
    titulo: "Nutrição Clínica",
    icone: (
      <>
        <path d="M12 21c-4.5-2.4-7-6-7-10.5A5.5 5.5 0 0 1 12 7a5.5 5.5 0 0 1 7 3.5C19 15 16.5 18.6 12 21Z" />
        <path d="M12 21V7M12 7C12 4.8 13.6 3 15.8 3" />
      </>
    ),
  },
  {
    titulo: "Reeducação Alimentar",
    icone: (
      <>
        <path d="M20 12a8 8 0 1 1-3.2-6.4" />
        <path d="M20 4v5h-5" />
        <path d="M12 8.5v4l3 1.8" />
      </>
    ),
  },
  {
    titulo: "Plano Alimentar Individualizado",
    icone: (
      <>
        <path d="M7 3.5h10a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </>
    ),
  },
  {
    titulo: "Emagrecimento com base comportamental",
    icone: (
      <>
        <path d="M12 20.5c-4 0-7-2.8-7-6.6 0-2.6 1.6-4.6 3-6.2C9.5 5.9 10.6 4.4 11 2.5c2.8 1.6 4.4 3.8 4.4 6 0 1.2-.5 2.2-1.2 3 .9.2 1.7-.2 2.4-1 1 1.3 1.4 2.7 1.4 4 0 3.8-3 6-6 6Z" />
      </>
    ),
  },
  {
    titulo: "Nutrição Esportiva / Performance",
    icone: (
      <>
        <path d="M3 12h3l2.5-6 3 12 3-8 2 4 3.5-2" />
      </>
    ),
  },
  {
    titulo: "Seletividade alimentar infantil (TEA)",
    icone: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9 10.5h.01M15 10.5h.01" />
        <path d="M9 15c.9.8 1.9 1.2 3 1.2s2.1-.4 3-1.2" />
      </>
    ),
  },
];

export default function EspecialidadesSection() {
  return (
    <section id="especialidades" className="relative bg-cream-100 py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Como posso te ajudar"
          title="Minhas especialidades"
          lead="A nutrição comportamental é a abordagem principal dos meus atendimentos, com escuta ativa e acolhimento para que seus objetivos sejam alcançados levando em consideração sua realidade e o significado que a comida tem em sua vida."
        />

        <ul className="mt-16 flex flex-wrap justify-center gap-5" role="list">
          {especialidades.map((item, index) => (
            <Reveal
              as="li"
              key={item.titulo}
              delay={index * 55}
              className="flex basis-full sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-0.834rem)]"
            >
              <article className="group flex w-full flex-col gap-6 rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-500 ease-gentle hover:-translate-y-1 hover:border-clay/35 hover:shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-clay/15 bg-clay-tint text-clay-dark transition-colors duration-500 group-hover:border-clay group-hover:bg-clay group-hover:text-cream">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {item.icone}
                  </svg>
                </span>
                <h3 className="font-display text-[21px] font-semibold leading-snug tracking-[-0.01em] text-ink">
                  {item.titulo}
                </h3>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 flex justify-center">
          <CtaButton />
        </Reveal>
      </div>
    </section>
  );
}
