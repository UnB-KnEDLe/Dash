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
            <img className="dodf-logo" src={dodfLogo} alt="Dodf" />
            <a href="http://nido.unb.br/">
              <img className="knedle-logo" src={knedleLogo} alt="Knedle" />
            </a>
          </div>
        </header>
        <TabContainer/>
      </Container>
      <GlobalStyle />
    </>
  );
}