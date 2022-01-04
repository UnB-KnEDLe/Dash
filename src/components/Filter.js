import { useEffect, useState } from 'react';
import { InputField } from '../styles/search';

import { useStart, useActType, useHeading, useContent, useLoading, useError, useFilters } from "../context/searchContext";
import service from '../services/searchService';
import { actsTypes } from "../actTypes";

export default function Filters() {
    const [ baseUrl, setBaseUrl ] = useState('');
    
    const { filters, setFilters } = useFilters();
    const { setStart } = useStart();
    const { setActType } = useActType();
    const { setHeading } = useHeading();
    const { setContent } = useContent();
    const { setLoading } = useLoading();
    const { setError } = useError();

    const onSubmit = () => {
		setStart(false);
		service(filters, baseUrl, setHeading, setContent, setLoading, setError);
	}

	const onChangeActType = async (e) => {
        const { value } = e.target;

        setFilters({});
		if (value === '') return;

		setStart(true);
		setContent([])
		setActType(value);

        setBaseUrl(actsTypes[value].base_url);
		actsTypes[e.target.value].paramsKeys
            .forEach( filter => setFilters({ ...filters, [filter.label]: '' }) )
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
                {Object.keys(filters).length > 0 && Object.keys(filters).map( (filterKey, index) => (
                    <FilterInput key={index} label={filterKey} submitFunction={onSubmit} title={filterKey} />
                )) }
            </InputField>
            <div className="search-button">
                <button onClick={onSubmit}>Pesquisar</button>
            </div>
        </>
    )
}

export function FilterInput({ label, title, submitFunction }) {
    const { filters, setParameter } = useFilters();
    const [ value, setValue ] = useState('');

    const handleOnChange = (e) => {
        setParameter(label, e);
        setValue(e.target.value);
    }

    const handleKeypress = e => {
		if (e.code !== 'Enter') return;
		submitFunction();
	};

    useEffect( () => {
        if (filters[label] === '') setValue('');
    }, [filters, label])

    return (
        <div className="filter">
            <div className="filter-input">
                <input onKeyPress={ handleKeypress } value={value} onChange={handleOnChange} placeholder={`Filtro de ${title}`}/>
            </div>
        </div>
    )

}