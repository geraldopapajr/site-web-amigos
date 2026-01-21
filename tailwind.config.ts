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
        cream: "#F9F9F7",
        "cream-light": "#FCFCFA",
        "cream-dark": "#F5F5F3",
        graphite: "#2D2D2D",
        "graphite-light": "#4A4A4A",
        "graphite-dark": "#1A1A1A",
        bronze: "#9A7A0A",
        "bronze-light": "#B8960D",
        "bronze-dark": "#7A6008",
        "bronze-accent": "#A88A0C",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'bronze': '0 4px 20px -2px rgba(154, 122, 10, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
