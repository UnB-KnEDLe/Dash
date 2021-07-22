import React from 'react';
import { Container, BigCard, ButtonExtract, ButtonUpload, Upload } from './styles/app'
import { GlobalStyle } from './styles/global';
import homeTwoImg from './assets/HomeTwo.png';
import homeOneImg from './assets/HomeOne.png';
import dashimg from './assets/dashimg.svg';
import filesvg from './assets/file.svg';

export default function App() {
  return (
    <Container>
      <header />
      <BigCard>
          <h1>Extrator de PDF</h1>
          <h2>Extrator de dados do diário oficial do DF</h2>
          <h2>Selecione a forma de extração</h2>
          <ButtonExtract>REGEX</ButtonExtract>
          <ButtonExtract>NER</ButtonExtract>
          <Upload>
            <img src={filesvg} alt="file"/>
            <p>Arraste e solte o PDF aqui</p>
            <ButtonUpload>Selecione no seu computador</ButtonUpload>
          </Upload>
      </BigCard>
      <span>
        <img src={dashimg} alt="Woman drinking coffe" />
      </span>
      <GlobalStyle />
    </Container>
  );
}
