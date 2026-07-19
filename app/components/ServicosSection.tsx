import SectionHeading from "./SectionHeading";

const servicos = [
  {
    titulo: "Precificação inteligente",
    texto:
      "Preço ótimo por SKU, reagindo à concorrência, à demanda e à sua margem-alvo. Menos achismo, mais lucro por venda.",
    icon: "tag",
  },
  {
    titulo: "Gestão de estoque & supply",
    texto:
      "Previsão de demanda e ponto de reposição. Fim da ruptura no que vende e do capital parado no que não gira.",
    icon: "box",
  },
  {
    titulo: "Promoções com ROI",
    texto:
      "Quais produtos, qual desconto, qual retorno esperado. Cada promoção com número por trás, não torcida.",
    icon: "spark",
  },
  {
    titulo: "Infraestrutura de dados",
    texto:
      "Cloud, pipelines de ingestão e data warehouse construídos do zero — ou em cima do que você já tem.",
    icon: "server",
  },
  {
    titulo: "Dashboards & BI",
    texto:
      "Uma visão única do negócio, com os KPIs que importam atualizados em tempo real. Decisão em segundos.",
    icon: "chart",
  },
  {
    titulo: "Modelos sob medida",
    texto:
      "Algoritmos e modelos construídos para o seu problema específico. Da elasticidade de preço à curva ABC.",
    icon: "cpu",
  },
];

function Icon({ name }: { name: string }) {
  const common = "h-6 w-6";
  switch (name) {
    case "tag":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
          <path d="M20.59 13.41 12 22l-9-9V4a1 1 0 0 1 1-1h9l7.59 7.59a2 2 0 0 1 0 2.82Z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "box":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
          <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" strokeLinejoin="round" />
          <path d="M3 8l9 5 9-5M12 13v8" strokeLinejoin="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" strokeLinecap="round" />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
          <rect x="3" y="4" width="18" height="7" rx="2" />
          <rect x="3" y="13" width="18" height="7" rx="2" />
          <path d="M7 7.5h.01M7 16.5h.01" strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 2v2m6-2v2M9 20v2m6-2v2M2 9h2m-2 6h2m16-6h2m-2 6h2" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function ServicosSection() {
  return (
    <section id="o-que-faco" className="relative bg-ink-2 py-24 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="O que faço"
          title={
            <>
              Dados viram <span className="text-gradient">vantagem competitiva</span>
            </>
          }
          intro="Da infraestrutura ao algoritmo, cada frente resolve uma decisão que hoje custa dinheiro no seu e-commerce."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <article
              key={s.titulo}
              className="group rounded-2xl border border-white/10 bg-surface/60 p-8 transition-all duration-300 hover:border-cyan/30 hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-ink/60 text-cyan transition-colors group-hover:text-data-green">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-5 text-xl font-display font-semibold text-mist">
                {s.titulo}
              </h3>
              <p className="mt-2 text-sm text-mist-muted leading-relaxed">{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
