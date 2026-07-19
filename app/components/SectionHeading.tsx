/** Cabeçalho de seção reutilizável: eyebrow → título → underline em gradiente → intro. */

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
};

export default function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="text-center mb-14 lg:mb-20">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-mist text-balance">
        {title}
      </h2>
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan to-data-green" />
      {intro && (
        <p className="mx-auto mt-6 max-w-3xl text-lg text-mist-muted font-sans leading-relaxed text-balance">
          {intro}
        </p>
      )}
    </div>
  );
}
