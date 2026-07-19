"use client";

import { whatsappHref } from "../siteConfig";

export default function Hero() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Grid + glow de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 glow-cyan"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Coluna de texto */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-wider text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-data-green" />
              Engenharia de dados para e-commerce
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-display font-bold text-mist text-balance">
              Seus dados já sabem o preço certo, o estoque ideal e a promoção que vende.{" "}
              <span className="text-gradient">Eu faço eles falarem.</span>
            </h1>

            <p className="mt-6 text-lg text-mist-muted font-sans leading-relaxed max-w-xl text-balance">
              A GeraTech constrói a infraestrutura de dados que otimiza precificação,
              estoque e promoções do seu e-commerce — do jeito que já está rodando na
              Hub Smart Home.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-3.5 text-base font-semibold text-ink shadow-glow transition hover:bg-data-green"
              >
                Falar no WhatsApp
              </a>
              <button
                type="button"
                onClick={() => scrollToId("case")}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-mist transition hover:border-cyan/50 hover:bg-white/10"
              >
                Ver o case real
              </button>
            </div>

            <p className="mt-6 text-sm font-mono text-mist-muted/80">
              Mercado Livre · Marketplaces · Loja própria
            </p>
          </div>

          {/* Coluna visual: painel de dados estilizado */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 glow-green" aria-hidden />
            <div className="relative rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-sm p-6 shadow-soft animate-float-slow">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-mist-muted">
                  painel · tempo real
                </span>
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-data-green" />
                </span>
              </div>

              {/* KPIs (ilustrativos) */}
              <div className="grid grid-cols-3 gap-3 py-5">
                {[
                  { k: "Margem", v: "27,4%", up: true },
                  { k: "Ruptura", v: "1,2%", up: false },
                  { k: "Giro", v: "3,8×", up: true },
                ].map((kpi) => (
                  <div key={kpi.k} className="rounded-xl border border-white/10 bg-ink/60 p-3">
                    <p className="font-mono text-[0.65rem] uppercase tracking-wider text-mist-muted">
                      {kpi.k}
                    </p>
                    <p className="mt-1 font-mono text-lg font-semibold text-mist">{kpi.v}</p>
                    <p
                      className={`font-mono text-[0.65rem] ${
                        kpi.up ? "text-data-green" : "text-cyan"
                      }`}
                    >
                      {kpi.up ? "▲ otimizado" : "▼ reduzido"}
                    </p>
                  </div>
                ))}
              </div>

              {/* Barras */}
              <div className="flex items-end gap-2 h-28 border-t border-white/10 pt-5">
                {[38, 52, 44, 68, 60, 82, 74, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-cyan/30 to-data-green/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="mt-3 font-mono text-[0.65rem] text-mist-muted">
                {"> preco_otimo · demanda_prevista · promo_roi"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
