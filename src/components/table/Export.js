import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faFile, faFileCsv, faFilePdf } from "@fortawesome/free-solid-svg-icons"

import Modal from "../Modal"
import { columnsReplace } from "../../data/columnsData"

import { CSVLink } from "react-csv"
import jsPDF from "jspdf"
import 'jspdf-autotable'

export default function Export({content, columns}) {
    const [showModal, setShowModal] = useState(false)
    const [downloadColumns, setDownloadColumns] = useState( [...columns.map( () => true), true] )
    const [downloadContent, setDownloadContent] = useState([])
    const [downloadType, setDownloadType] = useState("csv")
    const [pdfOrientation, setPdfOrientation] = useState("landscape")

    const handleShowModal = () => setShowModal(!showModal)
    const handleColumnChange = (index) => setDownloadColumns(
        downloadColumns.map( (item, i) => i === index ? !item : item )
    )

    const exportPDF = () => {
        const doc = new jsPDF(pdfOrientation, "pt", "A4")
        
        doc.autoTable({
            head: [columns.map( (column) => columnsReplace(column) )],
            body: content,
        })
        doc.save("actsExtraction.pdf")
    }

    const onMarkAll = () => {
        let mark = downloadColumns.some(item => !item)
        setDownloadColumns([...columns.map( () => mark ), mark])
    }

    const onChangeFileType = (value) => {
        console.log(value, downloadType)
        if(value !== downloadType) setDownloadType(value)
    }

    const onChangePdfOrientation = () => 
        setPdfOrientation(pdfOrientation === "landscape" ? "portrait" : "landscape")

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
                <FontAwesomeIcon icon={faDownload}/>
            </button>
            {showModal && (
                <Modal size="fit" className="export-modal" onClose={handleShowModal} title="Exportar Tabela">
                    <div className="inline">
                        <div className="form-group download-type">
                            <h4>Formato de exportação</h4>
                            <div>
                                <button className={"btn " + (downloadType === "csv" ? "active" : "")} onClick={ () => onChangeFileType("csv")}>
                                    <FontAwesomeIcon icon={faFileCsv} size="2x"/> CSV
                                </button>
                                <button className={"btn " + (downloadType === "pdf" ? "active" : "")} onClick={ () => onChangeFileType("pdf")}>
                                    <FontAwesomeIcon icon={faFilePdf} size="2x"/> PDF
                                </button>
                            </div>
                            {/* <select onChange={onChangeFileType}>
                                <option value="csv">CSV</option>
                                <option value="pdf">PDF</option>
                            </select> */}
                        </div>

                        {downloadType === "pdf" && (
                            <div className="form-group pdf-orientation">
                                <h4>Orientação do Arquivo</h4>
                                <div>
                                    <button onClick={onChangePdfOrientation} class={pdfOrientation === "landscape" && "active"}>
                                        <FontAwesomeIcon icon={faFile} size="3x"/>
                                    </button>
                                    {pdfOrientation === "landscape" ? "Paisagem" : "Retrato"}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <h4>Colunas Visíveis</h4>
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
                    {downloadType === "csv" && (
                        <CSVLink
                            data={downloadContent}
                            target="_blank"
                            className="btn"
                            filename={"actsExtraction.csv"}
                        >
                            <FontAwesomeIcon icon={faDownload} size="lg"/> Baixar
                        </CSVLink>
                    )}
                    {downloadType === "pdf" && (
                        <button className="btn" onClick={exportPDF}>
                            <FontAwesomeIcon icon={faDownload} size="lg"/> Baixar
                        </button>
                    )}
                </Modal>
            )}
        </div>
    )
}