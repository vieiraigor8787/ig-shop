import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$lighterGreen',
    marginBottom: '2rem'
  },

  p: {
    fontSize: '$xl',
    color: '$lighterGreen',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem'
  },

  a: {
    display: 'block',
    marginTop: '3rem',
    fontSize: '$sm',
    color: '$purpleBlue',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$lightblue',
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: "linear-gradient(180deg, #A9C6C6 0%, #203131 100%)",
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})