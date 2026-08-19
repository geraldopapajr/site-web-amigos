import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { NOME } from "./siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const description =
  "Recupere o prazer em comer e faça as pazes com o seu corpo através de um olhar humano, gentil e sem julgamentos. Nutrição comportamental com atendimento online.";

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
  openGraph: {
    title: `${NOME} — Nutricionista`,
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
