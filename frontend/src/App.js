import React, { useState, useEffect } from 'react';
import { Container, BigCard, ButtonExtract, ButtonUpload, Upload } from './styles/app'
import { GlobalStyle } from './styles/global';
import dashimg from './assets/dashimg.svg';
import filesvg from './assets/file.svg';

export default function App() {

  const [regexType, setRegexType] = useState(true);
  const [nerType, setNerType] = useState(false);
  const [selectetdFile, setSelectedFile] = useState([]);
  const [fileBase64String, setFileBase64String] = useState("");

  function regexType_() {
    setRegexType(true)
    setNerType(false)
  }

  function nerType_() {
    setRegexType(false)
    setNerType(true)
  }


  function changeHandler(e) {
    var files = e.target.files
    setSelectedFile(files);
  }

  useEffect(() => {
    function generate_acts() {
      console.log(selectetdFile[0])
      if (regexType == true){
        console.log("regex")
      }else{
        console.log("ner")
      }
      // Criação da api para resgatar valores da extração
    }
    generate_acts();
  }, [selectetdFile, regexType]);


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
            <input type="file" id="fupload" onChange={changeHandler} multiple />
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