import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    pallete: {
      "text": "#494949",
      "darkPrimary": "#17385E",
      "primary": "#2980B9",
      "secondary": "#99A8F4",
      "lightPrimary100": "#7FABDA",
      "lightPrimary50": "#A2C2E5",
      "lightSecondary50": "#D8DEFB",
      "lightSecondary100": "#EDEFF5",
      "background": "#FCFCFC",
    }
  },
  fonts:{
    heading: 'League Spartan',
    body: 'League Spartan',
  },
  styles: {
    global: {
      body: {
        bg: 'pallete.background',
        color: 'pallete.text'
      }
    }
  }
})