import React from 'react';
import { Main } from './styles/app'
import TabContainer from './components/TabContainer'
import { GlobalStyle } from './styles/global';

import SearchProvider from './context/searchContext';
import ExtractProvider from './context/extractContext';

import { Neo4jProvider, createDriver } from 'use-neo4j';

import dodfLogo from './assets/logo_miner.png';
import knedleLogo from './assets/logo_knedle.svg';
import fapdflogo from './assets/logo_fapdf.png';
import finateclogo from './assets/logo_finatec.png';
import unbLogo from './assets/Logo_UnB.svg';

import './app.css'

const HOST="164.41.76.30"
const PORT=8080
const USER="neo4j"
const PASSWORD="nido@CIC2021"
// const VERSION=4
const DATABASE="neo4j"

export default function App() {
  const driver = createDriver(DATABASE, HOST, PORT, USER, PASSWORD);

  return (
    <Neo4jProvider driver={driver} database="neo4j">
      <ExtractProvider>
        <SearchProvider>
          <Main>
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
          </Main>
          <GlobalStyle />
        </SearchProvider>
      </ExtractProvider>
    </Neo4jProvider>
  );
}