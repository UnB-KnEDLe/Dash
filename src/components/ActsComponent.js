import { useState } from "react"
import { ActContainer } from "../styles/acts";

import { actsData } from "../data/actsData";

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
                <small><i>{acts.length} ato{acts.length > 1 && 's'}</i></small>
            </h3>
        </ActContainer>
    )
}