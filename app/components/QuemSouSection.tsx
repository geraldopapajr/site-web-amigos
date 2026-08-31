import Link from "next/link";
import CtaButton from "./CtaButton";
import Portrait from "./Portrait";
import Reveal from "./Reveal";
import { CRN, NOME } from "../siteConfig";

/** Bloco 2 — Quem sou eu (resumo). A versão integral vive em /sobre. */
export default function QuemSouSection() {
  return (
    <section id="sobre" className="relative bg-sage-tint py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-soft">
            <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-16 lg:p-16">
              {/* PENDÊNCIA: foto em plano fechado, rosto em destaque. */}
              <Portrait shape="circle" sizes="(max-width: 1024px) 60vw, 300px" className="mx-auto w-full max-w-[260px] lg:max-w-none" />

              <div>
                <p className="eyebrow">Quem cuida de você</p>

                <blockquote className="mt-7">
                  <svg
                    viewBox="0 0 32 24"
                    className="h-6 w-8 text-sun"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M13 24V13.4C13 6.5 17.2 1.7 24 0l1.6 4C21.4 5.5 19 8.2 19 11.3h4.3V24H13Zm-13 0V13.4C0 6.5 4.2 1.7 11 0l1.6 4C8.4 5.5 6 8.2 6 11.3h4.3V24H0Z" />
                  </svg>
                  <p className="mt-6 font-display text-[clamp(1.35rem,2.4vw,1.85rem)] font-medium leading-[1.45] tracking-[-0.015em] text-ink">
                    Sou a Nutricionista {NOME}. Meu propósito como nutricionista é transformar sua relação
                    com a comida e com o corpo, sem culpa, sem restrições, e com muito mais liberdade e
                    confiança.
                  </p>
                </blockquote>

                <p className="mt-7 font-sans text-[13px] font-medium uppercase tracking-eyebrow text-ink-muted">
                  {NOME} · {CRN}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                  <CtaButton />
                  <Link
                    href="/sobre"
                    className="group inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-brand-dark transition-colors hover:text-brand"
                  >
                    Saiba mais sobre mim
                    <span className="transition-transform duration-300 ease-gentle group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
