import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GeraTech — Dados e tecnologia para e-commerce",
  description:
    "A GeraTech transforma dados brutos em decisões que aumentam sua margem. Engenharia de dados, pipelines e modelos para otimizar precificação, estoque e promoções do seu e-commerce.",
  keywords: [
    "engenharia de dados",
    "ciência de dados",
    "e-commerce",
    "Mercado Livre",
    "precificação inteligente",
    "previsão de demanda",
    "data warehouse",
    "pipelines de dados",
    "GeraTech",
  ],
  authors: [{ name: "GeraTech" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "GeraTech — Gerando tecnologia para seu negócio",
    description:
      "Infraestrutura de dados e modelos que otimizam precificação, estoque e promoções do seu e-commerce.",
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
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
