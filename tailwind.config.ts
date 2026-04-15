import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Main canvas — charcoal (~#1A1A1A), non-photo sections */
        page: "#1a1a1a",
        /** Slightly deeper band for alternating sections */
        surface: "#151515",
        /** Cards / panels above page */
        elevated: "#242424",
        /** Warm gold — headlines accent, CTAs, borders */
        gold: "#C9A042",
        /** Primary button label on gold */
        ink: "#111111",
        /** Body / secondary copy */
        muted: "#cccccc",
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgb(0 0 0 / 0.25)",
        "soft-lg": "0 8px 24px -4px rgb(0 0 0 / 0.45)",
      },
      spacing: {
        section: "4rem",
        "section-lg": "6rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
