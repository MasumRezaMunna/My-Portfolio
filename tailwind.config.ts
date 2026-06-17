import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        navy: {
          DEFAULT: "#060D1F",
          2: "#0D1630",
          3: "#111B3A",
          4: "#172040",
        },
        brand: {
          blue: "#4F8EF7",
          cyan: "#00D4FF",
          purple: "#7C3AED",
        },
        muted: "#8896B3",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #4F8EF7 0%, #00D4FF 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #060D1F 0%, #0D1630 100%)",
        "grid-pattern":
          "linear-gradient(rgba(79,142,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-slow-reverse": "spin 6s linear infinite reverse",
        blink: "blink 1s step-end infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(79,142,247,0.3)",
        "glow-cyan": "0 0 40px rgba(0,212,255,0.2)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
      borderColor: {
        brand: "rgba(79,142,247,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
