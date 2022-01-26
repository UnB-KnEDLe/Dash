import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading({state, size}) {
    size = size || "2x";

    return (
        <>
            { state && (
                <div style={{display: 'flex', placeItems: 'center'}}>
                    <FontAwesomeIcon icon={faSpinner} spin={state} style={{color: "var(--primary)"}} size={size} />
                </div>
            )}
        </>
    )
}