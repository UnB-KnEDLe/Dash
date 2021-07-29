import React, { useState, useEffect } from 'react';
import Table from './components/Table'
import { Container, BigCard, ButtonExtract, ButtonUpload, Upload } from './styles/app'
import { GlobalStyle } from './styles/global';
import dashimg from './assets/dashimg.svg';
import filesvg from './assets/file.svg';
import { TableContent } from './styles/table_style';

export default function App() {

  const [regexType, setRegexType] = useState(true);
  const [nerType, setNerType] = useState(false);
  const [tables, setTables] = useState(true);
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
      if (regexType == true) {
        console.log("regex")
      } else {
        console.log("ner")
      }
      // Criação da api para resgatar valores da extração
    }
    generate_acts();
  }, [selectetdFile, regexType]);

  const colunas = [
    { title: 'Tipo do Ato', field: 'Tipo_do_Ato' },
    { title: 'SEI', field: 'SEI' },
    { title: 'Nome', field: 'Nome' },
    { title: 'Matrícula', field: 'Matrícula' },
    { title: 'Tipo de Aposentadoria', field: 'Tipo_de_Aposentadoria' },
    { title: 'Cargo', field: 'Cargo' },
    { title: 'Classe', field: 'Classe' },
    { title: 'Padrao', field: 'Padrao' },
    { title: 'Quadro', field: 'Quadro' },
    { title: 'Fundamento Legal', field: 'Fundamento_Legal' },
    { title: 'Vigencia', field: 'Vigencia' },
  ]
  const dados = [
    { Tipo_do_Ato: 'Aposentadoria', SEI: 'Vijosef 00040-00018955/2020-26', Nome: "o servidor NIVALDO DE SANTANA FREITAS", Matrícula: "1.699.735-", Tipo_de_Aposentadoria: "", Cargo: "Analista em Politicas Publicas e Gestao Governamental", Classe: "Especial", Padrao: "v", Quadro: "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", Fundamento_Legal: "3o, incisos I, II", Vigencia: "", },
    { Tipo_do_Ato: 'Aposentadoria', SEI: '00040-00018955/2020-26', Nome: "o servidor NIVALDO DE SANTANA FREITAS", Matrícula: "1.699.735-", Tipo_de_Aposentadoria: "", Cargo: "Analista em Politicas Publicas e Gestao Governamental", Classe: "Especial", Padrao: "v", Quadro: "Quadro de Pessoal do Departamento de Transito do Distrito Federal", Fundamento_Legal: "3o, incisos I, II", Vigencia: "", },
    { Tipo_do_Ato: 'Aposentadoria', SEI: '00040-00018955/2020-26', Nome: "o servidor NIVALDO DE SANTANA FREITAS", Matrícula: "1.699.735-", Tipo_de_Aposentadoria: "", Cargo: "Analista em Politicas Publicas e Gestao Governamental", Classe: "Especial", Padrao: "v", Quadro: "Quadro de Pessoal do Departamento de Transito do Distrito Federal", Fundamento_Legal: "3o, incisos I, II", Vigencia: "", },
    { Tipo_do_Ato: 'Aposentadoria', SEI: '00040-00018955/2020-26', Nome: "o servidor NIVALDO DE SANTANA FREITAS", Matrícula: "1.699.735-", Tipo_de_Aposentadoria: "", Cargo: "Analista em Politicas Publicas e Gestao Governamental", Classe: "Especial", Padrao: "v", Quadro: "Quadro de Pessoal do Departamento de Transito do Distrito Federal", Fundamento_Legal: "3o, incisos I, II", Vigencia: "", },
    { Tipo_do_Ato: 'Aposentadoria', SEI: '00040-00018955/2020-26', Nome: "o servidor NIVALDO DE SANTANA FREITAS", Matrícula: "1.699.735-", Tipo_de_Aposentadoria: "", Cargo: "Analista em Politicas Publicas e Gestao Governamental", Classe: "Especial", Padrao: "v", Quadro: "Quadro de Pessoal do Departamento de Transito do Distrito Federal", Fundamento_Legal: "3o, incisos I, II", Vigencia: "", },
    { Tipo_do_Ato: 'Aposentadoria', SEI: '00040-00018955/2020-26', Nome: "o servidor NIVALDO DE SANTANA FREITAS", Matrícula: "1.699.735-", Tipo_de_Aposentadoria: "", Cargo: "Analista em Politicas Publicas e Gestao Governamental", Classe: "Especial", Padrao: "v", Quadro: "Quadro de Pessoal do Departamento de Transito do Distrito Federal", Fundamento_Legal: "3o, incisos I, II", Vigencia: "", },
    { Tipo_do_Ato: 'Aposentadoria', SEI: '00040-00018955/2020-26', Nome: "o servidor NIVALDO DE SANTANA FREITAS", Matrícula: "1.699.735-", Tipo_de_Aposentadoria: "", Cargo: "Analista em Politicas Publicas e Gestao Governamental", Classe: "Especial", Padrao: "v", Quadro: "Quadro de Pessoal do Departamento de Transito do Distrito Federal", Fundamento_Legal: "3o, incisos I, II", Vigencia: "", },
  ]


  return (
    <>
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
      </Container>
      {tables &&
        <>
          <TableContent>
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
          </TableContent>
        </>
      }
      <Container>
        <span>
          <img src={dashimg} alt="DASH" style={{ marginTop: "40px" }} />
        </span>
      </Container>
      <GlobalStyle />
    </>
  );
}