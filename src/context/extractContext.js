import React, { createContext, useState, useContext } from 'react';

const ExtractContext = createContext();

export default function ExtractProvider({ children }) {
    const [acts, setActs] = useState({});
    const [filenames, setFilenames] = useState([]);
    const [selectedFile, setSelectedFile] = useState([]);
    const [showEntities, setShowEntities] = useState(false);
    const [modalData, setModalData] = useState({});
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandTable, setExpandTable] = useState(false);
    const [loadingList, setLoadingList] = useState([])
    const [actsTypes, setActsTypes] = useState(Object.keys(acts));

    const addAct = (file) => {
        var newActs = acts
        for (let actType in file) {
            if(Object.keys(newActs).includes(actType)){
                newActs[actType].content = newActs[actType].content.concat(file[actType].content)
            } else {
                newActs[actType] = file[actType]
            }
        }

        setActs(newActs)
    }

    const removeAct = (filename) => {
        var newActs = acts
        for (let actType in newActs) {
            newActs[actType].content = newActs[actType].content.filter(entity => entity.file !== filename)
            if(newActs[actType].content.length === 0){
                delete newActs[actType]
            }
        }

        setFilenames(filenames.splice(filenames.indexOf(filename), 1))
        setActs(newActs)
        setSelectedFile(selectedFile => selectedFile.filter(file => file !== filename))
    }

    return (
        <ExtractContext.Provider
            value={{
                acts, setActs, addAct, removeAct,
                filenames, setFilenames,
                selectedFile, setSelectedFile,                
                showEntities, setShowEntities,
                modalData, setModalData,
                itemsPerPage, setItemsPerPage,
                currentPage, setCurrentPage,
                expandTable, setExpandTable,
                loadingList, setLoadingList,
                actsTypes, setActsTypes
            }}
        >
            {children}
        </ExtractContext.Provider>
    );
}

export function useActs() {
    const { acts, setActs, addAct, removeAct } = useContext(ExtractContext);
    return { acts, setActs, addAct, removeAct };
}

export function useFilenames() {
    const { filenames, setFilenames } = useContext(ExtractContext);
    return { filenames, setFilenames };
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

export function useExpandTable() {
    const { expandTable, setExpandTable } = useContext(ExtractContext);
    return { expandTable, setExpandTable };
}

export function useLoadingList() {
    const { loadingList, setLoadingList } = useContext(ExtractContext);
    return { loadingList, setLoadingList };
}

export function useActsTypes() {
    const { actsTypes, setActsTypes } = useContext(ExtractContext);
    return { actsTypes, setActsTypes };
}
