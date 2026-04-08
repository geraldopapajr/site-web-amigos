const servicos = [
  {
    titulo: "Consulta inicial",
    descricao:
      "Anamnese detalhada, revisão de hábitos, histórico de saúde e definição de metas realistas. Entendemos seu contexto antes de qualquer plano.",
    numero: "01",
  },
  {
    titulo: "Plano alimentar personalizado",
    descricao:
      "Orientação prática com cardápio ou guia flexível, adequado à sua rotina, preferências e necessidades nutricionais, sempre com embasamento científico.",
    numero: "02",
  },
  {
    titulo: "Acompanhamento",
    descricao:
      "Consultas de retorno para avaliar evolução, ajustar estratégias e fortalecer mudanças de comportamento de forma contínua e acolhedora.",
    numero: "03",
  },
];

export default function ServicosSection() {
  return (
    <section id="servicos" className="relative py-28 lg:py-36 bg-gradient-to-b from-cream via-cream-light to-cream">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
            Como posso ajudar
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-graphite mb-6">
            Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-8" />
          <p className="text-lg lg:text-xl text-graphite-light font-sans max-w-3xl mx-auto leading-relaxed text-balance">
            Atendimento focado em escuta ativa e planos viáveis — para quem busca mais energia, equilíbrio,
            performance ou cuidado com condições específicas, sempre respeitando seu tempo e sua individualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {servicos.map((item, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-bronze/10 hover:border-bronze/35 transition-all duration-500 hover:shadow-bronze hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-5xl font-display font-bold text-bronze/10 group-hover:text-bronze/18 transition-colors duration-500">
                {item.numero}
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-bronze to-bronze-light mb-6 group-hover:w-14 transition-all duration-300" />
              <h3 className="text-xl lg:text-2xl font-display font-semibold text-graphite mb-4 relative z-10 group-hover:text-bronze-dark transition-colors">
                {item.titulo}
              </h3>
              <p className="text-graphite-light font-sans leading-relaxed relative z-10">{item.descricao}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-bronze/0 to-bronze/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-bronze/15 shadow-soft">
            <p className="text-base lg:text-lg text-graphite-light font-sans leading-relaxed text-center">
              Também é possível combinar <strong className="text-graphite font-semibold">atendimento presencial</strong> ou{" "}
              <strong className="text-graphite font-semibold">online</strong>, conforme disponibilidade e legislação
              vigente. Na primeira conversa esclarecemos valores, duração das sessões e documentação necessária.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />
    </section>
  );
}
