import { useState } from "react";
import UploadComponent from "../../components/UploadComponent";
import { TableContent } from "../../styles/table_style";
import Table from "../../components/Table";
import { actsData } from "../../actsData";

import { extractEntities } from "../../services/services";

import { Container, UploadMessage } from "../../styles/app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Entities() {
	const [type, setType] = useState("regex");
	const [tables, setTables] = useState([]);
	const [loading, setLoading] = useState(false);
	const [collapsed, setCollapsed] = useState(false);

	async function changeHandler(files) {
		setTables([]);
		setLoading(true);
		await extractEntities(files[0], type)
			.then((res) => setTables(res))
			.then(() => setLoading(false));
		setCollapsed(true)
	}

	const handleCollapse = () => setCollapsed(false);

	const renderDragMessage = (isDragActive, isDragReject) => {
		if (!isDragActive) return <UploadMessage>Arraste o PDF aqui</UploadMessage>;

		if (isDragReject) return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;

		return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
	};

	return (
		<>
			<Container>
				<h2>Extração de Entidades do Diário Oficial do Distrito Federal</h2>
				{ collapsed ? (
					<div>
						<button class="btn" onClick={handleCollapse}>Extrair novo arquivo</button>
					</div>
				) : (
				<UploadComponent
					changeHandler={changeHandler}
					type={type}
					setType={setType}
					renderDragMessage={renderDragMessage}
					tables={tables}
				/>
				)}
			</Container>
			<Container>
				<TableContent>
					{loading && (
						<div className="loading-container">
							<FontAwesomeIcon
								className="loading-spinner"
								icon={faSpinner}
								size="2x"
							/>
						</div>
					)}

					{tables.map((table) => {
						return (
							<Table key={table.id} color={actsData[table.title].color} data={table.content} title={table.title} columns={table.columns}/>
						);
					})}
				</TableContent>
			</Container>
		</>
	);
}
