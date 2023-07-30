/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  theme: {
    extend: {
      colors: {
        baseBackground: 'rgb(10, 10, 13)',
        baseRedColor: 'rgb(255, 68, 94)',
        baseYellowColor: 'rgb(248, 194, 49)',
        baePinkColor: 'rgb(255, 68, 233)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-gradient': 'linear-gradient(300deg, rgba(255, 68, 94, 1) 0%, rgba(248, 194, 49, 1) 100%)',
        // make gradient from from-indigo-200 rgba(255, 68, 94, 1) rgba(248, 194, 49, 1)
        'secondary-gradient': 'linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(248, 194, 49, 1) 250%, rgba(248, 194, 49, 1) 150%)',
        'textured': 'url("/grid.svg")',
      }
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.grid-col-1-2': {
          gridColumn: '1 / 2',
        },
        '.grid-row-1-2': {
          gridRow: '1 / 2',
        },
      }

      addUtilities(newUtilities)
    }
  ],
}
