module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#dcf2e8',
        'secondary': '#63f2d8',
        'third': '#04bf9d',
        'fourth': '#013440',
        'fifth': '#010326',
        'purple': '#9094ff',
        'light-grey': '#ebebeb',
        'dark': '#343434',
      },
      maxWidth: {
        'custom': '1000px',
      },
      padding: {
        'general': '5% 7%',
        '20': '20px',
      },
      boxShadow: {
        'primaryButton': 'rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset, rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px, rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px, rgba(44, 187, 99, 0.15) 0 16px 32px',
        'primaryButton-hover': 'rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset, rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px, rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px, rgba(44, 187, 99, 0.25) 0 16px 32px',
      },
      borderRadius: {
        '100': '100px',
      },
      transitionDuration: {
        '250': '250ms',
      },
      fontSize: {
        '16': '16px',
      },
      screens: {
        'mobile': '600px',
        'desktop': '1000px',
      },
      backgroundImage: {
        vectorGrass: "url('/vectorGrass.png')",
        soil: "url('/soil.png')",
        flowers: "url('/flowersBG.png')"
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
      scale: ['hover'],
      rotate: ['hover'],
    },
  },
  plugins: [],
}