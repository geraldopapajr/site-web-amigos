import Link from "next/link";
import Logo from "./Logo";
import { CRN, CTA_LABEL, DEPOIMENTOS, INSTAGRAM_URL, NOME, WHATSAPP_URL } from "../siteConfig";

const navegacao = [
  { href: "/sobre", label: "Sobre mim" },
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#metodo", label: "Método" },
  ...(DEPOIMENTOS.length > 0 ? [{ href: "/#depoimentos", label: "Depoimentos" }] : []),
  { href: "/#contato", label: "Contato" },
];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-brand-dark">
      <div className="container-page py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="paper" />
            <p className="mt-6 max-w-[34ch] text-[15px] leading-relaxed text-paper/60">
              Nutrição comportamental com escuta ativa e acolhimento. Atendimento online, por
              videochamada.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-paper/45">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3" role="list">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-paper/45">
              Contato
            </h2>
            <ul className="mt-5 space-y-3" role="list">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-paper/75 transition-colors hover:text-paper"
                >
                  {CTA_LABEL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-paper/75 transition-colors hover:text-paper"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-8 text-[13px] text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {NOME} · Nutricionista
          </p>
          <p>{CRN}</p>
        </div>
      </div>
    </footer>
  );
}
