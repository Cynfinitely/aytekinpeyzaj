/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dcf2e8",
        third: '#04bf9d',
      },
      backgroundImage: {
        vectorGrass: "url('/vectorGrass.png')",
        soil: "url('/soil.png')",
        flowers: "url('/flowersBG.png')"
      },
    },
  },
  plugins: [],
};
