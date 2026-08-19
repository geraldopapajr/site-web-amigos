import Image from "next/image";
import { NOME } from "../siteConfig";

/**
 * Retrato da Fernanda.
 * PENDÊNCIA: a foto atual é informal e feita em ambiente noturno — está em
 * recorte fechado no rosto, com vinheta e tom quente para apagar o fundo.
 * Ao receber o ensaio profissional, trocar o arquivo e remover os overlays.
 */
export default function Portrait({
  shape = "arch",
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 80vw, 420px",
}: {
  shape?: "arch" | "circle";
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const circle = shape === "circle";
  const radius = circle ? "rounded-full" : "rounded-arch";
  const proporcao = circle ? "aspect-square" : "aspect-[4/5]";

  return (
    <figure className={`relative ${className}`}>
      {/* Filete deslocado, marca gráfica do sistema. */}
      <div
        className={`pointer-events-none absolute -bottom-4 -right-4 h-full w-full border border-ocre/45 ${radius}`}
        aria-hidden
      />
      <div className={`relative overflow-hidden bg-cream-200 ${proporcao} ${radius}`}>
        <Image
          src="/fernanda-zanatelli.jpeg"
          alt={`${NOME}, nutricionista`}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover saturate-[0.88] ${
            circle ? "scale-[1.18] object-[50%_12%]" : "scale-[1.02] object-[50%_6%]"
          }`}
        />
        {/* Vinheta + tom quente: apagam o fundo do ambiente e integram a foto à paleta. */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,transparent_34%,rgba(37,44,33,0.55)_100%)] mix-blend-multiply"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-olive-dark/55 via-clay/12 to-transparent mix-blend-multiply"
          aria-hidden
        />
      </div>
    </figure>
  );
}
