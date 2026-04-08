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
  title: "Fernanda Zanatelli — Nutricionista",
  description:
    "Consultoria nutricional personalizada com base científica. Fernanda Zanatelli, nutricionista: reeducação alimentar, objetivos de saúde e acompanhamento humanizado.",
  keywords: [
    "nutricionista",
    "nutrição",
    "consulta nutricional",
    "plano alimentar",
    "Fernanda Zanatelli",
  ],
  authors: [{ name: "Fernanda Zanatelli" }],
  openGraph: {
    title: "Fernanda Zanatelli — Nutricionista",
    description:
      "Consultoria nutricional personalizada com foco em resultados sustentáveis e bem-estar.",
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
