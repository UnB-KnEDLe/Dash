import { useState } from "react";
import { InputField, Container } from '../../styles/search';
import { actsTypes } from "./actTypes";
import { TableContent } from "../../styles/table_style";
import MUIDataTable from 'mui-datatables';
import ExpandText from "../../components/expandText";
import { TableContainer } from "../../styles/table_style";
import { actsData } from "../../actsData";
import { columnsReplace } from "../../columnsData";
import service from './service';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const labelReplace = {
	abono: "Abono",
	aposentadoria: "Aposentadoria",
	cessao: "Cessão",
	exoneracao_efetivos: "Exoneração Efetivos",
	exoneracao: "Exoneração Não Efetivos",
	nomeacao_comissionada: "Nomeação Comissionada",
	nomeacao_efetiva: "Nomeação Efetiva",
	retificacao: "Retificação",
	reversao: "Reversão",
	substituicao: "Substituição",
	tornado_sem_efeito: "Tornada Sem Efeito a Aposentadoria",
}

export function Search() {
	const [filters, setFilters] = useState({});
	const [baseUrl, setBaseUrl] = useState('');
	const [heading, setHeading] = useState([]);
	const [content, setContent] = useState({});
	const [loading, setLoading] = useState(false);
	const [actType, setActType] = useState('');
	const [error, setError] = useState('');

	const handleKeypress = e => {
		if (e.code === 'Enter') {
			onSubmit();
		}
	};

	const onChangeActType = (e) => {
		setContent([])
		setFilters({})
		if (e.target.value === '') return
		let newFilters = {};
		setActType(e.target.value);
		actsTypes[e.target.value].paramsKeys
			.forEach( filter => {
				newFilters[filter.label] = {
					label: filter.label,
					title: filter.title,
					data: ''
				}
			} )
		setBaseUrl(actsTypes[e.target.value].base_url);
		setFilters(newFilters);
	}

	const setParameter = (label, value) => {
		if(value.target.value.length >= 3) {
			let newFilters = filters;
			newFilters[label].data = value.target.value;
			setFilters(newFilters);
		} else {
			let newFilters = filters;
			delete newFilters[label];
			setFilters(newFilters);
		}
	}

	const onSubmit = () => service(filters, baseUrl, setHeading, setContent, setLoading, setError);

	return (
		<>
			<Container>
				<div className="search-header">
					<h2>Central de pesquisas do DoDFMiner</h2>
				</div>
				<select onChange={onChangeActType} >
					<option value="">Selecione o Tipo de Ato</option>
					<option value="abono">Abono</option>
					<option value="aposentadoria">Aposentadoria</option>
					<option value="cessao">Cessão</option>
					<option value="exoneracao_efetivos">Exoneração Efetivos</option>
					<option value="exoneracao">Exoneração Não Efetivos</option>
					<option value="nomeacao_comissionada">Nomeação Comissionada</option>
					<option value="nomeacao_efetiva">Nomeação Efetiva</option>
					<option value="retificacao">Retificação</option>
					<option value="reversao">Reversão</option>
					<option value="substituicao">Substituição</option>
					<option value="tornado_sem_efeito">Tornada Sem Efeito a Aposentadoria</option>
				</select>
				{ Object.keys(filters).length === 0 && <h3>Selecione um tipo de ato para continuar</h3> }
				<InputField>
					{Object.keys(filters).map( filterKey => (
						<div className="filter">
							<div className="filter-input">
								<input onKeyPress={ handleKeypress } onChange={ value => setParameter(filterKey, value)} placeholder={`Filtro de ${filters[filterKey].title}`}/>
							</div>
						</div>
					)) }
				</InputField>
				<div className="search-button">
					<button onClick={onSubmit}>Pesquisar</button>
				</div>
				
				{loading && (
					<div className="loading-container">
						<FontAwesomeIcon
						className="loading-spinner"
						icon={faSpinner}
						size="lg"
						/>
					</div>
				)}
				{ error.length > 0 && <h3>{error}</h3> }

			</Container>
			{ content.length > 0 && (
				<TableContent style={{width: '100%'}}>
					<TableContainer color={actsData[actType].color} >
						<MUIDataTable
							className="mui-table"
							title={<h6 style={{fontSize: '189%', color: '#144e81', fontWeight: 'bold', textAlign: 'left'}}>{labelReplace[actType]}</h6>}
							data={content.map((row) => row.map(cell => <ExpandText text={cell} />) )}
							columns={heading.map(column => columnsReplace(column))}
							options={{
								rowsPerPage: 3000
							}}
						/>
					</TableContainer>
				</TableContent>
			) }
		</>
	);
}

const SearchData = {
	title: "Pesquisar"
};

export default SearchData;