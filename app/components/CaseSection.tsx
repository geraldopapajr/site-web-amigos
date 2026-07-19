import { CASE_METRICS, CLIENT_NAME, TESTIMONIAL } from "../siteConfig";

export default function CaseSection() {
  return (
    <section id="case" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 glow-green"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-surface/70 backdrop-blur-sm p-8 sm:p-12 lg:p-16">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-data-green">
            Case real · {CLIENT_NAME}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-mist text-balance">
            Não é teoria. Já está rodando na{" "}
            <span className="text-gradient">{CLIENT_NAME}.</span>
          </h2>

          <div className="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="space-y-4 text-mist-muted leading-relaxed">
              <p>
                A {CLIENT_NAME} vendia online com os dados espalhados e as decisões no
                feeling — preço no olho, compra por intuição, promoção na torcida.
              </p>
              <p>
                Construí do zero o banco de dados e as pipelines que o mantêm sempre
                atualizado. Hoje,{" "}
                <span className="text-mist font-medium">
                  toda a tomada de decisão da operação
                </span>{" "}
                — precificação, supply e promoções — roda em cima dessa base.
              </p>
              <p className="text-mist">
                É exatamente essa engenharia que eu levo para o seu negócio.
              </p>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {CASE_METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/10 bg-ink/60 p-6 text-center lg:text-left"
                >
                  <p className="font-mono text-3xl lg:text-4xl font-bold text-gradient">
                    {m.valor}
                  </p>
                  <p className="mt-1 text-sm text-mist-muted">
                    {m.label}
                    {m.ilustrativo && (
                      <span className="ml-1 font-mono text-[0.65rem] text-mist-muted/60">
                        (ilustrativo)
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Depoimento */}
          <figure className="mt-10 rounded-2xl border border-white/10 bg-ink/50 p-8 lg:p-10">
            <span className="font-display text-5xl leading-none text-data-green/60" aria-hidden>
              &ldquo;
            </span>
            <blockquote className="mt-2 text-lg lg:text-xl text-mist leading-relaxed text-balance">
              {TESTIMONIAL.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface font-display font-bold text-gradient"
                aria-hidden
              >
                {CLIENT_NAME.charAt(0)}
              </span>
              <span className="text-sm">
                <span className="block font-semibold text-mist">{TESTIMONIAL.author}</span>
                <span className="block font-mono text-xs text-mist-muted">
                  {TESTIMONIAL.role}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
