import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"]
      },
      colors: {
        charcoal: "#201814",
        cream: "#fff8ec",
        honey: "#f6b642",
        toast: "#b8652b",
        sesame: "#f8df9f",
        espresso: "#4b2f22",
        sage: "#6f7f5f"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(32, 24, 20, 0.14)",
        lift: "0 20px 45px rgba(184, 101, 43, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
