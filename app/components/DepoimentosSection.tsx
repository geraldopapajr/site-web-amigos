"use client";

import { useState } from "react";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { DEPOIMENTOS } from "../siteConfig";

/**
 * Bloco 5 — Depoimentos (carrossel).
 * Cada slide traz uma citação com foco em autonomia, ausência de julgamento e
 * processo — não apenas resultado de peso.
 *
 * PENDÊNCIA: enquanto `DEPOIMENTOS` (app/siteConfig.ts) estiver vazio, a seção
 * não é renderizada. Basta preencher a lista com os depoimentos reais.
 */
export default function DepoimentosSection() {
  const [atual, setAtual] = useState(0);
  const total = DEPOIMENTOS.length;

  if (total === 0) return null;

  const ir = (destino: number) => setAtual((destino + total) % total);
  const depoimento = DEPOIMENTOS[atual];

  return (
    <section id="depoimentos" className="relative bg-cream-100 py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading eyebrow="Confiança" title="O que dizem minhas pacientes" align="center" />

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div
            className="relative rounded-[2rem] border border-ink/8 bg-cream p-9 shadow-soft sm:p-12"
            role="group"
            aria-roledescription="carrossel"
            aria-label="Depoimentos de pacientes"
          >
            <svg viewBox="0 0 32 24" className="h-6 w-8 text-ocre" fill="currentColor" aria-hidden>
              <path d="M13 24V13.4C13 6.5 17.2 1.7 24 0l1.6 4C21.4 5.5 19 8.2 19 11.3h4.3V24H13Zm-13 0V13.4C0 6.5 4.2 1.7 11 0l1.6 4C8.4 5.5 6 8.2 6 11.3h4.3V24H0Z" />
            </svg>

            <blockquote>
              <p
                className="mt-7 font-display text-[clamp(1.25rem,2.2vw,1.65rem)] font-medium leading-[1.5] tracking-[-0.015em] text-ink"
                aria-live="polite"
              >
                {depoimento.texto}
              </p>
              <footer className="mt-8 border-t border-ink/8 pt-6">
                <cite className="font-sans text-[15px] font-semibold not-italic text-ink">
                  {depoimento.nome}
                </cite>
                {depoimento.detalhe && (
                  <p className="mt-1 font-sans text-[13px] text-ink-muted">{depoimento.detalhe}</p>
                )}
              </footer>
            </blockquote>

            {total > 1 && (
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex gap-2" role="tablist" aria-label="Escolher depoimento">
                  {DEPOIMENTOS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === atual}
                      aria-label={`Depoimento ${i + 1} de ${total}`}
                      onClick={() => setAtual(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ease-gentle ${
                        i === atual ? "w-8 bg-clay" : "w-1.5 bg-ink/20 hover:bg-clay/50"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => ir(atual - 1)}
                    aria-label="Depoimento anterior"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition-colors hover:border-clay hover:text-clay"
                  >
                    <span aria-hidden>←</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => ir(atual + 1)}
                    aria-label="Próximo depoimento"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition-colors hover:border-clay hover:text-clay"
                  >
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 flex justify-center">
            <CtaButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
