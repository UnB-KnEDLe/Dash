import { useState } from 'react';
import { InputField } from '../styles/search';

import { useStart, useActType, useHeading, useContent, useLoading, useError, useFilters } from "../context/searchContext";
import service from '../services/searchService';
import { actsTypes } from "../actTypes";

export default function Filters() {
    const [ baseUrl, setBaseUrl ] = useState('');
    
    const { filters, setFilters } = useFilters();
    const { setStart } = useStart();
    const { actType, setActType } = useActType();
    const { setHeading } = useHeading();
    const { setContent } = useContent();
    const { setLoading } = useLoading();
    const { setError } = useError();

    const onSubmit = () => {
		setStart(false);
		service(filters, baseUrl, setHeading, setContent, setLoading, setError);
	}

	const onChangeActType = async (e) => {
        setFilters({});
		if (e.target.value === '') return;

		setStart(true);
		setContent([])
		setActType(e.target.value);

		let newFilters = {};
        setBaseUrl(actsTypes[e.target.value].base_url);
		actsTypes[e.target.value].paramsKeys
			.forEach( filter => newFilters[filter.label] = "" )
		setFilters(newFilters);
	}

    return (
        <>
            <select onChange={onChangeActType} >	
                <option value="">Selecione o Tipo de Ato</option>
                {Object.keys(actsTypes).map((key, index) => (
                    <option key={index} value={key}>{actsTypes[key].title}</option>
                ))}
            </select>
            { Object.keys(filters).length === 0 && <h3>Selecione um tipo de ato para pesquisar</h3> }
            <InputField>
                {Object.keys(filters).length > 0 && Object.keys(filters).map( (filterKey, index) => {
                    let title = actsTypes[actType].paramsKeys.find( filter => filter.label === filterKey ).title;
                    console.log(title)
                    return (
                        <FilterInput key={index} label={filterKey} submitFunction={onSubmit} title={title} />
                    )}) }
            </InputField>
            <div className="search-button">
                <button onClick={onSubmit}>Pesquisar</button>
            </div>
        </>
    )
}

export function FilterInput({ label, title, submitFunction }) {
    const { setParameter } = useFilters();

    const handleOnChange = (e) => {
        setParameter(label, e);
    }

    const handleKeypress = e => {
		if (e.code !== 'Enter') return;
		submitFunction();
	};

    return (
        <div className="filter">
            <div className="filter-input">
                <input onKeyPress={ handleKeypress } name={label} onChange={handleOnChange} placeholder={`Filtro de ${title}`}/>
            </div>
        </div>
    )

}