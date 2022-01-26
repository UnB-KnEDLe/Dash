import { useActs, useFilenames, useSelectedFile, useLoadingList, useActsTypes } from '../../context/extractContext';

import { service } from "./service";
import { Container } from "../../styles/app";
import Content from "./Content";
import FileManager from '../../components/FileManager';

export default function Extract() {
    const {acts, addAct} = useActs();
    const {filenames, setFilenames} = useFilenames();
    const {setSelectedFile} = useSelectedFile();
    const {setLoadingList} = useLoadingList();
    const {setActsTypes} = useActsTypes();

    async function changeHandler(files){
        files.forEach( async file => {
            console.log(file.name);
            if (filenames.includes(file.name)) return

            setFilenames([...filenames, file.name])
            setLoadingList(loadingList => [...loadingList, file.name]);
            service(file)
                .then(res => {
                    addAct(res)
                    setActsTypes(Object.keys(acts).filter(act => acts[act].content.length > 0));
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setSelectedFile(selectedFile => [...selectedFile, file.name])
                    setLoadingList(loadingList => loadingList.filter(name => name !== file.name))
                })
        } );
    }

    return (
        <>
            <Container className="Extract" style={{overflowY: "hidden"}}>
                <h2>Extração de Atos e Entidades do Diário Oficial do Distrito Federal</h2>
                <FileManager changeHandler={changeHandler}/>
            </Container>
            {Object.keys(acts).length > 0 && <Content/>}
        </>
    )
}