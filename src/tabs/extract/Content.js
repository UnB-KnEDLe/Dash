import { useState, useEffect } from "react";
import { actsData } from "../../data/actsData";
import Table from '../../components/table/Table';

import ModeSwitch from '../../components/table/ModeSwitch';
import Pagination from "../../components/table/Pagination";

import { TableContainer } from "../../styles/table";

import { useActs, useSelectedFile, useShowEntities, useModalData, useItemsPerPage, useCurrentPage, useActsTypes } from "../../context/extractContext";

export default function Content(){
    const { acts, removeActs, addActs } = useActs();
    const { selectedFile } = useSelectedFile();
    const { showEntities, setShowEntities } = useShowEntities();
    const { modalData, setModalData } = useModalData();
    const { itemsPerPage, setItemsPerPage } = useItemsPerPage();
    const { currentPage, setCurrentPage } = useCurrentPage();
    const { actsTypes } = useActsTypes();
    
    const startPage = (currentPage - 1) * itemsPerPage;
    const [selectedAct, setSelectedAct] = useState(actsTypes[0]);
    const [columns, setColumns] = useState(acts[selectedAct].columns || []);
    const [content, setContent] = useState(acts[selectedAct].content.slice(startPage, startPage + itemsPerPage) || []);
    
    const contentCount = acts[selectedAct].content.length;
    
    const handleActChange = async e => {
        const { value } = e.target;
        setSelectedAct(value)
        setColumns(acts[value].columns)
        setCurrentPage(1)
    }

    useEffect( () => {
        var newContent = acts[selectedAct].content.filter(item => selectedFile.includes(item.file))
        setContent(newContent.slice(startPage, startPage + itemsPerPage))
    }, [selectedAct, itemsPerPage, acts, setCurrentPage, startPage, selectedFile, actsTypes, removeActs, addActs]);

    return (
        <TableContainer>
            <div className="toolbar">
                <div className="selector">
                    <select onChange={handleActChange} value={selectedAct}>
                        {actsTypes.map((key, index) => (
                            <option key={index} value={key}>{actsData[key].title || key.replace('_', ' ')}</option>
                        ))}
                    </select>
                </div>
                <div className="right-toolbar">
                    <div className="switch">
                        <ModeSwitch state={showEntities} onClick={setShowEntities} />
                    </div>
                    <div className="pagination">
                        <Pagination
                            contentCount={contentCount}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            itemsPerPage={itemsPerPage}
                            setItemsPerPage={setItemsPerPage}
                            showAll
                        />
                    </div>
                </div>
            </div>
            <div className="table-container">
                { content.length === 0 && <h3>Não há atos deste tipo nos arquivos selecionados.</h3> }
                <Table
                    data={content}
                    columns={columns}
                    showEntities={showEntities}
                    modalData={modalData}
                    setModalData={setModalData}
                />
            </div>
        </TableContainer>
    )
}