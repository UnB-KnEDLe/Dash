import { useState } from "react";
import UploadComponent from "../../components/UploadComponent";
import { TableContent } from "../../styles/table_style";
import Table from "../../components/Table";

import { extractEntities } from "../../services/services";

import { Container, UploadMessage } from "../../styles/app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Entities() {
	const [type, setType] = useState("regex");
	const [tables, setTables] = useState([]);
	const [loading, setLoading] = useState(false);

	async function changeHandler(files) {
		setTables([]);
		setLoading(true);
		await extractEntities(files[0], type).then((res) => setTables(res));
		setLoading(false);
	}

	const renderDragMessage = (isDragActive, isDragReject) => {
		if (!isDragActive) return <UploadMessage>Arraste o PDF aqui</UploadMessage>;

		if (isDragReject) return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;

		return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
	};

	return (
		<>
			<Container>
				<h2>Extração de Entidades do Diário Oficial do Distrito Federal</h2>
				<UploadComponent
					changeHandler={changeHandler}
					type={type}
					setType={setType}
					renderDragMessage={renderDragMessage}
					tables={tables}
					showImage={tables.length === 0}
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
							<Table key={table.id} data={table.content} title={table.title} columns={table.columns}/>
						);
					})}
				</TableContent>
			</Container>
		</>
	);
}

const EntitesData = {
	title: "Extrair Entidades"
};

export default EntitesData;
