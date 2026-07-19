import SectionHeading from "./SectionHeading";

const perfis = [
  {
    titulo: "Vendedores de marketplace",
    texto:
      "Mercado Livre, Shopee, Amazon. Muitos SKUs, concorrência mudando preço o tempo todo e margem apertada.",
  },
  {
    titulo: "Lojas próprias & D2C",
    texto:
      "Operações com e-commerce próprio que querem entender demanda, estoque e comportamento de compra pra crescer.",
  },
  {
    titulo: "Quem já tem volume",
    texto:
      "Se planilha já não dá conta e cada decisão pesa em milhares de reais, está na hora de escalar com dados.",
  },
];

export default function ParaQuemSection() {
  return (
    <section id="para-quem" className="relative bg-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Para quem é"
          title={
            <>
              Feito pra quem <span className="text-gradient">vive de e-commerce</span>
            </>
          }
        />
        <div className="grid gap-5 md:grid-cols-3">
          {perfis.map((p) => (
            <article
              key={p.titulo}
              className="rounded-2xl border border-white/10 bg-surface/60 p-8 transition-all duration-300 hover:border-data-green/40 hover:-translate-y-1"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-ink/60 text-data-green">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-display font-semibold text-mist">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm text-mist-muted leading-relaxed">{p.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
