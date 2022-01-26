import { useState } from 'react';
import { columnsReplace } from '../../data/columnsData';
import Modal from '../../components/Modal'

import { Container } from '../../styles/table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

const CHAR_LIMIT = 47;

export default function Table({data, columns, showEntities, modalData, setModalData}) {
    const [ sortColumn, setSortColumn ] = useState(0);
    const [ sortPattern, setSortPattern ] = useState(1);

    if(sortColumn !== '') data = data.sort((a, b) => {
        if(a[sortColumn] > b[sortColumn]) return sortPattern;
        if(a[sortColumn] < b[sortColumn]) return sortPattern * -1;
        return 0
    });

    const shrinkText = (text) => {
        if(typeof text !== "string" || text.length <= CHAR_LIMIT) return text
        return text.slice(0, CHAR_LIMIT) + '...'
    }

    const handleSort = (column) => {
        if(sortColumn === column) setSortPattern(sortPattern * -1)
        else setSortColumn(1)
        setSortColumn(column)
    }

    const handleData = (data) => setModalData({entities: data})

    return (
        <Container>
            { showEntities && (
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} onClick={ () => handleSort(index) } >
                                <span>
                                    { columnsReplace(column) }
                                    { columns[sortColumn] === column &&
                                        <FontAwesomeIcon className="sort-icon" style={{transform: sortPattern === 1 ? "rotate(180deg)" : "none"}} icon={faSortUp}/> 
                                    }
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
            ) }
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} onClick={() => handleData(item)}>
                        {item.map( (entity, i) => (
                                <td key={i}>{shrinkText(entity)}</td>
                            ))
                        }
                    </tr>
                ))}
            </tbody>
            {Object.keys(modalData).length > 0 &&
                <Modal columns={columns} data={modalData} setModalData={setModalData} />}
        </Container>
    )
}