import { useState } from "react";
import UploadComponent from "../../components/UploadComponent";
import { TableContent } from "../../styles/table_style";
import Table from "../../components/Table";

import extractContent from "../../services/services";

import { Container, UploadMessage } from "../../styles/app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Acts() {
  const [type, setType] = useState("regex");
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(false);

  async function changeHandler(files) {
    setLoading(true);
    await extractContent(files[0], type).then((res) => setTables(res));
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
          tables={tables}
        />
      </Container>
      <Container>
        <TableContent>
          {loading && (
            <div className="loading-container">
              <FontAwesomeIcon
                className="loading-spinner"
                icon={faSpinner}
                size="lg"
              />
            </div>
          )}

          {tables.map((table) => {
            return (
              <Table key={table.id} data={table.content} title={table.title} />
            );
          })}
        </TableContent>
      </Container>
    </>
  );
}

const ActsData = {
  title: "Extrair Atos"  
};

export default ActsData;
