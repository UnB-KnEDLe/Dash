import React, { createContext, useState, useContext } from 'react';

const ExtractContext = createContext();

export default function ExtractProvider({ children }) {
    const [acts, setActs] = useState({});
    const [collapsed, setCollapsed] = useState(false);
    const [filenames, setFilenames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState('');
    const [showEntities, setShowEntities] = useState(false);
    const [modalData, setModalData] = useState({});
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <ExtractContext.Provider
            value={{
                acts, setActs,
                collapsed, setCollapsed,
                filenames, setFilenames,
                selectedFile, setSelectedFile,
                loading, setLoading,
                showEntities, setShowEntities,
                modalData, setModalData,
                itemsPerPage, setItemsPerPage,
                currentPage, setCurrentPage
            }}
        >
            {children}
        </ExtractContext.Provider>
    );
}

export function useActs() {
    const { acts, setActs } = useContext(ExtractContext);
    return { acts, setActs };
}

export function useCollapsed() {
    const { collapsed, setCollapsed } = useContext(ExtractContext);
    return { collapsed, setCollapsed };
}

export function useFilenames() {
    const { filenames, setFilenames } = useContext(ExtractContext);
    return { filenames, setFilenames };
}

export function useLoading() {
    const { loading, setLoading } = useContext(ExtractContext);
    return { loading, setLoading };
}

export function useSelectedFile() {
    const { selectedFile, setSelectedFile } = useContext(ExtractContext);
    return { selectedFile, setSelectedFile };
}

export function useShowEntities() {
    const { showEntities, setShowEntities } = useContext(ExtractContext);
    return { showEntities, setShowEntities };
}

export function useModalData() {
    const { modalData, setModalData } = useContext(ExtractContext);
    return { modalData, setModalData };
}

export function useItemsPerPage() {
    const { itemsPerPage, setItemsPerPage } = useContext(ExtractContext);
    return { itemsPerPage, setItemsPerPage };
}

export function useCurrentPage() {
    const { currentPage, setCurrentPage } = useContext(ExtractContext);
    return { currentPage, setCurrentPage };
}