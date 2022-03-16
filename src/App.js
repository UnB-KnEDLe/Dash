import React from 'react';
import { Container } from './styles/app'
import TabContainer from './components/TabContainer'
import { GlobalStyle } from './styles/global';

import SearchProvider from './context/searchContext';

import dodfLogo from './assets/logo_miner.png';
import knedleLogo from './assets/logo_knedle.svg';
import fapdflogo from './assets/logo_fapdf.png';
import finateclogo from './assets/logo_finatec.png';
import unbLogo from './assets/Logo_UnB.svg';

import './app.css';

export default function App() {
  return (
      <SearchProvider>
        <Container>
          <header>
            <div className="header-content">
              <img className="dodf-logo" src={dodfLogo} alt="Dodf" />
              <div className="header-logos">
                <a href="http://nido.unb.br/">
                  <img src={knedleLogo} alt="Knedle" />
                </a>
                <a href="http://unb.br/">
                  <img src={unbLogo} alt="UnB" />
                </a>
                <a href="https://www.fap.df.gov.br/">
                  <img src={fapdflogo} alt="FAP DF" />
                </a>
                <a href="https://www.finatec.org.br/">
                  <img src={finateclogo} alt="Finatec" />
                </a>
              </div>
            </div>
          </header>
          <TabContainer />
        </Container>
        <GlobalStyle />
      </SearchProvider>
  );
}