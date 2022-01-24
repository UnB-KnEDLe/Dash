import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand } from "@fortawesome/free-solid-svg-icons"

export default function ExpandBtn(){
    const style = {
        position: 'fixed',
        transform: 'rotate(-90deg)',
        top: '50%',
        left: -50,
        margin: 0
    }

    return (
        <div style={style} className="expand-btn">
            <button className="btn btn-primary">
                <FontAwesomeIcon icon={faExpand}/>  Expandir Tabela
            </button>
        </div>
    )
}