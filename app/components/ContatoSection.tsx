import { whatsappHref, emailHref, CONTACT_EMAIL } from "../siteConfig";

export default function ContatoSection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 glow-cyan"
        aria-hidden
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan">
          Vamos conversar
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-mist text-balance">
          Vamos gerar tecnologia{" "}
          <span className="text-gradient">pro seu negócio?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-mist-muted leading-relaxed text-balance">
          Me chama no WhatsApp para um diagnóstico gratuito da sua operação. Em uma
          conversa a gente já identifica onde os seus dados podem gerar mais margem.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-8 py-3.5 text-base font-semibold text-ink shadow-glow transition hover:bg-data-green"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Falar no WhatsApp
          </a>
          <a
            href={emailHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-mist transition hover:border-cyan/50 hover:bg-white/10"
          >
            Enviar e-mail
          </a>
        </div>

        <p className="mt-6 font-mono text-sm text-mist-muted">{CONTACT_EMAIL}</p>
      </div>
    </section>
  );
}
