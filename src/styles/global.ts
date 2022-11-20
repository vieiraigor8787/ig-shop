import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: "$darkerGreen",
    color: "$gray100",
    "-webkit-font-smoothing": "antialised",
  },

  "body, input, textarea, button": {
    fontFamily: "Kanit",
  },

  'button, a': {
    cursor: "pointer",
  },
});
