import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#090B10",
          900: "#10131A",
          850: "#151923",
          800: "#1C212D",
          700: "#2A3140",
          500: "#5C6475",
          400: "#8A91A1",
          300: "#B4BAC6",
          200: "#D7DBE3",
          100: "#ECEEF2",
        },
        paper: {
          DEFAULT: "#F6F5F1",
          deep: "#EEECE6",
          card: "#FFFFFF",
          line: "#E2DFD7",
        },
        text: {
          DEFAULT: "#15171C",
          soft: "#454A56",
          mute: "#5E6371",
        },
        brand: {
          700: "#1F43D6",
          600: "#2F5BFF",
          500: "#5577FF",
          300: "#A9BCFF",
          100: "#E8EDFF",
          50: "#F3F6FF",
        },
        live: { DEFAULT: "#0F7A55", bg: "#E1F3EA" },
        dev: { DEFAULT: "#8A5A00", bg: "#FBF0D9" },
        warn: { DEFAULT: "#A3361F", bg: "#FBE7E1" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { page: "1200px", prose: "68ch" },
      letterSpacing: { label: "0.12em" },
      boxShadow: {
        card: "0 1px 2px rgba(16,19,26,0.04), 0 8px 24px -12px rgba(16,19,26,0.12)",
        lift: "0 2px 4px rgba(16,19,26,0.05), 0 24px 48px -24px rgba(16,19,26,0.25)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -30px rgba(47,91,255,0.45)",
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        pulse2: { "0%,100%": { opacity: "0.35" }, "50%": { opacity: "1" } },
        dash: { to: { strokeDashoffset: "0" } },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
        pulse2: "pulse2 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
