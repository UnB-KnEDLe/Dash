import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import { ActContainer } from "../styles/acts";

const actsData = {
    'abono':{title: 'Abono', color: "#090300"},
    'aposentadoria':{title: 'Aposentadoria', color: "#db2d20"},
    'cessoes':{title: 'Cessões', color: "#01a252"},
    'efetivos_nome':{title: 'Nomeação - Efetivos', color: "#fded02"},
    'efetivos_exo':{title: 'Exoneração - Efetivos', color: "#01a0e4"},
    'exoneracao':{title: 'Exoneração', color: "#a16a94"},
    'nomeacao':{title: 'Nomeação', color: "#b5e4f4"},
    'retificacoes':{title: 'Retificações', color: "#e8bbd0"},
    'reversoes':{title: 'Reversões', color: "#3a3432"},
    'sem_efeito_aposentadoria':{title: 'Aposentadoria Tornada Sem Efeito', color: "#ff69b4"},
    'substituicao':{title: 'Substituição', color: "#cdab53"},
}

export default function ActsComponent({ actType, acts }) {
    const [collapsed, setCollapsed] = useState(true);
    const { title, color } = actsData[actType];

    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <ActContainer color={color} collapsed={collapsed}>
            <h3 onClick={toggleCollapse}>
                {title}
                <small><i>{acts.length} atos</i></small>
            </h3>
            <div className="acts-back">
                <div className="acts-content">
                    <div className="act-header">
                        <h3>{title}</h3>
                        <FontAwesomeIcon onClick={toggleCollapse} className="close" icon={faTimes} />
                    </div>
                    <ul className="act-body">
                        {acts.map(act => <li>{act}</li>)}
                    </ul>
                </div>
            </div>
        </ActContainer>
    )
}