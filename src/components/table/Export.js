import { useState } from "react"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CSVLink } from "react-csv"
import Modal from "../Modal"
import { columnsReplace } from "../../data/columnsData"
import { useEffect } from "react"

export default function Export({content, columns}) {
    const [showModal, setShowModal] = useState(false)
    const [downloadColumns, setDownloadColumns] = useState( [...columns.map( () => true), true] )
    const [downloadContent, setDownloadContent] = useState([])

    const handleShowModal = () => setShowModal(!showModal)
    const handleColumnChange = (index) => setDownloadColumns(
        downloadColumns.map( (item, i) => i === index ? !item : item )
    )
    const onMarkAll = () => {
        let mark = downloadColumns.some(item => !item)
        setDownloadColumns([...columns.map( () => mark ), mark])
    }

    useEffect( () => {
        setDownloadContent( content.map( (item) => {
            const obj = {}
            item.forEach(
                (subitem, i) => {
                    if(downloadColumns[i]) obj[columnsReplace(columns[i])] = subitem
                }
            )
            obj['Texto do Ato'] = item.text
            return obj
        } ))
    }, [columns, content, downloadColumns] )

    return (
        <div className="content">
            <button className="btn main" onClick={handleShowModal}>
                <FontAwesomeIcon icon={faDownload} size="lg"/>
            </button>
            {showModal && (
                <Modal size="fit" className="export-modal" onClose={handleShowModal} title="Exportar Tabela">
                    <div className="form-group">
                        <h4>Selecione as colunas para exportação</h4>
                        <ul>
                            <li>
                                <input type="checkbox" name="markAll" onChange={ onMarkAll } checked={downloadColumns.every(item => item === true)}/>
                                <label htmlFor="markAll"><b>{downloadColumns.some(item => !item) ? "Marcar todas" : "Desmarcar Todas"}</b></label>
                            </li>
                            {columns.map((column, index) => (
                                <li>
                                    <input type="checkbox"
                                        checked={downloadColumns[index]}
                                        name={index}
                                        key={index}
                                        onChange={ () => handleColumnChange(index)}
                                    />
                                    <label htmlFor={index}>{columnsReplace(column)}</label>
                                </li>
                            ))}
                            <li>
                                <input
                                    type="checkbox"
                                    name="text"
                                    checked={downloadColumns[columns.length]}
                                    onChange={ () => handleColumnChange(columns.length) }
                                />
                                <label htmlFor="text">Texto do Ato</label>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <CSVLink
                        data={downloadContent}
                        target="_blank"
                        className="btn"
                        filename={"actsExtraction.csv"}
                    >
                        <FontAwesomeIcon icon={faDownload} size="lg"/> Baixar
                    </CSVLink>
                </Modal>
            )}
        </div>
    )
}