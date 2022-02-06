import { useActs, useFilenames, useSelectedFile, useLoadingList, useActsTypes } from '../../context/extractContext';

import { service } from "./service";
import { Main } from "../../styles/app";
import Content from "./Content";
import FileManager from '../../components/FileManager';

export default function Extract() {
    const {acts, addAct} = useActs();
    const {filenames, setFilenames} = useFilenames();
    const {setSelectedFile} = useSelectedFile();
    const {setLoadingList} = useLoadingList();
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
        <>
            <Main className="Extract" style={{overflowY: "hidden"}}>
                <h2>Extração de Atos e Entidades do Diário Oficial do Distrito Federal</h2>
                <FileManager changeHandler={changeHandler}/>
            </Main>
            {Object.keys(acts).length > 0 && <Content/>}
        </>
    )
}