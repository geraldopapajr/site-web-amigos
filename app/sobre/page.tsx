import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaButton from "../components/CtaButton";
import Portrait from "../components/Portrait";
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

      <main>
        <section className="textured relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
          <div
            className="pointer-events-none absolute -top-40 left-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,164,74,0.15),transparent_65%)]"
            aria-hidden
          />

          <div className="container-page relative">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="eyebrow">Quem cuida de você</p>
                  <h1 className="mt-6 font-display text-[clamp(2.4rem,5.2vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
                    Sobre mim
                  </h1>
                  <p className="mt-6 font-sans text-[13px] font-medium uppercase tracking-eyebrow text-ink-muted">
                    {NOME} · Nutricionista · {CRN}
                  </p>
                </Reveal>

                <Reveal delay={100} className="prose-fz mt-12 max-w-measure space-y-6">
                  <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[3.6rem] first-letter:font-semibold first-letter:leading-[0.82] first-letter:text-clay">
                    Sou <strong>{NOME}</strong>, nutricionista formada há 05 anos pela Universidade de
                    Taubaté e pós-graduada em Comportamento Alimentar. Acredito que alimentação saudável
                    precisa ser possível no mundo real, com trabalho, família, imprevistos, não apenas em
                    teorias irreais.
                  </p>
                  <p>
                    Meu propósito como nutricionista é transformar sua relação com a comida e com o corpo,
                    sem culpa, sem restrições, e com muito mais liberdade e confiança. Comer é um ato
                    fisiológico, mas também emocional, social e cultural. Para além de uma prescrição
                    dietética, meu objetivo é te ajudar a entender o porquê e o como você come.
                  </p>
                  <p>
                    Minha escuta é ativa e presente: mais do que prescrever, meu papel é caminhar ao seu
                    lado, entendendo o que a comida representa na sua história e ajustando o processo com
                    você, não para você.
                  </p>
                  <p>
                    Quero ser uma parceira nessa jornada, para que os resultados não sejam só números, mas
                    mais qualidade de vida, leveza e liberdade no seu dia a dia.
                  </p>
                </Reveal>

                <Reveal delay={160}>
                  <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
                    <CtaButton size="lg" />
                    <Link
                      href="/"
                      className="font-sans text-[15px] font-medium text-ink-soft underline decoration-ink/20 underline-offset-[6px] transition-colors hover:text-clay hover:decoration-clay"
                    >
                      Voltar para a página inicial
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* PENDÊNCIA: ensaio profissional + galeria adicional para esta página. */}
              <Reveal delay={80} className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <Portrait
                    priority
                    className="mx-auto max-w-[340px] lg:mr-0"
                    sizes="(max-width: 1024px) 70vw, 340px"
                  />
                  <p className="mt-10 border-l border-ocre/60 pl-5 font-display text-[19px] leading-[1.5] tracking-[-0.01em] text-ink-soft">
                    Mais do que prescrever, meu papel é caminhar ao seu lado.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
