import React from 'react';
import { Container } from './styles/app'
import TabContainer from './components/TabContainer'
import { GlobalStyle } from './styles/global';

import knedleLogo from './assets/logo_knedle.svg';
import dodfLogo from './assets/logo_miner.png';

export default function App() {
  return (
    <>
      <Container>
        <header>
          <div className="header-content">
            <div className="header-left">
              <img className="dodf-logo" src={dodfLogo} alt="Dodf" />
              <h3>Biblioteca de Extração de Dados do DoDF</h3>
            </div>
            <img className="knedle-logo" src={knedleLogo} alt="Knedle" />
          </div>
        </header>
        <TabContainer/>
      </Container>
      <GlobalStyle />
    </>
  );
}