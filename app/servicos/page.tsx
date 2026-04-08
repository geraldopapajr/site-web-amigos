import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Serviços — Fernanda Zanatelli",
  description: "Consulta nutricional, plano alimentar personalizado e acompanhamento.",
};

export default function Servicos() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-graphite mb-6">Serviços</h1>
          <p className="text-graphite-light font-sans leading-relaxed text-lg mb-6">
            Detalhes dos serviços estão na{" "}
            <a href="/#servicos" className="text-bronze-dark font-medium hover:text-bronze underline underline-offset-2">
              página inicial
            </a>
            . Lá você encontra consulta inicial, plano alimentar e acompanhamento.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
