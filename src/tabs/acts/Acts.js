import { useState } from "react";
import UploadComponent from "../../components/UploadComponent";
import { ActsList } from "../../styles/acts";
import ActsComponent from "../../components/ActsComponent";

import { extractActs } from "../../services/services";

import { Container } from "../../styles/app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faFile } from "@fortawesome/free-solid-svg-icons";

export default function Acts() {
	const [acts, setActs] = useState({});
	const [actsList, setActsList] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [actBodyColor, setActBodyColor] = useState("#ffffff");
	const [collapsed, setCollapsed] = useState(false);
	const [filename, setFilename] = useState("");

	async function changeHandler(files) {
		setFilename(files[0].name);
		setLoading(true);
		setActs({});
		setActsList([]);
		setActBodyColor("#ccc");

		try{
			var acts = await extractActs(files[0]);
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

		setCollapsed(true)
	}

	const handleCollapse = () => setCollapsed(false);

	return (
		<>
			<Container>
				<h2>Extração de Atos do Diário Oficial do Distrito Federal</h2>
				{ collapsed ? (
					<div style={{display: "flex", placeItems: "center"}}>
						<FontAwesomeIcon icon={faFile} style={{marginRight: 10, color: "var(--primary)"}} />
						<span>{filename}</span>
						<button class="btn" onClick={handleCollapse}>Extrair novo arquivo</button>
					</div>
						) : <UploadComponent changeHandler={changeHandler}/>
				}
			</Container>
			<Container>
				{error}
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