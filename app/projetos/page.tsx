import Navbar from "../components/Navbar";

export const metadata = {
  title: "Projetos - Triarquide",
  description: "Explore nossos projetos arquitetônicos",
};

export default function Projetos() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-display font-bold text-graphite mb-8">
            Projetos
          </h1>
          {/* Conteúdo dos projetos será adicionado aqui */}
        </div>
      </main>
    </>
  );
}
