/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 49%, 100%": { opacity: "100%" },
          "50%, 99%": { opacity: "5%" },
        },
      },
    },
  },
  plugins: [],
};
