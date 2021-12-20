import { useState } from "react";
import { InputField, Container } from '../../styles/search';
import { actsTypes } from "./actTypes";
import { TableContent } from "../../styles/table_style";
import MUIDataTable from 'mui-datatables';
import ExpandText from "../../components/expandText";
import { TableContainer } from "../../styles/table_style";
import { actsData } from "../../actsData";

const labelReplace = {
	aposentadoria: 'Aposentadoria',
	nomeacao: 'Nomeação',
	exoneracao: 'Exoneração',
	abono: 'Abono',
	substituicao: 'Substituição',
	efetivos_exo: 'Exoneração de Efetivos',
	sem_efeito_aposentadoria: 'Tornado Sem Efeito a Aposentadoria',
}

export function Search() {
	const [filters, setFilters] = useState({});
	const [baseUrl, setBaseUrl] = useState('');
	const [heading, setHeading] = useState([]);
	const [content, setContent] = useState({});
	const [loading, setLoading] = useState(false);
	const [actType, setActType] = useState('');

	const handleKeypress = e => {
		if (e.code === 'Enter') {
			onSubmit();
		}
	};

	const onChangeActType = (e) => {
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
		if(value.target.value !== '') {
			let newFilters = filters;
			newFilters[label].data = value.target.value;
			setFilters(newFilters);
		}
	}

	const onSubmit = async () => {
		let url = baseUrl;
		let headingList = []
		let contentList = []
		Object.keys(filters).forEach( label => {
			if (filters[label].data !== '') {
				url += `${label}=${filters[label].data}&`;
			}
		})
		setHeading([]);
		setContent({});
		setLoading(true)
		console.log(url)
		var response = await fetch(url)
        	.then(response => response.json())

		console.log(response)

		if(Object.keys(response).length === 0) return;

		Array.from(Object.keys(response[0])).forEach( key => {
			let item = response[0][key]
			if (typeof item === 'string') {
				headingList.push(key)
			} else {
				for (var itemKey in item) {
					headingList.push(itemKey)
				}
			}
		})
		
		response.forEach( item => {
			let row = []
			Object.keys(item).forEach( key => {
				if(typeof item[key] === 'string') {
					row.push(item[key])
				} else {
					for (var itemKey in item[key]) {
						row.push(item[key][itemKey])
					}
				}
			})
			contentList.push(row)
		} )

		setHeading(headingList)			
		setContent(contentList)
		setLoading(false)

	}

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
					<option value="exoneracao_efetivos">Exoneração Efetivos</option>
					<option value="exoneracao_nao_efetivos">Exoneração Não-Efetivos</option>
					<option value="nomeacao_comissionada">Nomeação Comissionada</option>
					<option value="nomeacao_efetiva">Nomeação Efetiva</option>
					<option value="retificacao">Retificação</option>
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
				
				{ loading && <h3>Carregando...</h3> }
			</Container>
			{ content.length > 0 && (
				<TableContent style={{width: '100%'}}>
					<TableContainer color={actsData[actType].color} >
						<MUIDataTable
							className="mui-table"
							title={<h6 style={{fontSize: '189%', color: '#144e81', fontWeight: 'bold', textAlign: 'left'}}>{labelReplace[actType]}</h6>}
							data={content.map((row) => row.map((cell) => <ExpandText text={cell} />) )}
							columns={heading}
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