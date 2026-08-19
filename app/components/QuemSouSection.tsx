import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { CRN, NOME } from "../siteConfig";

/** Bloco 2 — Quem sou eu (resumo). A versão completa vive em /sobre. */
export default function QuemSouSection() {
  return (
    <section id="sobre" className="relative py-28 lg:py-36 bg-gradient-to-b from-cream via-cream-light to-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
              Quem cuida de você
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mt-6" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* PENDÊNCIA: foto profissional em plano fechado, rosto em destaque. */}
            <Reveal className="relative group mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] max-h-[480px] rounded-2xl overflow-hidden shadow-soft ring-1 ring-bronze/15 bg-cream-dark">
                <Image
                  src="/fernanda-zanatelli.jpeg"
                  alt={`${NOME}, nutricionista`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-bronze/10 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-bronze/15 rounded-2xl -z-10 group-hover:border-bronze/25 transition-colors" />
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-8">
              <p className="text-lg lg:text-xl text-graphite-light font-sans leading-relaxed">
                Sou a Nutricionista <strong className="text-graphite font-semibold">{NOME}</strong>. Meu
                propósito como nutricionista é transformar sua relação com a comida e com o corpo, sem
                culpa, sem restrições, e com muito mais liberdade e confiança.
              </p>

              <Link
                href="/sobre"
                className="inline-flex w-fit items-center gap-2 text-base font-sans font-semibold text-bronze-dark underline underline-offset-4 decoration-bronze/40 transition hover:text-bronze hover:decoration-bronze"
              >
                Saiba mais sobre mim
                <span aria-hidden>→</span>
              </Link>

              <div>
                <CtaButton />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />
    </section>
  );
}
