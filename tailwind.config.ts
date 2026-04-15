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
        /** Deep brand blue — headings, nav, key UI */
        primary: "#1E3A8A",
        /** Soft accent — links, highlights, focus rings */
        accent: "#3B82F6",
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 4px 14px -4px rgb(15 23 42 / 0.07)",
        "soft-lg":
          "0 2px 6px -1px rgb(15 23 42 / 0.05), 0 12px 28px -8px rgb(15 23 42 / 0.11)",
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
