import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        /* Fundo — tech premium escuro */
        ink: "#0A0E1A",
        "ink-2": "#0D1220",
        surface: "#111827",
        "surface-2": "#151E30",
        /* Texto */
        mist: "#E6EDF3",
        "mist-muted": "#9BA8B8",
        /* Acentos de dados */
        cyan: "#22D3EE",
        "cyan-dark": "#0EA5C4",
        "data-green": "#34D399",
        violet: "#8B5CF6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 20px -2px rgba(0, 0, 0, 0.2)",
        glow: "0 0 40px -8px rgba(34, 211, 238, 0.35)",
        "glow-green": "0 0 40px -8px rgba(52, 211, 153, 0.3)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
