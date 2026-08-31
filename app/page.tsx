import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuemSouSection from "./components/QuemSouSection";
import EspecialidadesSection from "./components/EspecialidadesSection";
import MetodoSection from "./components/MetodoSection";
import DepoimentosSection from "./components/DepoimentosSection";
import ContatoSection from "./components/ContatoSection";
import Footer from "./components/Footer";

// Ordem dos blocos conforme o documento de copy final (Vincla Studio).
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <Hero />
        <QuemSouSection />
        <EspecialidadesSection />
        <MetodoSection />
        <DepoimentosSection />
        <ContatoSection />
      </main>
      <Footer />
    </>
  );
}
