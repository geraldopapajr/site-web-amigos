/**
 * Logo GeraTech — mark de dados (barras ascendentes conectadas por um nó de pipeline)
 * + wordmark "Gera" (regular) / "Tech" (bold, gradiente).
 *
 * Uso:
 *   <Logo />                → mark + wordmark
 *   <Logo showWordmark={false} />  → só o mark (favicon, mobile compacto)
 */

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="GeraTech"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gt-grad" x1="0" y1="40" x2="40" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22D3EE" />
          <stop offset="1" stopColor="#34D399" />
        </linearGradient>
      </defs>
      {/* Barras ascendentes (dados crescendo) */}
      <rect x="4" y="24" width="6" height="12" rx="2" fill="#22D3EE" opacity="0.55" />
      <rect x="14" y="17" width="6" height="19" rx="2" fill="url(#gt-grad)" opacity="0.8" />
      <rect x="24" y="9" width="6" height="27" rx="2" fill="url(#gt-grad)" />
      {/* Nó de pipeline / linha de tendência conectando o topo das barras */}
      <path
        d="M7 24 L17 17 L27 9"
        stroke="#34D399"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27" cy="9" r="3.2" fill="#0A0E1A" stroke="#34D399" strokeWidth="2.2" />
    </svg>
  );
}

export default function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span className="font-display text-xl lg:text-2xl font-medium tracking-tight text-mist">
          Gera<span className="font-bold text-gradient">Tech</span>
        </span>
      )}
    </span>
  );
}
