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
        cream: "#f7faf8",
        "cream-light": "#fbfcfb",
        "cream-dark": "#eef3f0",
        graphite: "#1e2924",
        "graphite-light": "#3d4f47",
        "graphite-dark": "#121a16",
        /* Accent palette (wellness / sage) — classes “bronze” mantidas para compatibilidade */
        bronze: "#2f6f55",
        "bronze-light": "#3d8a6c",
        "bronze-dark": "#245544",
        "bronze-accent": "#368262",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        bronze: "0 4px 20px -2px rgba(47, 111, 85, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
