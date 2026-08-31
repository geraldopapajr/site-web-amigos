import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Bloco 3 — Minhas especialidades.
 * São 7 itens: em grade de caixas sobrava sempre um card órfão na última
 * linha, então viraram uma lista editorial de duas colunas — a quantidade
 * ímpar deixa de aparecer como buraco, e nada fica escondido num carrossel.
 *
 * PENDÊNCIA: ícones de linha provisórios; trocar pelos da identidade visual.
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
    titulo: "Emagrecimento",
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
    <section id="especialidades" className="relative bg-paper-2 py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Como posso te ajudar"
          title="Minhas especialidades"
          lead="A nutrição comportamental é a abordagem principal dos meus atendimentos, com escuta ativa e acolhimento para que seus objetivos sejam alcançados levando em consideração sua realidade e o significado que a comida tem em sua vida."
        />

        <ul
          className="mt-16 grid border-b border-ink/10 sm:grid-cols-2 sm:gap-x-14 lg:gap-x-24"
          role="list"
        >
          {especialidades.map((item, index) => (
            <Reveal
              as="li"
              key={item.titulo}
              delay={index * 60}
              className="group border-t border-ink/10"
            >
              <div className="flex items-center gap-5 py-7 transition-transform duration-500 ease-gentle group-hover:translate-x-1">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sun/40 text-brand-dark transition-colors duration-500 group-hover:bg-brand group-hover:text-paper">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px]"
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
                <h3 className="font-display text-[19px] font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-[21px]">
                  {item.titulo}
                </h3>
              </div>
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
