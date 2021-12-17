import { useState } from "react";
import { Filters, InputField, Container } from '../../styles/search';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch, faTimes, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const filters = [{title: "Tipo de Ato"},
	{title: "Nome"}, {title: "Cargo"}, {title: "Matrícula"},
	{title: "Data"}, {title: "Classe"}, {title: "Símbolo"}
];

export function Search() {
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [actType, setActType] = useState('');

	const onChangeActType = (e) => {
		setActType(e.target.value);
	}

	const onSelectFilter = (filter_index) => {
		let newSelectedFilters = [...selectedFilters];
		newSelectedFilters.push(filters[filter_index]);
		setSelectedFilters([...new Set(newSelectedFilters)]);
	}

	const onRemoveFilter = (filter_index) => {
		let newSelectedFilters = [...selectedFilters];
		newSelectedFilters.splice(filter_index, 1);
		setSelectedFilters(newSelectedFilters);
	}

	return (
		<Container>
			<div className="search-header">
				<h2>Hub de pesquisa avançada do DoDFMiner</h2>
				<h3>Realize pesquisas avançadas nos dados obtidos pela ferramenta.</h3>
			</div>
			<select onChange={onChangeActType} >
				<option value="">Selecione o Tipo de Ato</option>
				<option value="aposentadoria">Aposentadoria</option>
				<option value="aposentadoria">Aposentadoria</option>
				<option value="aposentadoria">Aposentadoria</option>
				<option value="aposentadoria">Aposentadoria</option>
				<option value="aposentadoria">Aposentadoria</option>
			</select>
			<InputField>
				<div class="input-filters">
					{ selectedFilters.map( (filter, index) => (
						<div class="active-filter">
							<button onClick={ () => onRemoveFilter(index) }>
								<FontAwesomeIcon icon={faTimes}/>
							</button>
							<div className="filter-input">
								<input />
								<small>{ filter.title }</small>
							</div>
						</div>
					)) }
				</div>
				<div class="main-input">
					<FontAwesomeIcon className="icon" icon={faSearch} size="lg"/>
					<input/>
				</div>
			</InputField>
			<Filters>
				{ actType === "aposentadoria" && filters.map( (filter, index) => !selectedFilters.includes(index) && (
					<button onClick={ () => onSelectFilter(index) }>
						<FontAwesomeIcon icon={faFilter} />
						{filter.title}
					</button>
				))}
				{ actType === "" && (
					<h3>Selecione um Tipo de Ato para visualizar os filtros.</h3>
				)}
			</Filters>
		</Container>
	);
}

const SearchData = {
	title: "Pesquisa Avançada"
};

export default SearchData;
