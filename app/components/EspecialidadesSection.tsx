import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

/* PENDÊNCIA: foto/ícone ou ilustração para cada card, na paleta e estilo visual da Fase 1. */
const especialidades = [
  "Avaliação Corporal",
  "Nutrição Clínica",
  "Reeducação Alimentar",
  "Plano Alimentar Individualizado",
  "Emagrecimento com base comportamental",
  "Nutrição Esportiva / Performance",
  "Seletividade alimentar infantil (TEA)",
];

/** Bloco 3 — Minhas especialidades. */
export default function EspecialidadesSection() {
  return (
    <section
      id="especialidades"
      className="relative py-28 lg:py-36 bg-gradient-to-b from-white via-cream-light to-cream"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
            Como posso te ajudar
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-graphite mb-6">
            Minhas especialidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-8" />
          <p className="text-lg lg:text-xl text-graphite-light font-sans max-w-3xl mx-auto leading-relaxed text-balance">
            A nutrição comportamental é a abordagem principal dos meus atendimentos, com escuta ativa e
            acolhimento para que seus objetivos sejam alcançados levando em consideração sua realidade e o
            significado que a comida tem em sua vida.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16" role="list">
          {especialidades.map((titulo, index) => (
            <Reveal as="li" key={titulo} delay={index * 60}>
              <article className="group relative h-full bg-white rounded-2xl p-8 border border-bronze/10 hover:border-bronze/35 transition-all duration-500 hover:shadow-bronze hover:-translate-y-1 overflow-hidden">
                <div className="w-12 h-1 bg-gradient-to-r from-bronze to-bronze-light mb-6 group-hover:w-14 transition-all duration-300" />
                <h3 className="text-xl lg:text-2xl font-display font-semibold text-graphite relative z-10 group-hover:text-bronze-dark transition-colors">
                  {titulo}
                </h3>
                <div className="absolute inset-0 bg-gradient-to-br from-bronze/0 to-bronze/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="text-center">
          <CtaButton />
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />
    </section>
  );
}
