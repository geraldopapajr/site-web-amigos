"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-b from-cream via-cream-light to-cream">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-bronze/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-10 min-h-screen">
        {/* Lado esquerdo - Título */}
        <div className="flex-1 flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 pb-16 lg:pt-28 lg:pb-0">
          <div className="max-w-2xl">
            {/* Badge decorativo */}
            <div className="inline-block mb-6">
              <span className="text-xs font-sans font-semibold text-bronze-dark uppercase tracking-wider bg-bronze/10 px-4 py-2 rounded-full">
                Arquitetura & Design
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-graphite leading-tight mb-6">
              Arquitetura
              <span className="block text-bronze mt-2 bg-gradient-to-r from-bronze to-bronze-light bg-clip-text text-transparent">
                Contemporânea
              </span>
              <span className="block text-graphite mt-2">e Sustentável</span>
            </h1>
            
            {/* Linha decorativa */}
            <div className="w-20 h-1 bg-gradient-to-r from-bronze to-bronze-light mb-8"></div>
            
            <p className="text-lg sm:text-xl text-graphite-light font-sans mt-8 leading-relaxed max-w-xl">
              Criamos espaços que harmonizam estética moderna com responsabilidade ambiental,
              transformando visões em realidade arquitetônica.
            </p>
          </div>
        </div>

        {/* Lado direito - Imagem/Logo */}
        <div className="flex-1 relative h-1/2 lg:h-full w-full lg:w-auto min-h-[400px] lg:min-h-0 bg-gradient-to-br from-bronze/5 via-cream-light to-cream">
          {/* Decoração de fundo */}
          <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 to-transparent opacity-50"></div>
          
          <div className="relative w-full h-full p-8 lg:p-12">
            <Image
              src="/hero-image.jpg.png"
              alt="Logo Triarquide - Arquitetura Contemporânea"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </div>
        </div>
      </div>

      {/* Transição visual para conectar com próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-20 pointer-events-none"></div>
      
      {/* Separador decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent z-30"></div>
      
      {/* Indicador de scroll suave */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <button
          onClick={() => {
            const element = document.getElementById("projetos");
            if (element) {
              const offsetTop = element.offsetTop - 80;
              window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
              });
            }
          }}
          className="flex flex-col items-center gap-2 text-bronze/70 hover:text-bronze transition-colors group cursor-pointer bg-transparent border-none"
          aria-label="Rolar para próxima seção"
        >
          <span className="text-xs font-sans uppercase tracking-wider">Projetos</span>
          <svg 
            className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
