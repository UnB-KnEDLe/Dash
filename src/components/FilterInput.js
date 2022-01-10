import { useEffect, useState } from 'react';
import {  useFilters } from "../context/searchContext";

export default function FilterInput({ label, title }) {
    const { filters, setParameter, onSubmit } = useFilters();
    const [ value, setValue ] = useState('');

    const handleOnChange = async (e) => {
        setValue(e.target.value);
        setParameter(label, e.target.value);
    }

    const handleKeyPressed = async (e) => {
        if (e.key === 'Enter') onSubmit();
    }

    useEffect(() => {
        if (filters[label].length === 0) setValue('');
    }, [filters, label])

    return (
        <div className="filter">
            <div className="filter-input">
                <input value={value} onKeyPress={handleKeyPressed} onChange={handleOnChange} placeholder={`+ Filtro de ${title}`}/>
            </div>
        </div>
    )
}