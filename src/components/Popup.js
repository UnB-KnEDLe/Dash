import { columnsReplace } from "../data/columnsData";
import { Container } from "../styles/popup";

export default function Popup({children, onChange}) {
    const group = columnsReplace(children.group);
    const label = columnsReplace(children.label);
    var properties = children.raw.properties;

    return (
        <Container>
            <p><i>{group || label}</i></p>
            { Object.keys(properties).map( item => <div><b>{columnsReplace(item)}</b>: {properties[item].toString()} </div> ) }
        </Container>
    )
}