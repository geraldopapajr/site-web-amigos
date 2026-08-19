import { CRN, CTA_LABEL, INSTAGRAM_URL, NOME, PROFISSAO, WHATSAPP_URL } from "../siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-graphite-dark text-cream/85 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm font-sans">
        <div className="text-center sm:text-left">
          <p>
            © {year} {NOME} · {PROFISSAO}
          </p>
          <p className="text-cream/60 mt-1">{CRN}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cream/85 transition-colors hover:text-white"
          >
            Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cream/85 transition-colors hover:text-white"
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </footer>
  );
}
