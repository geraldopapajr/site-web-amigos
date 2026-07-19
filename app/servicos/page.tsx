import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "O que faço — GeraTech",
  description:
    "Precificação inteligente, gestão de estoque, promoções com ROI, infraestrutura de dados, dashboards e modelos sob medida para e-commerce.",
};

export default function Servicos() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-mist mb-6">O que faço</h1>
          <p className="text-mist-muted font-sans leading-relaxed text-lg">
            Os serviços da GeraTech estão detalhados na{" "}
            <a href="/#o-que-faco" className="text-cyan font-medium hover:text-data-green underline underline-offset-2">
              página inicial
            </a>
            : precificação inteligente, gestão de estoque & supply, promoções com ROI,
            infraestrutura de dados, dashboards e modelos sob medida.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
