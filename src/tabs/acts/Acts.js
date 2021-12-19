import { useState } from "react";
import UploadComponent from "../../components/UploadComponent";
import { TableContent } from "../../styles/table_style";
import { ActsButtons } from "../../styles/acts";
import ActsComponent from "../../components/ActsComponent";

import { extractActs } from "../../services/services";

import { Container, UploadMessage } from "../../styles/app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Acts() {
  const [type, setType] = useState("regex");
  const [acts, setActs] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function changeHandler(files) {
    setLoading(true);
    try{
      var acts = await extractActs(files[0], type);
    } catch(err){
      console.log(err)
      setError("Houve um error ao extrair os dados. Verifique se o arquivo é um PDF e se o mesmo está no formato correto.")
      setTimeout(() => {
        setError('')  //clear error after 5 seconds
      }, 5000);
    }
    var newActs = {};
    for (var act in acts) {
      if(acts[act].length > 0) {
        newActs[act] = acts[act];
      }
    }
    setActs(newActs)
    setLoading(false);
  }

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste e solte o PDF aqui</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };

  return (
    <>
      <Container>
        <h2>Extração de dados do Diário Oficial do Distrito Federal</h2>
        <UploadComponent
          changeHandler={changeHandler}
          type={type}
          setType={setType}
          renderDragMessage={renderDragMessage}
        />
      </Container>
      <Container>
        <TableContent>
          {error}
          {loading && (
            <div className="loading-container">
              <FontAwesomeIcon
                className="loading-spinner"
                icon={faSpinner}
                size="lg"
              />
            </div>
          )}
          <ActsButtons>
            {Object.keys(acts).map( act => 
                <ActsComponent actType={act} acts={acts[act]}/>
            )}
          </ActsButtons>
        </TableContent>
      </Container>
    </>
  );
}

const ActsData = {
  title: "Extrair Atos"  
};

export default ActsData;
