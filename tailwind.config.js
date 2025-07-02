/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '1px 1px 7px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        'sans': ['"Poppins"'],
      },
      textShadow: {
        'light-black-stroke': '2px 2px 0 rgba(0, 0, 0, 0.5), -2px -2px 0 rgba(0, 0, 0, 0.5), 2px -2px 0 rgba(0, 0, 0, 0.5), -2px 2px 0 rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-light-black': {
          'text-shadow': '2px 2px 0 rgba(0, 0, 0, 0.5), -2px -2px 0 rgba(0, 0, 0, 0.5), 2px -2px 0 rgba(0, 0, 0, 0.5), -2px 2px 0 rgba(0, 0, 0, 0.5)',
        },
        '.text-border-black': {
          'text-shadow': `
            1px 0 0 #000, 
           -1px 0 0 #000, 
            0 1px 0 #000, 
            0 -1px 0 #000,
            1px 1px #000,
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000`,
        },
      })
    },
  ],
}
