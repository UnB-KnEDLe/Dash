import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "../../styles/export"
import { CSVLink } from "react-csv"
import { columnsReplace } from "../../data/columnsData"

export default function Export({content, columns, title}) {
    content = content.map(item => {
        const obj = {}
        obj['Texto do Ato'] = item.text
        item.entities.forEach((item, index) => {
            obj[columnsReplace(columns[index])] = item
        })
        return obj
    })

    return (
        <Container>
            <CSVLink
                data={content}
                target="_blank"
                className="btn"
                filename={"actsExtraction.csv"}
            >
                <FontAwesomeIcon icon={faDownload} size="lg"/>
            </CSVLink>
        </Container>
    )
}