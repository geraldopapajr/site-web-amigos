import { CTA_LABEL, WHATSAPP_URL } from "../siteConfig";

/**
 * Bloco Global — ícone do WhatsApp fixo no canto da tela durante toda a rolagem,
 * visível em todos os blocos (não só no rodapé).
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={CTA_LABEL + " pelo WhatsApp"}
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#1FB855] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.29-.48-2.46-1.52-.91-.81-1.52-1.81-1.7-2.11-.17-.3-.02-.47.13-.62.15-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.06 3.29 5.02 4.49.7.3 1.25.48 1.68.62.7.22 1.35.19 1.86.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
        <path d="M12.04 2.5C6.79 2.5 2.53 6.76 2.53 12c0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.86-1.27a9.46 9.46 0 0 0 4.68 1.22c5.25 0 9.51-4.26 9.51-9.5S17.29 2.5 12.04 2.5zm0 17.32c-1.5 0-2.98-.4-4.26-1.16l-.31-.18-3.05.8.81-2.97-.19-.31a7.79 7.79 0 0 1-1.2-4.15c0-4.31 3.51-7.82 7.82-7.82 4.31 0 7.82 3.51 7.82 7.82s-3.51 7.83-7.82 7.83z" />
      </svg>
    </a>
  );
}
