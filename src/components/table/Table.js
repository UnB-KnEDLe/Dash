import { useState } from 'react';
import { columnsReplace } from '../../data/columnsData';
import TableModal from './TableModal';

import { Container } from '../../styles/table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaUpAlt } from '@fortawesome/free-solid-svg-icons';

const CHAR_LIMIT = 50;

export default function Table({data, columns, showEntities, modalData, setModalData, showColumnFilter}) {
    const [ sortColumn, setSortColumn ] = useState(0);
    const [ sortPattern, setSortPattern ] = useState(1);
    const [ filterColumn, setFilterColumn ] = useState({});

    if (Object.keys(filterColumn).length > 0) data = data.filter(row => {
        const newRow = {...row.entities};
        var result = true
        Object.keys(filterColumn).forEach(key => {
            var filterValue = filterColumn[key].toLowerCase();
            if(newRow[key].toLowerCase().search(filterValue) === -1) result = false;
        });
        return result;
    })

    if(sortColumn !== '') data = data.sort((a, b) => {
        if(Object.keys(a).length === 0 || Object.keys(b).length === 0) return 1;
        if(a.entities[sortColumn] > b.entities[sortColumn]) return sortPattern;
        return sortPattern * -1;
    });

    const shrinkText = (text) => {
        if(typeof text !== "string" || text.length <= CHAR_LIMIT) return text
        return text.slice(0, CHAR_LIMIT - 3) + '...'
    }

    const handleSort = (column) => {
        if(sortColumn === column) setSortPattern(sortPattern * -1)
        else setSortColumn(1)
        setSortColumn(column)
    }

    const handleFilter = (e, index) => {
        const { value } = e.target;
        setFilterColumn({...filterColumn, [index]: value})
    }

    return (
        <>
            <Container>
                { (showEntities) && (
                    <thead>
                        {showColumnFilter && (
                            <tr>
                                { columns.map((column, index) => (
                                    <th>
                                        <input type="text" placeholder="Filtro da coluna" onChange={(e) => handleFilter(e, index)}/>
                                    </th>
                                ))}
                            </tr>
                        )}
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} onClick={ () => handleSort(index) } >
                                    <span>
                                        { columnsReplace(column) }
                                        { columns[sortColumn] === column &&
                                            <FontAwesomeIcon
                                                className="sort-icon"
                                                style={{transform: sortPattern === 1 ? "rotate(180deg)" : "none"}}
                                                icon={faSortAlphaUpAlt}
                                            /> 
                                        }
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                ) }
                <tbody>
                    { data.length === 0 && Object.keys(filterColumn).length > 0 && (<h3 style={{position: "absolute", width: "100%", maxWidth: 1366, textAlign: "center"}}>Sem resultados para esses filtros.</h3>) }
                    {data.map((item, index) =>  (
                        <tr key={index} onClick={() => setModalData(item)}>
                            {showEntities ? item.entities.map( (entity, i) => (
                                    <td key={i}>{shrinkText(entity)}</td>
                                )) : <td style={{padding: 10}}>{item.text}</td>
                            }
                        </tr>
                    ))}
                </tbody>
            </Container>
            {Object.keys(modalData).length > 0 &&
                <TableModal columns={columns} data={modalData} onClose={() => setModalData({})} />}
        </>
    )
}