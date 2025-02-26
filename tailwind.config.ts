import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "1440px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "2560px",
    },
    extend: {
      colors: {
        "stormy-blue": "#61788C",
        "misty-sky": "#B8CAD9",
        "olive-stone": "#736B46",
        sand: "#D9C7B8",
        "midnight-black": "#0D0D0D",
        "pearl-glow": "#F6F3EE",
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        lg: "8px",
        xl: "12px",
        xxl: "16px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
