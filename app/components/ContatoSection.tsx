export default function ContatoSection() {
  return (
    <section id="contato" className="relative py-32 lg:py-40 bg-gradient-to-b from-cream-light via-cream to-cream-dark">
      {/* Separador decorativo superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
                Vamos Conversar
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-graphite mb-6">
              Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-8"></div>
          </div>

          {/* Grid de conteúdo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Texto introdutório */}
            <div className="space-y-6 text-lg text-graphite-light font-sans leading-relaxed">
              <p>
                Estamos sempre abertos a novos desafios e oportunidades de colaboração. Se você tem um projeto em
                mente ou está buscando uma equipe de arquitetos comprometida com a excelência e a inovação, entre em
                contato conosco. Será um prazer conhecer suas ideias e discutir como podemos transformá-las em realidade.
              </p>

              <p>
                Nossa equipe está preparada para atender projetos de diferentes escalas e complexidades, desde
                reformas residenciais até grandes empreendimentos comerciais e institucionais. Oferecemos consultoria
                completa em arquitetura, incluindo desenvolvimento de projetos executivos, acompanhamento de obra,
                e consultoria em sustentabilidade e eficiência energética.
              </p>

              <p>
                Valorizamos o relacionamento próximo com nossos clientes e acreditamos que a comunicação clara e
                transparente é fundamental para o sucesso de qualquer projeto.
              </p>
            </div>

            {/* Card de informações de contato */}
            <div className="bg-gradient-to-br from-white to-cream-light rounded-2xl p-8 lg:p-10 border border-bronze/20 shadow-soft hover:shadow-bronze transition-all duration-300">
              <h3 className="text-2xl font-display font-semibold text-graphite mb-6 pb-4 border-b border-bronze/20">
                Informações de Contato
              </h3>
              <div className="space-y-5 text-graphite-light font-sans">
                <div className="flex items-start gap-3 group">
                  <div className="w-1 h-6 bg-gradient-to-b from-bronze to-bronze-light rounded-full group-hover:w-2 transition-all duration-300"></div>
                  <div>
                    <span className="font-semibold text-graphite block mb-1">Email</span>
                    <a href="mailto:contato@triarquide.com.br" className="text-bronze-dark hover:text-bronze transition-colors">
                      contato@triarquide.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-1 h-6 bg-gradient-to-b from-bronze to-bronze-light rounded-full group-hover:w-2 transition-all duration-300"></div>
                  <div>
                    <span className="font-semibold text-graphite block mb-1">Telefone</span>
                    <a href="tel:+551134567890" className="text-bronze-dark hover:text-bronze transition-colors">
                      (11) 3456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-1 h-6 bg-gradient-to-b from-bronze to-bronze-light rounded-full group-hover:w-2 transition-all duration-300"></div>
                  <div>
                    <span className="font-semibold text-graphite block mb-1">Endereço</span>
                    <span>Rua das Arquiteturas, 123<br />São Paulo, SP</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-1 h-6 bg-gradient-to-b from-bronze to-bronze-light rounded-full group-hover:w-2 transition-all duration-300"></div>
                  <div>
                    <span className="font-semibold text-graphite block mb-1">Horário</span>
                    <span>Segunda a Sexta, 9h às 18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mensagem final */}
          <div className="bg-gradient-to-r from-bronze/10 via-bronze/5 to-bronze/10 rounded-2xl p-8 lg:p-10 border border-bronze/20 text-center">
            <p className="text-lg text-graphite-light font-sans leading-relaxed">
              Estamos ansiosos para conhecer seu projeto e discutir como podemos ajudá-lo a transformar suas
              ideias em espaços arquitetônicos excepcionais. Entre em contato através de qualquer um dos canais
              acima e agende uma conversa conosco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
