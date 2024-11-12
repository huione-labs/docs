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
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        grd: {
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc0c0',
          '300': '#ff9494',
          '400': '#ff5757',
          '500': '#ff2323',
          '600': '#ed0000',
          '700': '#d70000',
          '800': '#b10303',
          '900': '#920a0a',
          '950': '#500000',
        },
      },
    },
  },
  plugins: [
    nextui({
      prefix: "xone",
      layout: {   // 布局
        dividerWeight: "1px", // h-divider 分隔符组件的默认高度 
        disabledOpacity: 0.5, // 当组件被禁用时
        fontSize: {   // 字体大小
          tiny: "0.75rem", // 文本微小
          small: "0.875rem", // 文本-小
          medium: "1rem", // 文本介质
          large: "1.125rem", // 文本大号
        },
        lineHeight: {   // 行高
          tiny: "1rem", // 文本微小
          small: "1.25rem", // 文本-小
          medium: "1.5rem", // 文本介质
          large: "1.75rem", // 文本大号
        },
        radius: {   // 半径
          small: "8px", // 圆角小
          medium: "12px", // 圆角-中等
          large: "14px", // 四舍五入为大
        },
        borderWidth: {    // 边框宽度
          small: "1px", // 边框小
          medium: "2px", // 中等边框
          large: "3px", // 边框大
        },
      },
      themes: {   // 主题
        light: {    // 白天
          colors: {
            primary: '#ed0000',
          },
          layout: {   // 布局
            hoverOpacity: 0.8, //  组件悬停时
            boxShadow: {    // 盒子阴影
              // shadow-small
              small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            },
          },
        },
        dark: {   // 黑夜
          colors: {
            primary: '#ed0000',
          },
          layout: {
            hoverOpacity: 0.9, //
            boxShadow: {
              // shadow-small
              small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            },
          },
        },
      },
    }),
    iconsPlugin({
      collections: getIconCollections(["tabler", "icon-park-outline", "tdesign", "material-symbols", "octicon", "la", "carbon", "teenyicons", "solar", "game-icons", "lucide", "carbon", "gis", "ri", "material-symbols", "hugeicons", "fluent", "uil", "token", "mdi", "ph", "lineicons", "icon-park-outline", "material-symbols", "icon-park-outline"]),
    }
    ),
  ],
}

