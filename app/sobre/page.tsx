import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaButton from "../components/CtaButton";
import Reveal from "../components/Reveal";
import { CRN, NOME } from "../siteConfig";

export const metadata = {
  title: `Sobre mim — ${NOME}, Nutricionista`,
  description:
    "Nutricionista formada pela Universidade de Taubaté e pós-graduada em Comportamento Alimentar. Escuta ativa, sem culpa e sem restrições.",
};

/** Bloco 2 — página "Sobre mim" completa (texto integral). */
export default function Sobre() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-cream via-cream-light to-white pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
              Quem cuida de você
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-graphite mb-6">
              Sobre mim
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-4" />
            <p className="text-bronze-dark font-sans font-medium">
              {CRN} · Nutricionista
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-12 lg:gap-16 items-start">
            {/* PENDÊNCIA: foto profissional + galeria adicional para esta página. */}
            <Reveal className="relative group mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft ring-1 ring-bronze/15 bg-cream-dark">
                <Image
                  src="/fernanda-zanatelli.jpeg"
                  alt={`${NOME}, nutricionista`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 340px"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-bronze/15 rounded-2xl -z-10" />
            </Reveal>

            <Reveal delay={100} className="space-y-6 text-lg text-graphite-light font-sans leading-relaxed">
              <p>
                Sou <strong className="text-graphite font-semibold">{NOME}</strong>, nutricionista formada há
                05 anos pela Universidade de Taubaté e pós-graduada em Comportamento Alimentar. Acredito que
                alimentação saudável precisa ser possível no mundo real, com trabalho, família, imprevistos,
                não apenas em teorias irreais.
              </p>
              <p>
                Meu propósito como nutricionista é transformar sua relação com a comida e com o corpo, sem
                culpa, sem restrições, e com muito mais liberdade e confiança. Comer é um ato fisiológico, mas
                também emocional, social e cultural. Para além de uma prescrição dietética, meu objetivo é te
                ajudar a entender o porquê e o como você come.
              </p>
              <p>
                Minha escuta é ativa e presente: mais do que prescrever, meu papel é caminhar ao seu lado,
                entendendo o que a comida representa na sua história e ajustando o processo com você, não para
                você.
              </p>
              <p>
                Quero ser uma parceira nessa jornada, para que os resultados não sejam só números, mas mais
                qualidade de vida, leveza e liberdade no seu dia a dia.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-5">
                <CtaButton />
                <Link
                  href="/"
                  className="text-base font-sans font-medium text-bronze-dark underline underline-offset-4 decoration-bronze/40 transition hover:text-bronze hover:decoration-bronze"
                >
                  Voltar para a página inicial
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
