import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "../siteConfig";

/** Bloco 6 — Contato. */
export default function ContatoSection() {
  return (
    <section id="contato" className="relative py-28 lg:py-36 bg-gradient-to-b from-cream-light via-cream to-cream-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-sm font-sans font-semibold text-bronze-dark uppercase tracking-wider">
              Próximo passo
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-graphite mb-6">
              Vamos dar o primeiro passo?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-10" />
          </Reveal>

          <Reveal delay={80}>
            <p className="text-lg lg:text-xl text-graphite-light font-sans leading-relaxed text-balance">
              Mudar a forma como nos alimentamos é um processo corajoso. Se você sente que é o momento de
              cuidar de si com mais carinho e menos cobrança, estou aqui para te acompanhar.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-12">
              <CtaButton size="lg" />
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-4 text-base font-sans">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-bronze-dark transition-colors hover:text-bronze"
              >
                WhatsApp comercial
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-bronze-dark transition-colors hover:text-bronze"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
