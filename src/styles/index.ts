import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      darkerGreen: '#101919',
      darkGreen: '#203131',
      lightGreen: '#A9C6C6',
      lighterGreen: '#F3F7F7',

      lightblue: '#B3C2F2',
      purpleBlue: '#96ABED',

      greenDestak: '#1B998B',
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem'
    }
  },

});
