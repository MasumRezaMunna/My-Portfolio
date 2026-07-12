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
        display: ["var(--font-syne)", "var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        navy: {
          DEFAULT: "#050A18",
          2: "#0A1228",
          3: "#0F1A38",
          4: "#152040",
        },
        brand: {
          blue: "#4F8EF7",
          cyan: "#00FFC8",
          violet: "#7C3AED",
          pink: "#E040FB",
          neon: "#39FF14",
        },
        muted: "#7A8BA8",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #4F8EF7 0%, #00FFC8 100%)",
        "gradient-violet":
          "linear-gradient(135deg, #7C3AED 0%, #4F8EF7 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #050A18 0%, #0A1228 100%)",
        "gradient-glow":
          "radial-gradient(ellipse at center, rgba(79,142,247,0.15) 0%, transparent 70%)",
        "gradient-neon":
          "linear-gradient(135deg, #00FFC8 0%, #4F8EF7 50%, #7C3AED 100%)",
        "grid-pattern":
          "linear-gradient(rgba(79,142,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-slow-reverse": "spin 7s linear infinite reverse",
        blink: "blink 1s step-end infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        glitch: "glitch 0.4s ease-in-out",
        "draw-line": "drawLine 1.5s ease-out forwards",
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee 20s linear infinite reverse",
        "orbit-1": "orbit1 12s linear infinite",
        "orbit-2": "orbit2 18s linear infinite reverse",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "gradient-shift": "gradientShift 4s ease infinite",
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
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 1px)" },
          "40%": { transform: "translate(2px, -1px)" },
          "60%": { transform: "translate(-1px, 2px)" },
          "80%": { transform: "translate(1px, -2px)" },
        },
        drawLine: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit1: {
          "0%": { transform: "rotate(0deg) translateX(110px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(110px) rotate(-360deg)" },
        },
        orbit2: {
          "0%": { transform: "rotate(0deg) translateX(145px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(145px) rotate(-360deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(79,142,247,0.35)",
        "glow-cyan": "0 0 40px rgba(0,255,200,0.25)",
        "glow-violet": "0 0 40px rgba(124,58,237,0.35)",
        "glow-sm": "0 0 20px rgba(79,142,247,0.2)",
        card: "0 4px 32px rgba(0,0,0,0.5)",
        "inner-glow": "inset 0 0 30px rgba(79,142,247,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
