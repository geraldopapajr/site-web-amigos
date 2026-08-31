"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CTA_LABEL, DEPOIMENTOS, WHATSAPP_URL } from "../siteConfig";

// Ordem dos blocos do site. Depoimentos (Bloco 5) só entra no menu quando
// houver depoimentos reais cadastrados em siteConfig.
const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "especialidades", label: "Especialidades" },
  { id: "metodo", label: "Método" },
  ...(DEPOIMENTOS.length > 0 ? [{ id: "depoimentos", label: "Depoimentos" }] : []),
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // No topo (ainda no hero) nenhum item do menu fica marcado.
      if (window.scrollY < 300) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Seção ativa via IntersectionObserver — sem cálculo de offset no scroll.
  useEffect(() => {
    if (!isHome || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visivel = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visivel) setActive(visivel.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  // Menu mobile: trava a rolagem do fundo e fecha no Esc.
  useEffect(() => {
    if (!menuAberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAberto(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuAberto]);

  const hrefDe = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-gentle ${
        scrolled || menuAberto
          ? "border-b border-ink/8 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page" aria-label="Navegação principal">
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-500 ease-gentle ${
            scrolled ? "h-[68px]" : "h-[84px]"
          }`}
        >
          <Link
            href="/"
            className="transition-opacity hover:opacity-70"
            aria-label="Ir para a página inicial"
            onClick={() => setMenuAberto(false)}
          >
            <Logo />
          </Link>

          <ul className="hidden items-center gap-9 md:flex" role="list">
            {sections.map((item) => {
              const isActive = isHome && active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={hrefDe(item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative font-sans text-[14px] font-medium transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-brand after:transition-all after:duration-300 after:ease-gentle ${
                      isActive
                        ? "text-ink after:w-full"
                        : "text-ink-soft after:w-0 hover:text-brand-dark hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-brand px-5 py-2.5 font-sans text-[13px] font-semibold text-paper shadow-cta transition-colors duration-300 hover:bg-brand-dark sm:inline-flex"
            >
              {CTA_LABEL}
            </a>

            <button
              type="button"
              onClick={() => setMenuAberto((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors hover:border-brand hover:text-brand md:hidden"
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ease-gentle ${
                    menuAberto ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200 ${
                    menuAberto ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ease-gentle ${
                    menuAberto ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Painel de navegação mobile */}
      <div
        id="menu-mobile"
        hidden={!menuAberto}
        className="border-t border-ink/8 bg-paper/95 backdrop-blur-md md:hidden"
      >
        <ul className="container-page flex flex-col py-4" role="list">
          {sections.map((item) => (
            <li key={item.id} className="border-b border-ink/8 last:border-0">
              <Link
                href={hrefDe(item.id)}
                onClick={() => setMenuAberto(false)}
                className="block py-4 font-display text-xl text-ink transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-6 pb-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuAberto(false)}
              className="flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 font-sans text-[15px] font-semibold text-paper"
            >
              {CTA_LABEL}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
