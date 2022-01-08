import { useState } from 'react';
import { InputField } from '../styles/search';
import FilterInput from './FilterInput';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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
    const { loading, setLoading } = useLoading();
    const { sendError } = useError();

    const onSubmit = async () => {
		setStart(false);
        setLoading(true)
		await service(filters, baseUrl, setHeading, setContent, setLoading, sendError);
        setLoading(false)
	}

	const onChangeActType = async (e) => {
        const { value } = e.target
        setFilters({});
		if (value === '') return;

		setStart(true);
		setContent([])
		setActType(value);

		let newFilters = {};
        setBaseUrl(actsTypes[value].base_url);
		actsTypes[value].paramsKeys
			.forEach( filter => newFilters[filter.label] = "" )
		setFilters(newFilters);

        onSubmit()
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
                    return (
                        <FilterInput key={index} label={filterKey} submitFunction={onSubmit} title={title} />
                    )}) }
            </InputField>
            {loading && (
                <div className="loading-container">
                    <FontAwesomeIcon
                    className="loading-spinner"
                    icon={faSpinner}
                    size="lg"
                    />
                </div>
            )}
        </>
    )
}