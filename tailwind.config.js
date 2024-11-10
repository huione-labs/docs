/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./app/**/*.{js,ts,jsx,tsx,mdx,md}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx,md}",
      "./components/**/*.{js,ts,jsx,tsx,mdx,md}",

      "./src/**/*.{js,ts,jsx,tsx,mdx,md}",
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

