import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagination({contentCount, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage, showAll}){
    var totalPages = parseInt(Math.ceil(contentCount/itemsPerPage))

    const [showInput, setShowInput] = useState(false);
    const optionsCount = [10, 25, 50];

    const nextPage = () => currentPage < totalPages && setCurrentPage(page => page + 1);
    const prevPage = () => currentPage > 1 && setCurrentPage(page => page - 1);

    const handleShowInput = () => setShowInput(!showInput);

    const handleInputChange = (e) => {
        const { value } = e.target
        if (value > totalPages) setCurrentPage(totalPages)
        else if (value < 1) setCurrentPage(1)
        else setCurrentPage(value)
    }

    const handleItemsPerPage = (e) => {
        const { value } = e.target
        setItemsPerPage(value)
        setCurrentPage(1)
    }

    return (
        <div className="content">
            <div className="per-page">
                <select style={{width: 55}} onChange={handleItemsPerPage} value={itemsPerPage}>
                    { optionsCount.map((count, index) => (
                        <option key={index} value={count}>{count}</option>
                    ))}
                    { showAll && <option value={totalPages}>∞</option> }
                </select> 
                {itemsPerPage > 0 && <span>itens por pág.</span>}
            </div>
            <div className="pages-count">
                <button className="prev" disabled={currentPage === 1} onClick={prevPage}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                { showInput ? (
                    <input
                        placeholder="Página.."
                        min="1"
                        max={totalPages}
                        value={currentPage}
                        onChange={handleInputChange}
                        onBlur={handleShowInput}
                    />
                ) : (
                    <div className="page-display" onClick={handleShowInput}>
                        {itemsPerPage === totalPages ? 'Página única' : 
                            <>Pág. {currentPage} de {totalPages}</>
                        }
                    </div>
                ) }
                <button className="next" disabled={currentPage === totalPages} onClick={nextPage}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
        </div>
    )
}