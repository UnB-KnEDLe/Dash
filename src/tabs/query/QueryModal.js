import Modal from "../../components/Modal"
import {Card} from "../../styles/Card"

export default function QueryModal({history, setCypherText, onClose}) {
    const onSetCypher = (cypher) => {
        setCypherText(cypher)
        onClose()
    }

    const style = {
        textAlign: "left",
        cursor: "pointer",
    }

    return (
        <Modal title="Histórico" size="sm" onClose={onClose}>
            { history.map( (item, index) => (
                <Card key={index} onClick={() => onSetCypher(item)} style={style}>
                    {item}
                </Card>
            ) ) }
        </Modal>
    )
}