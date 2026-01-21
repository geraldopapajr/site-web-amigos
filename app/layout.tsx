import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Triarquide - Arquitetura Moderna",
  description: "Site de arquitetura moderno e minimalista",
  keywords: ["arquitetura", "design", "projetos arquitetônicos"],
  authors: [{ name: "Triarquide" }],
  openGraph: {
    title: "Triarquide - Arquitetura Moderna",
    description: "Site de arquitetura moderno e minimalista",
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
      </body>
    </html>
  );
}
