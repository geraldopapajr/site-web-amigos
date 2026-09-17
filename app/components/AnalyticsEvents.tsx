"use client";

import { useEffect } from "react";

import { GA_MEASUREMENT_ID } from "../siteConfig";

/**
 * Rastreio de cliques nos links de saída (WhatsApp e Instagram).
 *
 * Usa um único listener no documento em vez de um onClick em cada botão: os
 * componentes seguem sendo Server Components e qualquer CTA novo passa a ser
 * medido automaticamente, sem precisar lembrar de instrumentar.
 *
 * Eventos enviados ao GA4:
 *   click_whatsapp  — todos os CTAs "Agende sua consulta", o botão flutuante
 *                     e o link do bloco Contato
 *   click_instagram — links do perfil no hero, contato e rodapé
 *
 * Parâmetros: section (de onde o clique veio), link_text e link_url.
 */

type Gtag = (...args: unknown[]) => void;

/** De onde na página o clique partiu — só para separar os CTAs no relatório. */
function origemDoClique(link: HTMLAnchorElement): string {
  if (link.closest("header")) return "menu";
  if (link.closest("footer")) return "rodape";

  const secao = link.closest<HTMLElement>("section");
  if (secao?.id) return secao.id;
  // O hero é a primeira section da página e não tem id.
  if (secao && secao === document.querySelector("section")) return "hero";

  // O botão flutuante fica solto no layout, fora de header/footer/section.
  if (link.closest("[data-whatsapp-float]")) return "botao-flutuante";

  return "outro";
}

export default function AnalyticsEvents() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    function aoClicar(evento: MouseEvent) {
      const alvo = evento.target as HTMLElement | null;
      const link = alvo?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.href;
      const nome = /wa\.me|whatsapp\.com/i.test(href)
        ? "click_whatsapp"
        : /instagram\.com/i.test(href)
          ? "click_instagram"
          : null;
      if (!nome) return;

      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (typeof gtag !== "function") return;

      gtag("event", nome, {
        section: origemDoClique(link),
        link_text: (link.innerText || link.getAttribute("aria-label") || "").trim().slice(0, 100),
        link_url: href,
      });
    }

    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  return null;
}
