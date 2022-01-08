import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [start, setStart] = useState(true);
    const [heading, setHeading] = useState([]);
    const [filters, setFilters] = useState({});
    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(false);
    const [actType, setActType] = useState('');
    const [error, setError] = useState('');

    const setParameter = (label, event) => {
        const { value } = event.target
        if (value.length === 0) return;
        setFilters({ ...filters, [label]: value })
	}

    const sendError = (error) => {
        setError(error)
        setTimeout( () => setError(''), 5000)
    }

    return (
        <SearchContext.Provider
            value={{
                start, setStart,
                heading, setHeading,
                content, setContent,
                loading, setLoading,
                actType, setActType,
                error, setError, sendError,
                filters, setFilters, setParameter
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export function useStart() {
    const { start, setStart } = useContext(SearchContext);
    return { start, setStart };
}

export function useHeading() {
    const { heading, setHeading } = useContext(SearchContext);
    return { heading, setHeading };
}

export function useContent() {
    const { content, setContent } = useContext(SearchContext);
    return { content, setContent };
}

export function useLoading() {
    const { loading, setLoading } = useContext(SearchContext);
    return { loading, setLoading };
}

export function useActType() {
    const { actType, setActType } = useContext(SearchContext);
    return { actType, setActType };
}

export function useError() {
    const { error, setError, sendError } = useContext(SearchContext);
    return { error, setError, sendError };
}

export function useFilters() {
    const { filters, setFilters, setParameter } = useContext(SearchContext);
    return { filters, setFilters, setParameter };
}