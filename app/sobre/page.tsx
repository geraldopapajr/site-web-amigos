import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sobre — Fernanda Zanatelli",
  description: "Conheça a nutricionista Fernanda Zanatelli e sua abordagem de atendimento.",
};

export default function Sobre() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-graphite mb-6">Sobre</h1>
          <p className="text-graphite-light font-sans leading-relaxed text-lg mb-6">
            O conteúdo completo está na página inicial, na seção{" "}
            <a href="/#sobre" className="text-bronze-dark font-medium hover:text-bronze underline underline-offset-2">
              Sobre mim
            </a>
            . Use o menu para navegar ou volte à{" "}
            <a href="/" className="text-bronze-dark font-medium hover:text-bronze underline underline-offset-2">
              página inicial
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
