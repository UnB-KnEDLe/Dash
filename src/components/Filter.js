import { InputField } from '../styles/search';
import FilterInput from './FilterInput';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useStart, useActType, useHeading, useContent, useLoading, useError, useFilters } from "../context/searchContext";
import service from '../services/searchService';
import { actsTypes } from "../actTypes";

export default function Filters() {    
    const { filters, setFilters } = useFilters();
    const { setStart } = useStart();
    const { actType, setActType } = useActType();
    const { setHeading } = useHeading();
    const { setContent } = useContent();
    const { loading, setLoading } = useLoading();
    const { sendError } = useError();

    const onSubmit = async (url) => {
        Object.keys(filters).forEach( label => {
            if (filters[label] !== '') {
                url += `${label}=${filters[label]}&`;
            }
        })

        setHeading([]);
        setContent({});
        setLoading(true)

        const { headingList, contentList} = await service(url)
            .then( response => response)
            .catch( err => {
                console.log(err)
                sendError("Houve um erro ao buscar os dados. Tente novamente mais tarde.")
                setLoading(false)
            })        

        setHeading(headingList)
        setContent(contentList)
        
		setStart(false);
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
		actsTypes[value].paramsKeys
			.forEach( filter => newFilters[filter.label] = "" )
		setFilters(newFilters);

        onSubmit(actsTypes[value].base_url)
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
                    size="2x"
                    />
                </div>
            )}
        </>
    )
}