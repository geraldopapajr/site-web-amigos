"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sections = [
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToId(id);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-bronze/20 shadow-sm"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-3 hover:opacity-85 transition-opacity"
            aria-label="Ir para página inicial"
          >
            <span
              className="flex h-11 w-11 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-bronze/12 text-lg font-display font-semibold text-bronze-dark"
              aria-hidden
            >
              FZ
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg lg:text-xl font-display font-semibold text-graphite">
                Fernanda Zanatelli
              </span>
              <span className="text-xs font-sans font-medium uppercase tracking-wider text-bronze-dark/90">
                Nutricionista
              </span>
            </span>
          </Link>
          <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2 lg:gap-x-8" role="list">
            {sections.map((item) => {
              const isActive = pathname === "/" && activeSection === item.id;
              const href = pathname === "/" ? `#${item.id}` : `/#${item.id}`;
              return (
                <li key={item.id}>
                  <Link
                    href={href}
                    onClick={(e) => handleSectionClick(e, item.id)}
                    className={`text-sm lg:text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "text-graphite border-b-2 border-bronze pb-1 font-semibold"
                        : "text-graphite/80 hover:text-bronze hover:border-b-2 hover:border-bronze/30 pb-1"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
