import { useShowEntities } from '../../context/extractContext';

export default function ModeSwitch({state}){
    const { showEntities, setShowEntities } = useShowEntities();

    return (
        <div className="content" state={showEntities}>
            <div className="switch-label">Atos</div>
            <div className="switch-button" onClick={() => setShowEntities(!showEntities)}>
                <div className={"switch-trigger " + (state ? "active" : null)}/>
            </div>
            <div className="switch-label">Entidades</div>
        </div>
    )
}