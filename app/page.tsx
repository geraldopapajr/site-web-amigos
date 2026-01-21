import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjetosSection from "./components/ProjetosSection";
import SobreSection from "./components/SobreSection";
import ContatoSection from "./components/ContatoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <Hero />
        <ProjetosSection />
        <SobreSection />
        <ContatoSection />
      </main>
    </>
  );
}
