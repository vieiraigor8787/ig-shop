import { styled } from "@stitches/react";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: '1180px',
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: "linear-gradient(180deg, #A9C6C6 0%, #203131 100%)",
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '2xl',
    color: '$lighterGreen'
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$lightGreen'
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$lighterGreen'
  },

  button: {
    marginTop: 'auto',
    background: '$purpleBlue',
    padding: '1.25rem',
    border: 0,
    borderRadius: 8,
    color: '$darkerGreen',
    fontSize: '$md',
    fontWeight: 'bold',
    textTransform: 'uppercase',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      background: '$lightblue'
    }
  }
})