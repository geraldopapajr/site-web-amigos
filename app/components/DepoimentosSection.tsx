"use client";

import { useState } from "react";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
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
    <section id="depoimentos" className="relative py-28 lg:py-36 bg-gradient-to-b from-white via-cream-light to-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
            Confiança
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-graphite mb-6">
            O que dizem minhas pacientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto" />
        </Reveal>

        <Reveal className="max-w-3xl mx-auto">
          <div
            className="relative bg-white rounded-2xl p-10 lg:p-12 border border-bronze/10 shadow-soft"
            role="group"
            aria-roledescription="carrossel"
            aria-label="Depoimentos de pacientes"
          >
            <blockquote>
              <p
                className="text-lg lg:text-xl text-graphite-light font-sans leading-relaxed"
                aria-live="polite"
              >
                &ldquo;{depoimento.texto}&rdquo;
              </p>
              <footer className="mt-8 border-t border-bronze/10 pt-6">
                <cite className="not-italic font-semibold text-graphite font-sans">{depoimento.nome}</cite>
                {depoimento.detalhe && (
                  <p className="text-sm text-bronze-dark/80 mt-1 font-sans">{depoimento.detalhe}</p>
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
                      className={`h-2.5 rounded-full transition-all ${
                        i === atual ? "w-7 bg-bronze" : "w-2.5 bg-bronze/25 hover:bg-bronze/50"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => ir(atual - 1)}
                    aria-label="Depoimento anterior"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-bronze/25 text-bronze-dark transition hover:border-bronze hover:bg-cream-light"
                  >
                    <span aria-hidden>←</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => ir(atual + 1)}
                    aria-label="Próximo depoimento"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-bronze/25 text-bronze-dark transition hover:border-bronze hover:bg-cream-light"
                  >
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 text-center">
            <CtaButton />
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />
    </section>
  );
}
