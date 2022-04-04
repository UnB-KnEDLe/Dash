import Modal from "../../components/Modal"
import {Card} from "../../styles/Card"

export default function QueryModal({history, setCypher, onClose}) {
    const onSetCypher = (cypher) => {
        setCypher(cypher)
        onClose()
    }

    const style = {
        textAlign: "left",
        cursor: "pointer",
    }

    return (
        <Modal title="Histórico" size="sm" onClose={onClose}>
            { history.map( item => (
                <Card onClick={() => onSetCypher(item)} style={style}>
                    {item}
                </Card>
            ) ) }
        </Modal>
    )
}