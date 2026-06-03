import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#000000",
          secondary: "#0A0A0A",
          card: "#111111",
          elevated: "#1A1A1A",
          tinted: "#06080F",
        },
        ink: {
          primary: "#FFFFFF",
          secondary: "#B5B5B5",
          tertiary: "#707070",
          muted: "#4D4D4D",
        },
        accent: {
          blue: "#2B6BFF",
          "blue-soft": "#A8C5FF",
          danger: "#FF5555",
          success: "#4ADE80",
          warn: "#FACC15",
        },
      },
      borderColor: {
        subtle: "rgba(255,255,255,0.10)",
        medium: "rgba(255,255,255,0.18)",
        strong: "rgba(255,255,255,0.28)",
      },
      fontFamily: {
        display: ["var(--font-barlow)", "Barlow Condensed", "sans-serif"],
        body: ["var(--font-outfit)", "Outfit", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
        sans: ["var(--font-plex-sans)", "IBM Plex Sans", "sans-serif"],
      },
      maxWidth: { container: "1320px" },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
