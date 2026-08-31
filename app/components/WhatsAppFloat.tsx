import { CTA_LABEL, WHATSAPP_URL } from "../siteConfig";

/**
 * Bloco Global — WhatsApp fixo no canto da tela durante toda a rolagem,
 * visível em todos os blocos (não só no rodapé). O rótulo se abre no hover
 * em telas grandes; no mobile fica só o ícone, para não cobrir conteúdo.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${CTA_LABEL} pelo WhatsApp`}
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pl-[14px] pr-[14px] text-paper shadow-lift transition-all duration-500 ease-gentle hover:bg-[#1FB855] sm:bottom-8 sm:right-8"
    >
      <span className="flex h-12 w-8 items-center justify-center sm:h-13">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M12 2.5A9.5 9.5 0 0 0 3.9 17l-1.4 4.5L7.1 20A9.5 9.5 0 1 0 12 2.5Zm5.5 12.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a11 11 0 0 1-5.7-5c-.4-.7-.8-1.6-.8-2.5s.5-1.6.8-1.9c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.3 1.6 2 .9.8 1.7 1.1 2 1.2.2.1.4 0 .5-.1l.7-.9c.2-.2.4-.1.6 0l1.9.9c.3.2.3.4.2.6Z" />
        </svg>
      </span>
      <span className="hidden max-w-0 whitespace-nowrap font-sans text-[14px] font-semibold opacity-0 transition-all duration-500 ease-gentle group-hover:max-w-[190px] group-hover:pl-3 group-hover:pr-1 group-hover:opacity-100 lg:block">
        {CTA_LABEL}
      </span>
    </a>
  );
}
