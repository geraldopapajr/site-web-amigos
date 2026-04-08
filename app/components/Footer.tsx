export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-graphite-dark text-cream/85 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-sans">
        <p>
          © {year} Fernanda Zanatelli · Nutricionista
        </p>
        <p className="text-cream/60 text-center sm:text-right">Registro profissional: CRN-X XXXXX</p>
      </div>
    </footer>
  );
}
