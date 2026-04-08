import Image from "next/image";

export default function SobreSection() {
  return (
    <section id="sobre" className="relative py-28 lg:py-36 bg-gradient-to-b from-cream via-cream-light to-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
              Quem cuida de você
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-graphite mb-6">
              Sobre mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-4" />
            <p className="text-bronze-dark font-sans font-medium">CRN-X XXXXX · Nutricionista</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <div className="relative group mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] max-h-[480px] rounded-2xl overflow-hidden shadow-soft ring-1 ring-bronze/15 bg-cream-dark">
                <Image
                  src="/fernanda-zanatelli.jpeg"
                  alt="Fernanda Zanatelli, nutricionista"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-bronze/10 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-bronze/15 rounded-2xl -z-10 group-hover:border-bronze/25 transition-colors" />
            </div>

            <div className="space-y-6 text-lg text-graphite-light font-sans leading-relaxed flex flex-col justify-center">
              <p>
                Sou a <strong className="text-graphite font-semibold">Fernanda Zanatelli</strong>, nutricionista com foco em
                atendimento individualizado. Acredito que alimentação saudável precisa ser possível no mundo real — com
                trabalho, família e imprevistos — e não apenas em teorias irreais.
              </p>
              <p>
                Minha prática combina evidências científicas com escuta ativa: entendo sua rotina, suas preferências e
                limitações para construir um plano que você consiga seguir. O objetivo é autonomia e segurança nas
                escolhas, não dependência de cardápios engessados.
              </p>
              <p>
                Atuo com diferentes perfis — desde quem busca mais disposição e qualidade de vida até quem precisa de
                suporte nutricional em contextos clínicos específicos, sempre em articulação com sua equipe de saúde
                quando necessário.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-center text-xl font-display font-semibold text-graphite mb-8">Áreas de atuação</h3>
            <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                "Nutrição clínica",
                "Emagrecimento sustentável",
                "Hábitos e comportamento alimentar",
                "Nutrição na vida adulta",
                "Planejamento alimentar prático",
              ].map((tag) => (
                <li
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white border border-bronze/15 text-graphite text-sm font-medium shadow-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center border border-bronze/10 hover:shadow-soft transition-shadow">
              <div className="text-4xl lg:text-5xl font-display font-bold bg-gradient-to-br from-bronze to-bronze-dark bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-graphite-light font-sans text-sm font-medium">Foco no paciente</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-bronze/10 hover:shadow-soft transition-shadow">
              <div className="text-4xl lg:text-5xl font-display font-bold bg-gradient-to-br from-bronze to-bronze-dark bg-clip-text text-transparent mb-2">
                1:1
              </div>
              <div className="text-graphite-light font-sans text-sm font-medium">Consultas personalizadas</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-bronze/10 hover:shadow-soft transition-shadow">
              <div className="text-4xl lg:text-5xl font-display font-bold bg-gradient-to-br from-bronze to-bronze-dark bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-graphite-light font-sans text-sm font-medium">Suporte entre consultas*</div>
            </div>
          </div>
          <p className="text-center text-xs text-graphite-light/90 mt-4 font-sans">
            *Conforme combinado no plano de acompanhamento.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />
    </section>
  );
}
