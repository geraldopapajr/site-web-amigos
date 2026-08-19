import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

const passos = [
  {
    numero: "01",
    titulo: "Consulta inicial",
    descricao: "Conversa profunda sobre objetivos e histórico.",
  },
  {
    numero: "02",
    titulo: "Análise Digital",
    descricao: "Avaliação física via IA.",
  },
  {
    numero: "03",
    titulo: "Plano personalizado",
    descricao: "Construído a partir da sua realidade e das suas metas.",
  },
  {
    numero: "04",
    titulo: "Acompanhamento contínuo",
    descricao: "Ajustes ao longo do processo, feitos com você.",
  },
];

/** Bloco 4 — Meu método de trabalho. */
export default function MetodoSection() {
  return (
    <section id="metodo" className="relative py-28 lg:py-36 bg-gradient-to-b from-cream via-cream-light to-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
            Como funciona
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-graphite mb-6">
            Meu método de trabalho
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto" />
        </Reveal>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14" role="list">
          {passos.map((passo, index) => (
            <Reveal as="li" key={passo.numero} delay={index * 90}>
              <div className="relative h-full bg-white rounded-2xl p-8 border border-bronze/10 shadow-soft">
                <span className="font-display text-4xl font-bold bg-gradient-to-br from-bronze to-bronze-dark bg-clip-text text-transparent">
                  {passo.numero}
                </span>
                <h3 className="mt-4 text-xl font-display font-semibold text-graphite">{passo.titulo}</h3>
                <p className="mt-2 text-graphite-light font-sans leading-relaxed">{passo.descricao}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-bronze/15 shadow-soft">
            <p className="text-base lg:text-lg text-graphite-light font-sans leading-relaxed">
              Todos os atendimentos são feitos <strong className="text-graphite font-semibold">online, por
              videochamada</strong>, com o mesmo cuidado e acolhimento de um consultório presencial.
            </p>
          </div>
          <div className="mt-10">
            <CtaButton />
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />
    </section>
  );
}
