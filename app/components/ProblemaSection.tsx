import SectionHeading from "./SectionHeading";

const problemas = [
  {
    titulo: "Preço no feeling",
    texto:
      "Você ajusta preço no olho e descobre tarde demais: ou a margem foi corroída, ou perdeu a Buy Box pra quem calculou melhor.",
  },
  {
    titulo: "Ruptura e capital parado",
    texto:
      "Falta o produto que vende e sobra o que não gira. Vendas perdidas de um lado, dinheiro empatado em estoque do outro.",
  },
  {
    titulo: "Promoção sem ROI",
    texto:
      "Você dá desconto sem saber se aquilo trouxe lucro ou só queimou margem. No fim do mês, não dá pra provar o que funcionou.",
  },
  {
    titulo: "Dados que não conversam",
    texto:
      "Planilhas, Mercado Livre, ads e ERP em silos separados. A informação existe — mas está espalhada e desatualizada.",
  },
  {
    titulo: "Decisão lenta e reativa",
    texto:
      "Cada decisão vira uma caça a números em abas diferentes. Não escala, e a concorrência muda de preço antes de você reagir.",
  },
];

export default function ProblemaSection() {
  return (
    <section id="problema" className="relative bg-ink-2 py-24 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="O problema"
          title={
            <>
              Você tem dados. Mas está decidindo{" "}
              <span className="text-gradient">no achismo?</span>
            </>
          }
          intro="A maioria das operações de e-commerce senta em cima de uma mina de dados — e continua decidindo por intuição. Reconhece alguma destas?"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((p) => (
            <article
              key={p.titulo}
              className="group rounded-2xl border border-white/10 bg-surface/60 p-7 transition-all duration-300 hover:border-cyan/30 hover:-translate-y-1"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-ink/60 font-mono text-cyan">
                !
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
