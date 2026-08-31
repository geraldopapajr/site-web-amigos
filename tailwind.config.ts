import type { Config } from "tailwindcss";

/**
 * Paleta da marca (definida pela Fernanda):
 *   #6f4532 marrom · #593f28 marrom escuro · #fde790 amarelo
 *   #a6c499 verde · #000000 preto · #ffffff branco
 *
 * Os tons "-tint" e os cinzas são lavagens das mesmas cores sobre branco,
 * usados para fundo de seção e texto de leitura — não são cores novas.
 */
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Branco e lavagens de fundo
        paper: {
          DEFAULT: "#FFFFFF",
          2: "#FBF9F5", // marrom a 3% — alterna as seções sem sujar o branco
          3: "#F2EDE6",
        },
        // Marrom da marca
        brand: {
          DEFAULT: "#6F4532",
          dark: "#593F28",
          light: "#8A5A42",
          tint: "#F4EBE6",
        },
        // Amarelo
        sun: {
          DEFAULT: "#FDE790",
          tint: "#FEF7DE",
        },
        // Verde
        sage: {
          DEFAULT: "#A6C499",
          dark: "#6E8C61",
          tint: "#F0F5ED",
        },
        // Preto e níveis de leitura
        ink: {
          DEFAULT: "#000000",
          soft: "#3F3F3F",
          muted: "#6E6E6E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.16em",
      },
      borderRadius: {
        arch: "999px 999px 32px 32px",
      },
      maxWidth: {
        measure: "62ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 14px 34px -14px rgba(0,0,0,0.10)",
        lift: "0 2px 4px rgba(0,0,0,0.05), 0 26px 50px -22px rgba(0,0,0,0.18)",
        cta: "0 12px 26px -12px rgba(111,69,50,0.5)",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
