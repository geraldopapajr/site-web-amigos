import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "../siteConfig";

/** Bloco 6 — Contato. */
export default function ContatoSection() {
  return (
    <section id="contato" className="textured relative overflow-hidden bg-olive-dark py-24 sm:py-28 lg:py-36">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,164,74,0.14),transparent_62%)]"
        aria-hidden
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow justify-center text-ocre before:bg-ocre/40">Próximo passo</p>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-cream">
              Vamos dar o primeiro passo?
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <p className="mx-auto mt-8 max-w-measure text-pretty text-lg leading-relaxed text-cream/75">
              Mudar a forma como nos alimentamos é um processo corajoso. Se você sente que é o momento de
              cuidar de si com mais carinho e menos cobrança, estou aqui para te acompanhar.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-12">
              <CtaButton size="lg" variant="cream" />
            </div>

            <div className="mx-auto mt-14 grid max-w-2xl gap-4 sm:grid-cols-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-cream/15 px-6 py-4 text-left transition-colors duration-300 hover:border-cream/40 hover:bg-cream/5"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-ocre" fill="currentColor" aria-hidden>
                  <path d="M12 2.5A9.5 9.5 0 0 0 3.9 17l-1.4 4.5L7.1 20A9.5 9.5 0 1 0 12 2.5Zm5.5 12.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a11 11 0 0 1-5.7-5c-.4-.7-.8-1.6-.8-2.5s.5-1.6.8-1.9c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.3 1.6 2 .9.8 1.7 1.1 2 1.2.2.1.4 0 .5-.1l.7-.9c.2-.2.4-.1.6 0l1.9.9c.3.2.3.4.2.6Z" />
                </svg>
                <span>
                  <span className="block font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-cream/50">
                    WhatsApp comercial
                  </span>
                  <span className="mt-1 block font-sans text-[15px] font-medium text-cream transition-colors group-hover:text-white">
                    Agende sua consulta
                  </span>
                </span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-cream/15 px-6 py-4 text-left transition-colors duration-300 hover:border-cream/40 hover:bg-cream/5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-ocre"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
                </svg>
                <span>
                  <span className="block font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-cream/50">
                    Instagram
                  </span>
                  <span className="mt-1 block font-sans text-[15px] font-medium text-cream transition-colors group-hover:text-white">
                    {INSTAGRAM_HANDLE}
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
