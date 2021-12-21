import { useState } from "react";
import UploadComponent from "../../components/UploadComponent";
import { ActsList } from "../../styles/acts";
import ActsComponent from "../../components/ActsComponent";

import { extractActs } from "../../services/services";

import { Container, UploadMessage } from "../../styles/app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Acts() {
  const [type, setType] = useState("regex");
  const [acts, setActs] = useState({});
  const [actsList, setActsList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [actBodyColor, setActBodyColor] = useState("#ffffff");

  async function changeHandler(files) {
    setLoading(true);
    setActs({});
    setActsList([]);
    setActBodyColor("#ccc");
    
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
      return <UploadMessage>Arraste o PDF aqui</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };

  return (
    <>
      <Container>
        <h2>Extração de Atos do Diário Oficial do Distrito Federal</h2>
        <UploadComponent
          changeHandler={changeHandler}
          type={type}
          setType={setType}
          showImage={Object.keys(acts).length === 0}
          renderDragMessage={renderDragMessage}
        />
      </Container>
      <Container>
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
        {Object.keys(acts).length > 0 && (
          <ActsList>
            <div className="acts-menu">
              {Object.keys(acts).map( act => 
                  <ActsComponent colorSetFunction={setActBodyColor} actsSetFunction={setActsList} actType={act} acts={acts[act]}/>
              )}
            </div>
            <div style={{borderTopColor: actBodyColor}} className="acts-content">
              {actsList.length === 0 && (
                <h3>Selecione um tipo de ato para visualizar a lista</h3>
              )}
              <ul className="act-body">
                {actsList.map(act => <li>{act}</li>)}
              </ul>
            </div>
          </ActsList>
        )}
      </Container>
    </>
  );
}

const ActsData = {
  title: "Extrair Atos"  
};

export default ActsData;
