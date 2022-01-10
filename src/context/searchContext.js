import React, { createContext, useState, useContext } from 'react';
import { actsData } from '../actsData';
import service from '../services/searchService';

const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [start, setStart] = useState(true);
    const [heading, setHeading] = useState([]);
    const [filters, setFilters] = useState({});
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const [actType, setActType] = useState('');
    const [baseUrl, setBaseUrl] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async () => {
        if(!actType) return

        var url = await actsData[actType].base_url

        Object.keys(filters).forEach( label => {
            if (filters[label] === '') return
            url += `${label}=${filters[label]}&`;
        })

        setHeading([]);
        setContent({});
        setLoading(true)

        const { headingList, contentList } = await service(url)
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

    const setParameter = (label, value) => {
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
                baseUrl, setBaseUrl,
                filters, setFilters, setParameter, onSubmit
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
    const { filters, setFilters, setParameter, onSubmit } = useContext(SearchContext);
    return { filters, setFilters, setParameter, onSubmit };
}

export function useBaseUrl() {
    const { baseUrl, setBaseUrl } = useContext(SearchContext);
    return { baseUrl, setBaseUrl };
}