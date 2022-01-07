import { useEffect, useState } from 'react';
import {  useFilters } from "../context/searchContext";

export default function FilterInput({ label, title, submitFunction }) {
    const { filters, setParameter } = useFilters();
    const [ value, setValue ] = useState('');

    const handleOnChange = async (e) => {
        const { value } = e.target;
        setParameter(label, e);
        setValue(value);
        if(value.length > 3) submitFunction();
    }

    const handleKeypress = e => {
		if (e.code !== 'Enter') return;
		submitFunction();
	};

    useEffect(() => {
        setValue(filters[label]);
    }, [filters, label])


    return (
        <div className="filter">
            <div className="filter-input">
                <input onKeyPress={ handleKeypress } value={value} onChange={handleOnChange} placeholder={`+ Filtro de ${title}`}/>
            </div>
        </div>
    )

}