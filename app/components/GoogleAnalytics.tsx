import Script from "next/script";

import { GA_MEASUREMENT_ID } from "../siteConfig";

/**
 * Google tag (gtag.js) — código enviado pela agência de marketing.
 * Renderizado pelo layout raiz, portanto presente em todas as páginas.
 * Em produção o Next injeta as duas tags no <head> do documento.
 */
export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
