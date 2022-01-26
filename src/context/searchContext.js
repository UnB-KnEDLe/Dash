import React, { createContext, useState, useContext } from 'react';
import { actsData } from '../data/actsData';
import service, { count } from '../services/searchService';

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
    const [modalData, setModalData] = useState({});
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [contentCount, setContentCount] = useState(0);

    const onSubmit = async () => {
        if(actType.length === 0) return

        var url = await actsData[actType].base_url
        var count_url = url.length
        
        Object.keys(filters).forEach( label => {
            if (filters[label] === '') return
            url += `${label}=${filters[label]}&`;
        })

        url = url + 'page=' + currentPage + '&per_page=' + itemsPerPage

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
            

        await count(url.replace('?','/count?', count_url))
            .then( res => setContentCount(res) )

        setHeading(headingList)
        setContent(contentList)
        
		setStart(false);
        setLoading(false)
	}

    const setParameter = (label, value) => {
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
                filters, setFilters, setParameter, onSubmit,
                modalData, setModalData,
                itemsPerPage, setItemsPerPage,
                currentPage, setCurrentPage,
                contentCount, setContentCount
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

export function useModalData() {
    const { modalData, setModalData } = useContext(SearchContext);
    return { modalData, setModalData };
}

export function useItemsPerPage() {
    const { itemsPerPage, setItemsPerPage } = useContext(SearchContext);
    return { itemsPerPage, setItemsPerPage };
}

export function useCurrentPage() {
    const { currentPage, setCurrentPage } = useContext(SearchContext);
    return { currentPage, setCurrentPage };
}

export function useContentCount() {
    const { contentCount, setContentCount } = useContext(SearchContext);
    return { contentCount, setContentCount };
}