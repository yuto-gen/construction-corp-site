export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#e6f0fa",
          DEFAULT: "#1e3a8a",
          dark: "#0f172a",
        },
        accent: {
          DEFAULT: "#fbbf24",
        },
        gray: {
          light: "#f5f5f5",
          DEFAULT: "#737373",
          dark: "#171717",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
