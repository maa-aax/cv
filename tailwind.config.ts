import type { Config } from "tailwindcss"

import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./app/**/*.tsx",
    "./img/**/*.png",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      ...colors,
      // black: colors.black,
      // blue: colors.blue,
      // red: colors.red,
      // white: colors.white,
      // gray: colors.slate,
      // green: colors.emerald,
      // purple: colors.violet,
      // yellow: colors.amber,
      // pink: colors.fuchsia,
      // slate: colors.slate,
      // stone: colors.stone,
      // zinc: colors.zinc,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      '4xs': '128px',
      '3xs': '256px',
      '2xs': '384px',
      'xs': '512px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}

export default config
