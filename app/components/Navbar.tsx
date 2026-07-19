"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { whatsappHref } from "../siteConfig";

const sections = [
  { id: "o-que-faco", label: "O que faço" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "case", label: "Case" },
  { id: "contato", label: "Contato" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
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
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      scrollToId(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            onClick={(e) => {
              setMenuOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="hover:opacity-85 transition-opacity"
            aria-label="Ir para página inicial"
          >
            <Logo />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7" role="list">
              {sections.map((item) => {
                const isActive = pathname === "/" && activeSection === item.id;
                const href = pathname === "/" ? `#${item.id}` : `/#${item.id}`;
                return (
                  <li key={item.id}>
                    <Link
                      href={href}
                      onClick={(e) => handleSectionClick(e, item.id)}
                      className={`text-sm font-medium transition-colors ${
                        isActive ? "text-cyan" : "text-mist-muted hover:text-mist"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-data-green"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-mist"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform ${
                  menuOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink/95 backdrop-blur-lg border-t border-white/10 px-4 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {sections.map((item) => {
              const href = pathname === "/" ? `#${item.id}` : `/#${item.id}`;
              return (
                <li key={item.id}>
                  <Link
                    href={href}
                    onClick={(e) => handleSectionClick(e, item.id)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-mist-muted hover:bg-white/5 hover:text-mist"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-cyan px-5 py-3 text-center text-base font-semibold text-ink"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
