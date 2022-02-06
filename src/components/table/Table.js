import { useState } from 'react';
import { columnsReplace } from '../../data/columnsData';
import TableModal from './TableModal';

import { Container } from '../../styles/table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

const CHAR_LIMIT = 50;

export default function Table({data, columns, showEntities, modalData, setModalData}) {
    const [ sortColumn, setSortColumn ] = useState(0);
    const [ sortPattern, setSortPattern ] = useState(1);

    if(sortColumn !== '') data = data.sort((a, b) => {
        if(Object.keys(a).length === 0 || Object.keys(b).length === 0) return 1;
        if(a.entities[sortColumn] > b.entities[sortColumn]) return sortPattern;
        if(a.entities[sortColumn] < b.entities[sortColumn]) return sortPattern * -1;
        return 0
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

    return (
        <>
            <Container>
                { (showEntities && data.length > 0) && (
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} onClick={ () => handleSort(index) } >
                                    <span>
                                        { columnsReplace(column) }
                                        { columns[sortColumn] === column &&
                                            <FontAwesomeIcon
                                                className="sort-icon"
                                                style={{transform: sortPattern === 1 ? "rotate(180deg)" : "none"}}
                                                icon={faSortUp}
                                            /> 
                                        }
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                ) }
                <tbody>
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