import { faExclamationCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { columnsReplace } from "../data/columnsData";
import { Container } from "../styles/popup";

export default function Popup({children, onChange, show}) {
    const group = columnsReplace(children.group);
    const label = columnsReplace(children.label);
    const properties = children?.raw?.properties;
    const relationship = children?.raw?.type?.replace("_", " ");
    const error = children?.error;

    return (
        <Container show={show}>
            <div className="close-btn" onClick={() => onChange(false)}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            { error && <div className="error">
                <FontAwesomeIcon className="icon" size="2x" icon={faExclamationCircle} />
                <p>{error}</p>
            </div> }
            { relationship && <p><b>Relação:</b> {relationship}</p> }
            <p><i>{group || label}</i></p>
            { properties && Object.keys(properties).map( item => <div><b>{columnsReplace(item)}</b>: {properties[item].toString()} </div> ) }
        </Container>
    )
}