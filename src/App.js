import React, { useState, useEffect } from 'react';
import Table from './components/Table'
import { Container, BigCard, ButtonExtract, ButtonUpload, Upload } from './styles/app'
import { GlobalStyle } from './styles/global';
import dashimg from './assets/dashimg.svg';
import filesvg from './assets/file.svg';
import { TableContent } from './styles/table_style';
import extractContent from './services/services';

export default function App() {

  const [regexType, setRegexType] = useState('regex');
  const [tables] = useState(true);
  const [selectetdFile, setSelectedFile] = useState([]);
  // const [fileBase64String, setFileBase64String] = useState("");

  useEffect(() => {
    function generate_acts() {
      console.log(selectetdFile[0])
      console.log(regexType)
      // Criação da api para resgatar valores da extração
    }
    generate_acts();
  }, [selectetdFile, regexType]);

  async function regexType_(type) {
    setRegexType(type)
  }

  function changeHandler(files) {
    extractContent(files[0], regexType)
      .then(res => {
        console.log(res) // Adicionar função que cria as tabelas
      })
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
          <ButtonExtract type={regexType === 'regex'} onClick={() => regexType_('regex')}>REGEX</ButtonExtract>
          <ButtonExtract type={regexType === 'ner'} onClick={() => regexType_('ner')}>NER</ButtonExtract>
          <Dropzone accept="application/pdf" onDropAccepted={changeHandler}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive} //aceitar arquivos que são PDFs
                isDragReject={isDragReject} //rejeitar arquivos que não são PDFs
              >
                <input {...getInputProps()} />
                <img src={ filesvg } alt="file" />
                {renderDragMessage(isDragActive, isDragReject)}
                <button>
                  <label>Selecionar Arquivos</label>
                </button>
              </DropContainer>
            )}
          </Dropzone>
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