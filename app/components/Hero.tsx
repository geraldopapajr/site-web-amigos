"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-b from-cream via-cream-light to-cream">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-bronze/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-bronze/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="flex-1 flex flex-col lg:flex-row relative z-10 min-h-screen">
        <div className="flex-1 flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 pb-16 lg:pt-28 lg:pb-0">
          <div className="max-w-2xl">
            <div className="inline-block mb-6">
              <span className="text-xs font-sans font-semibold text-bronze-dark uppercase tracking-wider bg-bronze/10 px-4 py-2 rounded-full">
                Nutrição clínica · Base científica
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-graphite leading-tight mb-4">
              Fernanda
              <span className="block text-bronze mt-1 bg-gradient-to-r from-bronze to-bronze-light bg-clip-text text-transparent">
                Zanatelli
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-display text-graphite-light mb-6">
              Nutricionista
            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-bronze to-bronze-light mb-8" />

            <p className="text-lg sm:text-xl text-graphite-light font-sans leading-relaxed max-w-xl text-balance">
              Acompanhamento nutricional personalizado para você ganhar clareza sobre o que comer,
              atingir seus objetivos de saúde e manter hábitos sustentáveis no dia a dia.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contato");
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full bg-bronze px-8 py-3.5 text-base font-semibold text-white shadow-bronze transition hover:bg-bronze-dark"
              >
                Agendar consulta
              </a>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("servicos");
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full border-2 border-bronze/35 bg-white/80 px-8 py-3.5 text-base font-semibold text-bronze-dark transition hover:border-bronze hover:bg-cream-light"
              >
                Ver serviços
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 relative min-h-[320px] lg:min-h-0 flex items-center justify-center p-8 lg:p-12">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-bronze/15 via-cream-light to-bronze/5 ring-1 ring-bronze/15" />
            <div className="absolute inset-6 rounded-[2rem] bg-white/70 backdrop-blur-sm shadow-soft flex flex-col items-center justify-center text-center p-8 ring-1 ring-bronze/10">
              <svg
                className="w-14 h-14 text-bronze/30 mb-3"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                aria-hidden
              >
                <path d="M24 8c-8 12-8 20 0 28M24 8c8 12 8 20 0 28M12 20c8 4 16 4 24 0M14 28c6 3 14 3 20 0" />
              </svg>
              <p className="font-display text-2xl text-graphite mb-2">Alimentação com propósito</p>
              <p className="text-sm text-graphite-light leading-relaxed">
                Planos alinhados ao seu estilo de vida, exames e metas — sem modismos e sem culpa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/35 to-transparent z-30" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <button
          type="button"
          onClick={() => {
            const element = document.getElementById("servicos");
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
              });
            }
          }}
          className="flex flex-col items-center gap-2 text-bronze/70 hover:text-bronze transition-colors bg-transparent border-none cursor-pointer"
          aria-label="Rolar para serviços"
        >
          <span className="text-xs font-sans uppercase tracking-wider">Serviços</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
