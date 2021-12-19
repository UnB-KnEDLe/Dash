import { useState } from "react"
import { ActContainer } from "../styles/acts";

const actsData = {
    'abono':{title: 'Abono', color: "#a3218e"},
    'aposentadoria':{title: 'Aposentadoria', color: "#592f93"},
    'cessoes':{title: 'Cessões', color: "#21409a"},
    'efetivos_nome':{title: 'Nomeação - Efetivos', color: "#0465b2"},
    'efetivos_exo':{title: 'Exoneração - Efetivos', color: "#00acac"},
    'exoneracao':{title: 'Exoneração', color: "#03a45e"},
    'nomeacao':{title: 'Nomeação', color: "#72bd46"},
    'retificacoes':{title: 'Retificações', color: "#fef102"},
    'reversoes':{title: 'Reversões', color: "#f8a51b"},
    'sem_efeito_aposentadoria':{title: 'Aposentadoria Tornada Sem Efeito', color: "#f58225"},
    'substituicao':{title: 'Substituição', color: "#ed403c"},
}

export default function ActsComponent({ actType, acts, actsSetFunction, colorSetFunction }) {
    const [show, setShow] = useState(true);
    const { title, color } = actsData[actType];

    const toggleCollapse = () => {
        setShow(!show);
        actsSetFunction(acts);
        colorSetFunction(color);
    }

    return (
        <ActContainer color={color} collapsed={show}>
            <h3 onClick={toggleCollapse}>
                {title}
                <small><i>{acts.length} atos</i></small>
            </h3>
        </ActContainer>
    )
}