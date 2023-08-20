import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      green: "#63bd63",
      red: "#d34f4f",
      orange: "#ef9d51",
      blue: "#0c66bf",
      white: "#faf8f6",
      "light-grey": "#8a8a8a",
      "dark-grey": "#383a39",
      dark: "#262626",
    },
    fontFamily:{
      sans: ["Lato", "Lato-regular", ...defaultTheme.fontFamily.sans],
      light: ["LatoThin", "Lato-Thin-Italic"],
      bold: ["LatoBold", "Lato-Bold-Italic"],
      black: ["LatoBlack", "Lato-Black-Italic"]
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

