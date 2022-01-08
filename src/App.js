import React from 'react';
import { Container } from './styles/app'
import TabContainer from './components/TabContainer'
import { GlobalStyle } from './styles/global';

import SearchProvider from './context/searchContext';

import knedleLogo from './assets/logo_knedle.svg';
import dodfLogo from './assets/logo_miner.png';

import './app.css';

export default function App() {
  return (
    <SearchProvider>
      <Container>
        <header>
          <div className="background-header"/>
          <div className="header-content">
            <img className="dodf-logo" src={dodfLogo} alt="Dodf" />
            <a href="http://nido.unb.br/">
              <img className="knedle-logo" src={knedleLogo} alt="Knedle" />
            </a>
          </div>
        </header>
        <TabContainer/>
      </Container>
      <GlobalStyle />
    </SearchProvider>
  );
}