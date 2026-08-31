import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { DEPOIMENTOS } from "../siteConfig";

const MarcaCitacao = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 24" className={`text-sun ${className}`} fill="currentColor" aria-hidden>
    <path d="M13 24V13.4C13 6.5 17.2 1.7 24 0l1.6 4C21.4 5.5 19 8.2 19 11.3h4.3V24H13Zm-13 0V13.4C0 6.5 4.2 1.7 11 0l1.6 4C8.4 5.5 6 8.2 6 11.3h4.3V24H0Z" />
  </svg>
);

/**
 * Bloco 5 — Depoimentos.
 * Textos reais em `app/siteConfig.ts`, publicados sem reescrita. Se a lista
 * estiver vazia a seção não é renderizada (o menu e o rodapé também escondem
 * o link) — nunca publicamos depoimento inventado.
 *
 * Todos aparecem de uma vez: prova social escondida atrás de seta quase
 * ninguém vê, e o que não está no HTML não é indexado. Os textos têm tamanhos
 * muito diferentes (o maior é 3x o menor), então o primeiro vai em destaque na
 * largura toda e os demais em cards de altura igual — em duas colunas simples
 * o mais curto deixava um buraco embaixo.
 */
export default function DepoimentosSection() {
  if (DEPOIMENTOS.length === 0) return null;

  const [destaque, ...demais] = DEPOIMENTOS;

  return (
    <section id="depoimentos" className="relative bg-paper-2 py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading eyebrow="Confiança" title="O que dizem meus pacientes" align="center" />

        <Reveal className="mx-auto mt-16 max-w-5xl">
          <figure className="rounded-[2rem] border border-ink/8 bg-paper p-8 shadow-soft sm:p-11">
            <MarcaCitacao className="h-6 w-8" />
            <blockquote className="mt-7 font-display text-[1.125rem] font-medium leading-[1.7] tracking-[-0.01em] text-ink md:columns-2 md:gap-10 lg:gap-12">
              {destaque.texto.split("\n\n").map((paragrafo, i) => (
                <p key={paragrafo} className={i > 0 ? "mt-5" : ""}>
                  {paragrafo}
                </p>
              ))}
            </blockquote>
            <figcaption className="mt-8 border-t border-ink/8 pt-6">
              <cite className="font-sans text-[15px] font-semibold not-italic text-ink">
                {destaque.nome}
              </cite>
              {destaque.detalhe && (
                <p className="mt-1 font-sans text-[13px] text-ink-muted">{destaque.detalhe}</p>
              )}
            </figcaption>
          </figure>

          {demais.length > 0 && (
            <ul className="mt-7 gap-7 md:columns-2 lg:columns-3" role="list">
              {demais.map((depoimento) => (
                <li key={depoimento.nome} className="mb-7 break-inside-avoid">
                  <figure className="rounded-[1.75rem] border border-ink/8 bg-paper p-8 shadow-soft">
                    <MarcaCitacao className="h-5 w-7" />
                    <blockquote className="mt-6 font-display text-[1.0625rem] font-medium leading-[1.7] tracking-[-0.01em] text-ink">
                      {depoimento.texto.split("\n\n").map((paragrafo, i) => (
                        <p key={paragrafo} className={i > 0 ? "mt-4" : ""}>
                          {paragrafo}
                        </p>
                      ))}
                    </blockquote>
                    <figcaption className="mt-7 border-t border-ink/8 pt-5">
                      <cite className="font-sans text-[15px] font-semibold not-italic text-ink">
                        {depoimento.nome}
                      </cite>
                      {depoimento.detalhe && (
                        <p className="mt-1 font-sans text-[13px] text-ink-muted">
                          {depoimento.detalhe}
                        </p>
                      )}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-14 flex justify-center">
            <CtaButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
