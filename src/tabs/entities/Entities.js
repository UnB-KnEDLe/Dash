import { useState } from "react";
import UploadComponent from "../../components/UploadComponent";
import { TableContent } from "../../styles/table_style";
import Table from "../../components/Table";
import { actsData } from "../../data/actsData";

import { extractEntities } from "../../services/services";

import { Container } from "../../styles/app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Entities() {
	const [tables, setTables] = useState([]);
	const [loading, setLoading] = useState(false);
	const [collapsed, setCollapsed] = useState(false);
	const [filename, setFilename] = useState("");

	async function changeHandler(files) {
		setTables([]);
		setFilename(files[0].name);
		setLoading(true);
		await extractEntities(files[0])
			.then((res) => setTables(res))
			.then(() => setLoading(false));
		setCollapsed(true)
	}

	const handleCollapse = () => setCollapsed(false);

	return (
		<>
			<Container>
				<h2>Extração de Entidades do Diário Oficial do Distrito Federal</h2>
				{ collapsed ? (
					<div style={{display: "flex", placeItems: "center"}}>
						<FontAwesomeIcon icon={faFile} style={{marginRight: 10, color: "var(--primary)"}} />
						<span>{filename}</span>
						<button class="btn" onClick={handleCollapse}>Extrair novo arquivo</button>
					</div>
				) : (
				<UploadComponent changeHandler={changeHandler}/>
				)}
			</Container>
			<Container>
				<TableContent>
					{loading && (
						<div style={{display: "flex", placeItems: "center", gap: 15, justifyContent: "center"}}>
							Processando {filename}
							<div className="loading-container">
								<FontAwesomeIcon
									className="loading-spinner"
									icon={faSpinner}
									size="2x"
								/>
							</div>
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
