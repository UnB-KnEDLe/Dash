import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalComp } from '../styles/modal';

import { columnsReplace } from '../data/columnsData';

import { colors } from '../data/colorPallets';
import { Card } from '../styles/app';

export default function Modal({data, columns, setModalData}){
    const { text, entities, file } = data
    const closeModal = () => setModalData({});

    return (
        <ModalComp>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="modal-header">
                        <button className="close-btn btn" onClick={closeModal}>
                            <FontAwesomeIcon size="2x" icon={faTimes}/>
                        </button>
                    </div>
                    <div className="modal-section">
                        <h3>Ato</h3>
                        <p>{text}</p>
                    </div>
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
                    <div className="modal-section">
                        <h4><FontAwesomeIcon icon={faFile} /> {file}</h4>
                    </div>
                </div>
            </div>
        </ModalComp>
    )
}