import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contato — Fernanda Zanatelli",
  description: "Agende ou tire dúvidas sobre consultas com a nutricionista Fernanda Zanatelli.",
};

export default function Contato() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-graphite mb-6">Contato</h1>
          <p className="text-graphite-light font-sans leading-relaxed text-lg mb-6">
            Canais e informações na seção{" "}
            <a href="/#contato" className="text-bronze-dark font-medium hover:text-bronze underline underline-offset-2">
              Contato
            </a>{" "}
            da página inicial.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
