import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["var(--font-cinzel)"],
        "cinzel-decorative": ["var(--font-cinzel-decorative)"],
        cormorant: ["var(--font-cormorant)"],
      },
      colors: {
        void: "#010208",
        deep: "#030810",
        abyss: "#050d1a",
        ocean: "#091628",
        gold: {
          DEFAULT: "#c8a84c",
          bright: "#f0d878",
          dim: "#6a5820",
        },
        silver: {
          DEFAULT: "#8ab0cc",
          dim: "#3a5870",
        },
        graha: {
          sun:  "#f0c040",
          moon: "#c8e0f8",
          mars: "#c84830",
          merc: "#60c880",
          jup:  "#e8c060",
          ven:  "#e0a868",
          sat:  "#6880a8",
          rahu: "#9060b0",
          ketu: "#b06840",
        },
      },
      animation: {
        "slow-spin": "spin 120s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "fade-up": "fade-up 1s ease both",
        "breathe": "breathe 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%,100%": { opacity: "0.3", transform: "scale(1)" },
          "50%":      { opacity: "0.7", transform: "scale(1.08)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "breathe": {
          "0%,100%": { transform: "scale(1)", opacity: "0.6" },
          "50%":     { transform: "scale(1.06)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
