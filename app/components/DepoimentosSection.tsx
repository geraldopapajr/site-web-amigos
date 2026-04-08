const depoimentos = [
  {
    texto:
      "Consegui encaixar uma alimentação que cabe na minha rotina de trabalho. Saí das dietas restritivas e entendi o que faz sentido para mim.",
    nome: "Marina L.",
    detalhe: "Acompanhamento de 6 meses",
  },
  {
    texto:
      "Atendimento muito humano e sem julgamento. As orientações são claras e os resultados apareceram com calma, do jeito que eu precisava.",
    nome: "Ricardo T.",
    detalhe: "Reeducação alimentar",
  },
  {
    texto:
      "A Fernanda explica o “porquê” de cada mudança. Isso fez toda a diferença para eu manter o foco depois da consulta.",
    nome: "Paula M.",
    detalhe: "Plano personalizado",
  },
];

export default function DepoimentosSection() {
  return (
    <section id="depoimentos" className="relative py-28 lg:py-36 bg-gradient-to-b from-white via-cream-light to-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
            Confiança
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-graphite mb-6">
            Depoimentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-6" />
          <p className="text-lg text-graphite-light max-w-2xl mx-auto font-sans">
            Relatos de pacientes que autorizaram compartilhar a experiência (iniciais alteradas quando solicitado).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((d, i) => (
            <blockquote
              key={i}
              className="bg-white rounded-2xl p-8 border border-bronze/10 shadow-soft flex flex-col h-full"
            >
              <p className="text-graphite-light font-sans leading-relaxed flex-1 mb-6">&ldquo;{d.texto}&rdquo;</p>
              <footer className="border-t border-bronze/10 pt-5">
                <cite className="not-italic font-semibold text-graphite font-sans">{d.nome}</cite>
                <p className="text-sm text-bronze-dark/80 mt-1 font-sans">{d.detalhe}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />
    </section>
  );
}
