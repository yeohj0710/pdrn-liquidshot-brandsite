import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      colors: {
        canvas: "var(--canvas)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        blush: "var(--blush)",
        bloom: "var(--bloom)",
        pearl: "var(--pearl)",
        sage: "var(--sage)",
        champagne: "var(--champagne)",
        panel: "var(--panel)",
      },
      boxShadow: {
        velvet: "0 24px 80px rgba(63, 33, 55, 0.15)",
        halo: "0 10px 30px rgba(176, 13, 105, 0.12)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(110, 96, 109, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 96, 109, 0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
