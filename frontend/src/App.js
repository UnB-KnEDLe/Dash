import React, { useState } from 'react';
import { Container, BigCard, ButtonExtract, ButtonUpload, Upload } from './styles/app'
import { GlobalStyle } from './styles/global';
import homeTwoImg from './assets/HomeTwo.png';
import homeOneImg from './assets/HomeOne.png';
import dashimg from './assets/dashimg.svg';
import filesvg from './assets/file.svg';

export default function App() {

  const [regexType, setRegexType] = useState(true);
  const [nerType, setNerType] = useState(false);

  function regexType_() {
    setRegexType(true)
    setNerType(false)
  }

  function nerType_() {
    setRegexType(false)
    setNerType(true)
  }

  const changeHandler = (event) => {
		console.log(event.target.files);
	};


  return (
    <Container>
      <header />
      <BigCard>
        <h1>Extrator de PDF</h1>
        <h2>Extrator de dados do diário oficial do DF</h2>
        <h2>Selecione a forma de extração</h2>
        <ButtonExtract type={regexType} onClick={() => regexType_()}>REGEX</ButtonExtract>
        <ButtonExtract type={nerType} onClick={() => nerType_()}>NER</ButtonExtract>
        <Upload>
          <img src={filesvg} alt="file" />
          <p>Arraste e solte o PDF aqui</p>
          <ButtonUpload>
            <label for="fupload">SELECIONAR ARQUIVO PDF DO COMPUTADOR</label>
            <input type="file" id="fupload" onChange={changeHandler} multiple/>
          </ButtonUpload>
        </Upload>
      </BigCard>
      <span>
        <img src={dashimg} alt="Woman drinking coffe" />
      </span>
      <GlobalStyle />
    </Container>
  );
}