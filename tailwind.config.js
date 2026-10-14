const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, "./app/**/*.{js,ts,jsx,tsx,mdx}"),
    path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#8C4D52",   // dusty rose — hlavní barva z colour boardu
          secondary: "#212A34", // dark charcoal — profesionální tmavá
          accent: "#E8889F",    // medium pink — světlejší akcent
          light: "#F2EBE9",     // warm blush — světlé pozadí
          muted: "#D9D6D2",     // warm grey — neutrální tón
          gold: "#FFC107",      // amber — z colour boardu
          beige: "#BFA799",     // warm beige — zemitý tón
          brown: "#593027",     // dark brown — tmavý zemitý tón
          rose: "#D99F9A",      // dusty salmon — přechod
        },
      },
      // Typografická škála faceliftu 2026: nadpisy výrazně větší, těsnější
      // prokládání i proklad řádků. Mění vzhled na celém webu najednou.
      fontSize: {
        "2xl": ["1.625rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "3xl": ["2.25rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "4xl": ["3rem", { lineHeight: "1.0", letterSpacing: "-0.035em" }],
        "5xl": ["4.25rem", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "6xl": ["5.5rem", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "7xl": ["6.5rem", { lineHeight: "0.9", letterSpacing: "-0.045em" }],
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
