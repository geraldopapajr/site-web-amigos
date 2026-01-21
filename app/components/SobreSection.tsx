import Image from "next/image";

export default function SobreSection() {
  return (
    <section id="sobre" className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-cream-light to-white">
      {/* Separador decorativo superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
                Nossa História
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-graphite mb-6">
              Sobre
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-8"></div>
          </div>

          {/* Foto do arquiteto e texto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Foto do arquiteto */}
            <div className="order-2 lg:order-1 relative group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 to-transparent z-10"></div>
                <Image
                  src="/arquiteto.png"
                  alt="Arquiteto - Triarquide"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              {/* Decoração ao redor da foto */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-bronze/20 rounded-2xl -z-10 group-hover:border-bronze/40 transition-colors duration-300"></div>
            </div>

            {/* Texto */}
            <div className="order-1 lg:order-2 space-y-6 text-lg text-graphite-light font-sans leading-relaxed flex flex-col justify-center">
              <p>
                A Triarquide nasceu da paixão por criar espaços arquitetônicos que transcendem o convencional,
                combinando estética contemporânea com princípios de sustentabilidade e responsabilidade ambiental.
                Nossa equipe de arquitetos e designers trabalha com dedicação para transformar visões em realidade,
                sempre considerando o impacto positivo que um bom projeto pode ter na vida das pessoas e no meio ambiente.
              </p>

              <p>
                Com anos de experiência no mercado, desenvolvemos projetos residenciais, comerciais e institucionais
                que se destacam pela qualidade do design, pela atenção aos detalhes e pelo compromisso com a excelência.
                Acreditamos que a arquitetura deve ser acessível, funcional e, ao mesmo tempo, inspiradora, criando
                ambientes que promovem o bem-estar e a qualidade de vida.
              </p>
            </div>
          </div>

          {/* Texto adicional em coluna única */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-6 text-lg text-graphite-light font-sans leading-relaxed">
                <p>
                  Nossa metodologia de trabalho é baseada em um processo colaborativo, onde ouvimos atentamente as
                  necessidades e desejos de nossos clientes, traduzindo-os em soluções arquitetônicas inovadoras e
                  sustentáveis. Utilizamos tecnologias de ponta e materiais de alta qualidade, sempre priorizando
                  práticas construtivas que minimizam o impacto ambiental e maximizam a eficiência energética dos
                  edifícios.
                </p>
              </div>

              <div className="space-y-6 text-lg text-graphite-light font-sans leading-relaxed">
                <p>
                  Além disso, mantemos um compromisso constante com a inovação e o aprendizado contínuo, acompanhando
                  as tendências do mercado e as melhores práticas da arquitetura contemporânea internacional. Isso nos
                  permite oferecer soluções que estão sempre à frente do seu tempo, incorporando conceitos modernos de
                  design, tecnologia e sustentabilidade em cada projeto que desenvolvemos.
                </p>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white to-cream-light rounded-2xl p-8 text-center border border-bronze/10 hover:border-bronze/30 transition-all duration-300 hover:shadow-bronze hover:-translate-y-1">
              <div className="text-5xl lg:text-6xl font-display font-bold bg-gradient-to-br from-bronze to-bronze-dark bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-graphite-light font-sans font-medium">Anos de Experiência</div>
            </div>
            <div className="group bg-gradient-to-br from-white to-cream-light rounded-2xl p-8 text-center border border-bronze/10 hover:border-bronze/30 transition-all duration-300 hover:shadow-bronze hover:-translate-y-1">
              <div className="text-5xl lg:text-6xl font-display font-bold bg-gradient-to-br from-bronze to-bronze-dark bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                200+
              </div>
              <div className="text-graphite-light font-sans font-medium">Projetos Realizados</div>
            </div>
            <div className="group bg-gradient-to-br from-white to-cream-light rounded-2xl p-8 text-center border border-bronze/10 hover:border-bronze/30 transition-all duration-300 hover:shadow-bronze hover:-translate-y-1">
              <div className="text-5xl lg:text-6xl font-display font-bold bg-gradient-to-br from-bronze to-bronze-dark bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-graphite-light font-sans font-medium">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separador decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent"></div>
    </section>
  );
}
