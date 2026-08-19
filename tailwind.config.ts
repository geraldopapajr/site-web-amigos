import type { Config } from "tailwindcss";

/**
 * Sistema visual "Terra & Oliva".
 * Paleta e tipografia centralizadas aqui — trocar a identidade da marca
 * significa mexer só neste arquivo e nas fontes em app/layout.tsx.
 */
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF7F1",
          100: "#F6F0E7",
          200: "#EDE3D5",
          300: "#DFD1BC",
        },
        ink: {
          DEFAULT: "#211C17",
          soft: "#4A423A",
          muted: "#6F675D",
        },
        clay: {
          DEFAULT: "#A8552F",
          dark: "#8C4425",
          light: "#C97A52",
          tint: "#F3E4DA",
        },
        olive: {
          DEFAULT: "#3F4A3A",
          dark: "#252C21",
          light: "#6E7A63",
          tint: "#E8EBE2",
        },
        ocre: {
          DEFAULT: "#C9A44A",
          light: "#E4CD93",
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
        soft: "0 1px 2px rgba(33,28,23,0.04), 0 14px 34px -14px rgba(33,28,23,0.14)",
        lift: "0 2px 4px rgba(33,28,23,0.05), 0 26px 50px -22px rgba(33,28,23,0.24)",
        cta: "0 12px 26px -12px rgba(168,85,47,0.55)",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
