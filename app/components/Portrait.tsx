import Image from "next/image";
import { FOTO_HERO, FOTO_PRECISA_TRATAMENTO, FOTO_RETRATO, NOME } from "../siteConfig";

/**
 * Retrato da Fernanda. A foto vem de siteConfig (FOTO_HERO / FOTO_RETRATO).
 * Enquanto FOTO_PRECISA_TRATAMENTO for true, aplica recorte fechado e vinheta
 * para disfarçar o fundo do ambiente da foto informal. Com o ensaio
 * profissional, basta desligar a flag.
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
  const src = circle ? FOTO_RETRATO : FOTO_HERO;

  const recorte = FOTO_PRECISA_TRATAMENTO
    ? circle
      ? "scale-[1.18] object-[50%_12%]"
      : "scale-[1.02] object-[50%_6%]"
    : "object-center";

  return (
    <figure className={`relative ${className}`}>
      {/* Filete deslocado, marca gráfica do sistema. */}
      <div
        className={`pointer-events-none absolute -bottom-4 -right-4 h-full w-full border border-brand/35 ${radius}`}
        aria-hidden
      />
      <div className={`relative overflow-hidden bg-paper-3 ${proporcao} ${radius}`}>
        <Image
          src={src}
          alt={`${NOME}, nutricionista`}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${recorte} ${FOTO_PRECISA_TRATAMENTO ? "saturate-[0.9]" : ""}`}
        />
        {FOTO_PRECISA_TRATAMENTO && (
          <>
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,transparent_34%,rgba(0,0,0,0.5)_100%)] mix-blend-multiply"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/55 via-brand/12 to-transparent mix-blend-multiply"
              aria-hidden
            />
          </>
        )}
      </div>
    </figure>
  );
}
