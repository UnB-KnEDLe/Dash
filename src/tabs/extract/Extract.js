import { useActs, useFilenames, useSelectedFile, useLoadingList, useActsTypes } from '../../context/extractContext';

import { service } from "../../services/extractService";
import { Container } from "../../styles/extract";
import Content from "./Content";
import FileManager from '../../components/FileManager';

export default function Extract() {
    const {acts, addAct} = useActs();
    const {filenames, setFilenames} = useFilenames();
    const {setSelectedFile} = useSelectedFile();
    const {loadingList, setLoadingList} = useLoadingList();
    const {setActsTypes} = useActsTypes();

    function changeHandler(files){
        files = files.filter(file => !filenames.includes(file.name));
        if(files.length === 0) return;

        files = files.sort();
        files.forEach ( file => {
            if (filenames.includes(file.name)) return

            setFilenames(filenames => [...filenames, file.name]);
            setLoadingList(loadingList => [...loadingList, file.name]);
        } )

        files.forEach( file => {
            service(file)
                .then(res => {
                    addAct(res)
                    setActsTypes(Object.keys(acts));
                })
                .catch(() => setFilenames(filenames.filter(file => file !== file.name)))
                .finally(() => {
                    setSelectedFile(selectedFile => [...selectedFile, file.name])
                    setLoadingList(loadingList => loadingList.filter(name => name !== file.name))
                })
        } );
    }

    return (
        <Container className="Extract">
            <h2>Extração de Atos e Entidades do Diário Oficial do Distrito Federal</h2>
            <FileManager changeHandler={changeHandler}/>
            {Object.keys(acts).length > 0 && <Content/>}
            {(Object.keys(acts).length === 0 && filenames.length > loadingList.length) && <h3>Nenhum ato foi extraído.</h3>}
        </Container>
    )
}