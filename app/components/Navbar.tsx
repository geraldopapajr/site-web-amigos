"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projetos", "sobre", "contato"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-bronze/30 shadow-sm"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Ir para página inicial"
          >
            <div className="relative w-12 h-12 lg:w-14 lg:h-14">
              <Image
                src="/hero-image.jpg.png"
                alt="Logo Triarquide"
                fill
                className="object-contain"
                sizes="56px"
                priority
                quality={90}
              />
            </div>
            <span className="text-xl lg:text-2xl font-display font-semibold text-graphite hidden sm:block">
              Triarquide
            </span>
          </Link>
          <ul className="flex space-x-6 lg:space-x-10" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.href || (pathname === "/" && activeSection === item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`text-base lg:text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "text-graphite border-b-2 border-bronze pb-1.5 font-semibold"
                        : "text-graphite/80 hover:text-bronze hover:border-b-2 hover:border-bronze/30 pb-1.5"
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
