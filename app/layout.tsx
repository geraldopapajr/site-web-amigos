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
  icons: { icon: "/favicon.svg" },
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
