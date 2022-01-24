import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading({state}) {
    return (
        <>
            { state && (
                <div style={{marginBottom: 15}}>
                    <FontAwesomeIcon icon={faSpinner} spin={state} style={{color: "var(--primary)"}} size="2x"/>
                </div>
            )}
        </>
    )
}