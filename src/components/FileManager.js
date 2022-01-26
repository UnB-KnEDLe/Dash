import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../styles/app";
import { Container } from "../styles/fileManager";
import Loading from "./Loading";

import UploadComponent from "./UploadComponent";

import { useFilenames, useActs, useSelectedFile, useLoadingList, useActsTypes } from "../context/extractContext"

export default function FileManager({changeHandler}){
    const { filenames } = useFilenames();
    const { acts, removeAct } = useActs();
    const { selectedFile, setSelectedFile } = useSelectedFile();
    const { loadingList } = useLoadingList();
    const { setActsTypes } = useActsTypes();

    const handleFileChange = (filename) => {
        if(loadingList.includes(filename)) return;
        if(selectedFile.includes(filename)){
            if (selectedFile.length === 1) return;
            setSelectedFile(selectedFile.filter(file => file !== filename))
        } else {
            setSelectedFile([...selectedFile, filename])
        }
        setActsTypes(Object.keys(acts).filter(act => acts[act].content.length > 0));
    }

    return (
        <Container>
            { filenames.length > 0 && (
                <div className="filelist">
                    <h3>Arquivos Processados</h3>
                    <div className="list">
                        { filenames.map( (filename, index) => (
                            <Card key={index} className="card" shadow={1}>
                                <div>
                                    {(filenames.length > 1 && !loadingList.includes(filename)) && <input name={filename} type="checkbox" id={filename} checked={selectedFile.includes(filename)} onChange={() => handleFileChange(filename)}/>}
                                    <Loading size="1x" state={loadingList.includes(filename)} />
                                    <label htmlFor={filename}>{filename}</label>
                                </div>
                                <button className="btn" onClick={() => removeAct(filename)}><FontAwesomeIcon icon={ faTrash } /></button>
                            </Card>
                        )) }
                    </div>
                </div>
            ) }
            <div className="upload-component">
                <UploadComponent changeHandler={changeHandler}/>
            </div>
        </Container>
    )
}