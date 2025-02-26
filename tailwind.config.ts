import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "1232px",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1.2",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.4",
            fontWeight: "400",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.6",
            fontWeight: "500",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.6",
            fontWeight: "600",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "1.6",
            fontWeight: "600",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "1.4",
            fontWeight: "700",
          },
        ],
        "5xl": [
          "3rem",
          {
            lineHeight: "1.3",
            fontWeight: "700",
          },
        ],
        "6xl": [
          "3.75rem",
          {
            lineHeight: "1.2",
            fontWeight: "800",
          },
        ],
        "7xl": [
          "4.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "800",
          },
        ],
        "8xl": [
          "6rem",
          {
            lineHeight: "1.1",
            fontWeight: "900",
          },
        ],
        "9xl": [
          "8rem",
          {
            lineHeight: "1.1",
            fontWeight: "900",
          },
        ],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "12px",
        xxl: "16px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
