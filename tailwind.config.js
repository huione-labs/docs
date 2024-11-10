/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",

      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customRed: '#ED0000',
        hoverColors: '#ff5757',
        'tahiti': '#ED0000',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

