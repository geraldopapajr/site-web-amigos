import SectionHeading from "./SectionHeading";

const passos = [
  {
    n: "01",
    titulo: "Conecto suas fontes",
    texto:
      "Mercado Livre, ads, ERP, planilhas e outros marketplaces. Trago pra dentro tudo que hoje está espalhado.",
  },
  {
    n: "02",
    titulo: "Centralizo na nuvem",
    texto:
      "Um banco de dados único, sempre atualizado por pipelines automáticas de ingestão. Sua verdade em um lugar só.",
  },
  {
    n: "03",
    titulo: "Modelo o seu negócio",
    texto:
      "Precificação, previsão de demanda, curva ABC, elasticidade. Algoritmos feitos pra sua realidade, não um template.",
  },
  {
    n: "04",
    titulo: "Você decide com dados",
    texto:
      "Dashboards, alertas e recomendações de preço, compra e promoção. A decisão certa, na hora certa.",
  },
];

export default function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="relative bg-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title={
            <>
              Do dado bruto à <span className="text-gradient">decisão certa</span>
            </>
          }
          intro="Um processo claro, do zero à operação orientada por dados. Sem promessa mágica — engenharia."
        />

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {passos.map((p, i) => (
            <div key={p.n} className="relative">
              <article className="h-full rounded-2xl border border-white/10 bg-surface/60 p-7 transition-all duration-300 hover:border-data-green/40 hover:-translate-y-1">
                <span className="font-mono text-3xl font-bold text-gradient">{p.n}</span>
                <h3 className="mt-4 text-lg font-display font-semibold text-mist">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-sm text-mist-muted leading-relaxed">{p.texto}</p>
              </article>
              {i < passos.length - 1 && (
                <span
                  className="pointer-events-none absolute top-1/2 -right-3 hidden lg:block text-cyan/50"
                  aria-hidden
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
