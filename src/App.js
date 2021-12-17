import React from 'react';
import { Container } from './styles/app'
import TabContainer from './components/TabContainer'
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <>
      <Container>
        <header/>
        <TabContainer/>
      </Container>
      <GlobalStyle />
    </>
  );
}