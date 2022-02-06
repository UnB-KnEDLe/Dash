import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Container } from '../styles/modal';

export default function Modal({children, onClose, title, size}){
    return (
        <Container size={size || 'lg'}>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="close-btn btn" onClick={onClose}>
                        <FontAwesomeIcon size="2x" icon={faTimes}/>
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </Container>
    )
}