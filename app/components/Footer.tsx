import Logo from "./Logo";
import { whatsappHref, emailHref, CONTACT_EMAIL } from "../siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink-2 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr,1fr,1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-mist-muted leading-relaxed">
              Gerando tecnologia para seu negócio. Infraestrutura de dados e modelos que
              transformam dados brutos em decisões que aumentam sua margem.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-mist-muted">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2 text-sm" role="list">
              {[
                { href: "#o-que-faco", label: "O que faço" },
                { href: "#como-funciona", label: "Como funciona" },
                { href: "#case", label: "Case" },
                { href: "#contato", label: "Contato" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-mist-muted hover:text-cyan transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-mist-muted">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 text-sm" role="list">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mist-muted hover:text-cyan transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={emailHref} className="text-mist-muted hover:text-cyan transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-mist-muted/70">
          <p>© {year} GeraTech. Todos os direitos reservados.</p>
          <p className="font-mono">Gerando tecnologia para seu negócio.</p>
        </div>
      </div>
    </footer>
  );
}
