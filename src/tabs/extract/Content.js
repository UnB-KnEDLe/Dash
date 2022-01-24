import { useState, useEffect } from "react";
import { actsData } from "../../data/actsData";
import Table from '../../components/table/Table';

import ModeSwitch from '../../components/table/ModeSwitch';
import Pagination from "../../components/table/Pagination";

import { Extract } from "../../styles/extract";

import { useActs, useSelectedFile, useShowEntities, useModalData, useItemsPerPage, useCurrentPage } from "../../context/extractContext";

export default function Content(){
    const { acts } = useActs();
    const { selectedFile } = useSelectedFile();
    const { showEntities, setShowEntities } = useShowEntities();
    const { modalData, setModalData } = useModalData();
    const { itemsPerPage, setItemsPerPage } = useItemsPerPage();
    const { currentPage, setCurrentPage } = useCurrentPage();
    
    var actsTypes = Object.keys(acts);
    actsTypes = actsTypes.filter(act => acts[act].content.length > 0);
    var startPage = (currentPage - 1) * itemsPerPage;
    
    const [selectedAct, setSelectedAct] = useState(actsTypes[0]);
    const [columns, setColumns] = useState(acts[selectedAct].columns);
    const [content, setContent] = useState(acts[selectedAct].content.slice(startPage, startPage + itemsPerPage));
    
    var totalPages = Math.ceil(acts[selectedAct].content.length / itemsPerPage);
    totalPages = totalPages < 0 ? 1 : totalPages;

    if (selectedFile !== '') 
        setContent(content.filter(item => item.file === selectedFile))
    
    const handleActChange = async e => {
        const { value } = e.target;
        setSelectedAct(value)
        setColumns(acts[value].columns)
        setCurrentPage(1)
    }

    useEffect( () => {
        if(itemsPerPage !== -1){
            setContent(acts[selectedAct].content.slice(startPage, startPage + itemsPerPage))
        }
        else setContent(acts[selectedAct].content)
    }, [selectedAct, itemsPerPage, acts, setCurrentPage, startPage]);

    return (
        <Extract>
            <div className="toolbar">
                <div className="selector">
                    <select onChange={handleActChange} value={selectedAct}>
                        {actsTypes.map((key, index) => (
                            <option key={index} value={key}>{actsData[key].title}</option>
                        ))}
                    </select>
                </div>
                <div className="right-toolbar">
                    <div className="switch">
                        <ModeSwitch state={showEntities} onClick={setShowEntities} />
                    </div>
                    <div className="pagination">
                        <Pagination
                            totalPages={totalPages}
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
                <Table
                    data={content}
                    columns={columns}
                    showEntities={showEntities}
                    modalData={modalData}
                    setModalData={setModalData}
                />
            </div>
        </Extract>
    )
}