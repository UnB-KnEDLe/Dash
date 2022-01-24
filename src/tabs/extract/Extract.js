import { useState } from 'react';
import { useActs, useCollapsed, useFilenames, useLoading, useSelectedFile } from '../../context/extractContext';

import UploadComponent from "../../components/UploadComponent";
import Loading from "../../components/Loading";
import FloatMessage from '../../components/FloatMessage';
import ExpandBtn from '../../components/ExpandBtn';

import { extractAll } from "./service";
import { Container } from "../../styles/app";
import Content from "./Content";

export default function Extract() {
    const {acts, setActs} = useActs();
    const {collapsed, setCollapsed} = useCollapsed();
    const {filenames, setFilenames} = useFilenames();
    const {loading, setLoading} = useLoading();
    const {selectedFile, setSelectedFile} = useSelectedFile();
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => setSelectedFile(e.target.value)

    async function changeHandler(files){
        setCollapsed(true);
        setLoading(true);
        setFilenames([]);

        files.forEach( async file => {
            if(filenames.includes(file.name)) {
                setMessage(`${file.name} já existe.`);
                setLoading(false);
                setCollapsed(false);
                return;
            }

            await extractAll(file)
                .then(res => {
                    setActs(res)
                    setFilenames([...filenames, file.name]);
                })
                .catch(err => setMessage("Houve um erro ao extrair os dados. Verifique se o arquivo está no formato correto."))
                .finally(() => {
                    setCollapsed(true)
                    setLoading(false)
                })
        } );
    }    

    const handleCollapse = () => setCollapsed(false);

    return (
        <>
            <Container className="Extract" style={{overflowY: "hidden"}}>
                <h2>Extração de Atos e Entidades do Diário Oficial do Distrito Federal</h2>
                { collapsed ? (
                    <div style={{display: "flex", placeItems: "center", justifyContent: "space-between"}}>
                        { filenames.length > 1 ? (
                            <select value={selectedFile} onChange={handleFileChange} >
                                <option value="">Todos os Arquivos</option>
                                { filenames.map((filename, index) =>
                                    <option key={index} value={filename}>{filename}</option> ) }
                            </select>
                        ) : (
                            <span>{filenames[0]}</span>
                        )}
                        <button className="btn" onClick={handleCollapse}>Extrair novo arquivo</button>
                    </div>
                        ) : <UploadComponent changeHandler={changeHandler}/>
                    }
                <Loading state={loading} />
            </Container>
            {Object.keys(acts).length > 0 && <Content/>}
            <FloatMessage message={message} setMessage={setMessage} title="Alerta"/>
            {/* <ExpandBtn/> */}
        </>
    )
}