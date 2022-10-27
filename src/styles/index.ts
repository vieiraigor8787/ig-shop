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
      igshop: "#8257e6",
      white: '#fff',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4c4',
      gray100: '#e1e1e6',

      orange500: '#B35600',
      orange300: '#91541B',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
});
