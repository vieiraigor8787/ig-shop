import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) /2))",
  marginLeft: "auto",
  minHeight: 656
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #A9C6C6 0%, #203131 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  position: "relative",
  overflow: "hidden",
  color: "$lighterGreen",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "contain",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "$darkGreen",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$md",
    },

    span: {
      fontSize: "$2xl",
      fontWeight: "bold",
    },

  },
  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    }
  },

});
