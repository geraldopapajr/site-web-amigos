export default function ProjetosSection() {
  const projetos = [
    {
      titulo: "Residencial Moderno",
      descricao: "Uma residência contemporânea que integra espaços internos e externos de forma harmoniosa, utilizando materiais sustentáveis e aproveitamento máximo da luz natural.",
      numero: "01",
    },
    {
      titulo: "Complexo Comercial Sustentável",
      descricao: "Projeto arquitetônico que combina funcionalidade empresarial com responsabilidade ambiental, incorporando sistemas de energia renovável e áreas verdes integradas.",
      numero: "02",
    },
    {
      titulo: "Centro Cultural",
      descricao: "Espaço cultural projetado para promover a arte e a cultura local, com design que dialoga com o entorno urbano e cria ambientes acolhedores para exposições e eventos.",
      numero: "03",
    },
  ];

  return (
    <section id="projetos" className="relative py-32 lg:py-40 bg-gradient-to-b from-cream via-cream-light to-cream">
      {/* Separador decorativo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
              Portfólio
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-graphite mb-6">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-8"></div>
          <p className="text-xl text-graphite-light font-sans max-w-3xl mx-auto leading-relaxed">
            Cada projeto é uma oportunidade única de criar espaços que transcendem a funcionalidade,
            incorporando valores estéticos, ambientais e sociais que refletem nossa visão de arquitetura contemporânea.
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-bronze/10 hover:border-bronze/40 transition-all duration-500 hover:shadow-bronze hover:-translate-y-2 overflow-hidden"
            >
              {/* Número decorativo */}
              <div className="absolute top-6 right-6 text-6xl font-display font-bold text-bronze/10 group-hover:text-bronze/20 transition-colors duration-500">
                {projeto.numero}
              </div>
              
              {/* Linha decorativa */}
              <div className="w-12 h-1 bg-gradient-to-r from-bronze to-bronze-light mb-6 group-hover:w-16 transition-all duration-300"></div>
              
              <h3 className="text-2xl font-display font-semibold text-graphite mb-4 relative z-10 group-hover:text-bronze-dark transition-colors duration-300">
                {projeto.titulo}
              </h3>
              <p className="text-graphite-light font-sans leading-relaxed relative z-10">
                {projeto.descricao}
              </p>
              
              {/* Overlay sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-bronze/0 to-bronze/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Texto adicional */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-bronze/20 shadow-soft">
            <p className="text-lg text-graphite-light font-sans leading-relaxed text-center">
              Nossa abordagem arquitetônica prioriza a criação de ambientes que não apenas atendem às necessidades
              funcionais, mas também elevam a experiência humana através do design cuidadoso, da seleção criteriosa
              de materiais e da integração harmoniosa com o contexto urbano e natural. Cada projeto é desenvolvido
              com atenção aos detalhes, considerando aspectos de sustentabilidade, eficiência energética e bem-estar
              dos ocupantes, resultando em espaços que são ao mesmo tempo belos e responsáveis.
            </p>
          </div>
        </div>
      </div>
      
      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent"></div>
    </section>
  );
}
