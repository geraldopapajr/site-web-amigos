import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicosSection from "./components/ServicosSection";
import SobreSection from "./components/SobreSection";
import DepoimentosSection from "./components/DepoimentosSection";
import ContatoSection from "./components/ContatoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <Hero />
        <ServicosSection />
        <SobreSection />
        <DepoimentosSection />
        <ContatoSection />
      </main>
      <Footer />
    </>
  );
}
