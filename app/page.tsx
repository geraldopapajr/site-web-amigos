import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemaSection from "./components/ProblemaSection";
import ComoFuncionaSection from "./components/ComoFuncionaSection";
import ServicosSection from "./components/ServicosSection";
import CaseSection from "./components/CaseSection";
import ParaQuemSection from "./components/ParaQuemSection";
import ContatoSection from "./components/ContatoSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-ink">
        <Hero />
        <ProblemaSection />
        <ComoFuncionaSection />
        <ServicosSection />
        <CaseSection />
        <ParaQuemSection />
        <ContatoSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
