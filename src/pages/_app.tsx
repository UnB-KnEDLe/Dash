import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { Sidebar } from '../components/Sidebar';

function Dash({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </ChakraProvider>
  )
}

export default Dash;
