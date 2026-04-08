export default function ContatoSection() {
  return (
    <section id="contato" className="relative py-28 lg:py-36 bg-gradient-to-b from-cream-light via-cream to-cream-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
              Próximo passo
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-graphite mb-6">
              Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6 text-lg text-graphite-light font-sans leading-relaxed">
              <p>
                Entre em contato para saber sobre disponibilidade de horários, modalidade de atendimento (presencial ou
                online) e valores. Respondo o mais breve possível em dias úteis.
              </p>
              <p>
                Se preferir, envie uma mensagem com seus objetivos e a melhor forma de retorno — telefone, e-mail ou
                WhatsApp. Na primeira consulta alinhamos expectativas e traçamos o plano de acompanhamento.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-cream-light rounded-2xl p-8 lg:p-10 border border-bronze/15 shadow-soft">
              <h3 className="text-xl font-display font-semibold text-graphite mb-6 pb-4 border-b border-bronze/15">
                Informações
              </h3>
              <div className="space-y-5 text-graphite-light font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-1 min-h-[1.5rem] bg-gradient-to-b from-bronze to-bronze-light rounded-full shrink-0" />
                  <div>
                    <span className="font-semibold text-graphite block mb-1">E-mail</span>
                    <a
                      href="mailto:contato@fernandazanatelli.com.br"
                      className="text-bronze-dark hover:text-bronze transition-colors"
                    >
                      contato@fernandazanatelli.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 min-h-[1.5rem] bg-gradient-to-b from-bronze to-bronze-light rounded-full shrink-0" />
                  <div>
                    <span className="font-semibold text-graphite block mb-1">WhatsApp</span>
                    <a href="https://wa.me/5500000000000" className="text-bronze-dark hover:text-bronze transition-colors">
                      (00) 00000-0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 min-h-[1.5rem] bg-gradient-to-b from-bronze to-bronze-light rounded-full shrink-0" />
                  <div>
                    <span className="font-semibold text-graphite block mb-1">Consultório</span>
                    <span>
                      Endereço completo
                      <br />
                      Cidade, UF
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 min-h-[1.5rem] bg-gradient-to-b from-bronze to-bronze-light rounded-full shrink-0" />
                  <div>
                    <span className="font-semibold text-graphite block mb-1">Horário</span>
                    <span>Segunda a sexta, conforme agenda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-bronze/10 via-bronze/5 to-bronze/10 rounded-2xl p-8 lg:p-10 border border-bronze/15 text-center">
            <p className="text-base text-graphite-light font-sans leading-relaxed max-w-3xl mx-auto">
              Este site tem caráter informativo e não substitui consulta presencial ou remota. Cada caso é único;
              orientações personalizadas são fornecidas apenas após avaliação profissional individualizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
