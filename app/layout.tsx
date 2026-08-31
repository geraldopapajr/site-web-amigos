import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { NOME } from "./siteConfig";

// Tipografia do sistema "Terra & Oliva": serif macia para títulos, sans neutra para leitura.
const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const description =
  "Recupere o prazer em comer e faça as pazes com o seu corpo através de um olhar humano, gentil e sem julgamentos. Nutrição comportamental, atendimento online.";

export const metadata: Metadata = {
  title: `${NOME} — Nutricionista`,
  description,
  keywords: [
    "nutricionista",
    "nutrição comportamental",
    "consulta nutricional online",
    "plano alimentar",
    "reeducação alimentar",
    NOME,
  ],
  authors: [{ name: NOME }],
  // Icones gerados de public/logo.png por scripts/gera-favicon.py
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: `${NOME} — Nutricionista`,
    description,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${display.variable}`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
