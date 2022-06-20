import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    pallete: {
      "text": "#494949",
      "darkPrimary": "#17385E",
      "primary": "#2980B9",
      "secondary": "#99A8F4",
      "primaryLight100": "#7FABDA",
      "primaryLight50": "#A2C2E5",
      "secondaryLight50": "#D8DEFB",
      "secondaryLight10": "#F4F4F4",
      "secondaryLight100": "#EDF4F6",
      "background": "#F7F8FA",
      "sidebarBackground": '#ffffff',
      "cardBackground": "#EDEFF5",
      "backgroundButton": "#E3E3E3"
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