import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

function Dash({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}> 
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Dash;
