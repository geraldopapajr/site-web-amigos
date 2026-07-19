import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contato — GeraTech",
  description:
    "Fale com a GeraTech pelo WhatsApp ou e-mail e solicite um diagnóstico gratuito da sua operação de e-commerce.",
};

export default function Contato() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-mist mb-6">Contato</h1>
          <p className="text-mist-muted font-sans leading-relaxed text-lg">
            Fale com a GeraTech na{" "}
            <a href="/#contato" className="text-cyan font-medium hover:text-data-green underline underline-offset-2">
              página inicial
            </a>{" "}
            — WhatsApp ou e-mail — e solicite um diagnóstico gratuito da sua operação.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
