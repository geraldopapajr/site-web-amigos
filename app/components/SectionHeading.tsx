import Reveal from "./Reveal";

/**
 * Cabeçalho padrão de bloco: rótulo, título e texto de abertura.
 * Mantém a mesma hierarquia tipográfica em todas as seções.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  id?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className={`mt-5 font-display text-[clamp(2rem,4.2vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink ${
          centered ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`lead mt-6 text-pretty ${centered ? "mx-auto max-w-measure" : "max-w-measure"}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
