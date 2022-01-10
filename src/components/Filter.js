import { InputField } from '../styles/search';
import FilterInput from './FilterInput';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useStart, useActType, useHeading, useContent, useLoading, useFilters } from "../context/searchContext";
import { actsData } from "../data/actsData";

export default function Filters() {    
    const { filters, setFilters, onSubmit } = useFilters();
    const { setStart } = useStart();
    const { actType, setActType } = useActType();
    const { setHeading } = useHeading();
    const { setContent } = useContent();
    const { loading } = useLoading();

	const onChangeActType = async (e) => {
        const { value } = e.target

        setFilters({});
		if (value === '') return;

		setStart(true);
		setContent({})
        setHeading([])
        await setActType(value);

		let newFilters = {};
		actsData[value].paramsKeys
			.forEach( filter => newFilters[filter.label] = "" )
		setFilters(newFilters);
	}

    const selectOptions = Object.keys(actsData).filter(act => actsData[act].search === true)

    return (
        <>
            <select onChange={onChangeActType} >	
                <option value="">Selecione o Tipo de Ato</option>
                {selectOptions.map((key, index) => (
                    <option key={index} value={key}>{actsData[key].title}</option>
                ))}
            </select>
            { Object.keys(filters).length === 0 && <h3>Selecione um tipo de ato para pesquisar</h3> }
            <InputField>
                {Object.keys(filters).length > 0 && Object.keys(filters).map( (filterKey, index) => {
                    let title = actsData[actType].paramsKeys.find( filter => filter.label === filterKey ).title;
                    return (
                        <FilterInput key={index} label={filterKey} title={title} />
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
            <div>
                <button onClick={onSubmit}>Pesquisar</button>
            </div>
        </>
    )
}