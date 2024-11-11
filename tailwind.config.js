const { nextui } = require("@nextui-org/react");
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/***  @type {import('tailwindcss').Config} */


module.exports = {
  content: {
    relative: true,
    files: [
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,html}",
      "./app/**/*.{js,ts,jsx,tsx,mdx,md,html}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx,md,html}",
      "./components/**/*.{js,ts,jsx,tsx,mdx,md,html}",

      "./src/**/*.{js,ts,jsx,tsx,mdx,md,html}",
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
  plugins: [
    nextui(),
    iconsPlugin({
      collections: getIconCollections(["lucide", "carbon", "gis", "ri", "material-symbols", "hugeicons", "fluent", "uil"]),
    }
    ),
  ],
}

