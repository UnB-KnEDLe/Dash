import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';

import { columnsReplace } from '../../data/columnsData';

import { colors } from '../../data/colorPallets';
import { Card } from '../../styles/app';
import { ModalContainer } from '../../styles/modal';

export default function TableModal({data, columns, onClose}){
    const { text, entities, file } = data;
    const [ hoverColumn, setHoverColumn ] = useState(-1);
    const textEl = useRef(null)

    useEffect(() => {
        const colorizeText = (text) => {
            if(hoverColumn >= 0) return text.replace(entities[hoverColumn], `<span style="border-radius: 2px; background-color: ${colors[hoverColumn]}66">${entities[hoverColumn]}</span>`)
    
            entities.forEach((entity, index) => {
                if(columns[index] === 'padrao') entity.text = "Padrao " + entity.text
                text = text.replace(entity, `<span style="border-radius: 2px; background-color: ${colors[index]}66">${entity}</span>`)
            })
    
            return text
        }
        
        textEl.current.innerHTML = colorizeText(textEl.current.innerText)
    }, [text, entities, columns, hoverColumn])

    return (
        <Modal onClose={onClose}>
            <ModalContainer>
                { text && <div className="modal-section">
                    <h3>Ato</h3>
                    <p ref={textEl}>{text}</p>
                </div> }
                <div className="modal-section">
                    <h3>Entidades</h3>
                    <div className="entities-list">
                        {entities?.map((entity, index) => 
                            entity !== null && (
                                <Card shadow={1} onMouseOver={() => setHoverColumn(index)} onMouseLeave={() => setHoverColumn(-1)} colorLeft={colors[index]} key={index}>
                                    <h4>{columnsReplace(columns[index])}</h4>
                                    <p>{entity}</p>
                                </Card>
                            )
                        )}
                    </div>
                </div>
                { file && <div className="modal-section">
                    <h4><FontAwesomeIcon icon={faFile} /> {file}</h4>
                </div> }
            </ModalContainer>
        </Modal>
    )
}