import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        background: "#0a0f1e",
        surface: "#0f1729",
        card: "#151f3a",
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c96d",
          dark: "#a0832a",
        },
        muted: "#8899bb",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderColor: {
        gold: "rgba(201,168,76,0.2)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,168,76,0.35), 0 18px 50px -20px rgba(201,168,76,0.35)",
        card: "0 24px 60px -30px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #e8c96d 0%, #c9a84c 45%, #a0832a 100%)",
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(201,168,76,0.14) 0%, rgba(10,15,30,0) 70%)",
        "grid-faint":
          "linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
