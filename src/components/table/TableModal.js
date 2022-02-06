import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';

import { columnsReplace } from '../../data/columnsData';

import { colors } from '../../data/colorPallets';
import { Card } from '../../styles/app';
import { ModalContainer } from '../../styles/modal';

export default function TableModal({data, columns, onClose}){
    const { text, entities, file } = data

    return (
        <Modal onClose={onClose}>
            <ModalContainer>
                { text && <div className="modal-section">
                    <h3>Ato</h3>
                    <p>{text}</p>
                </div> }
                <div className="modal-section">
                    <h3>Entidades</h3>
                    <div className="entities-list">
                        {entities.map((entity, index) => 
                            entity !== null && (
                                <Card shadow={1} colorLeft={colors[index]} key={index}>
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