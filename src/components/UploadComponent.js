import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropzone from 'react-dropzone';
import filesvg from '../assets/file.svg';
import { DropContainer, UploadMessage } from '../styles/app'

export default function UploadComponent({changeHandler}) {
    const renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) return <UploadMessage>Arraste o PDF aqui</UploadMessage>
        if (isDragReject) return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
        return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
    };

    return (
        <Dropzone accept="application/pdf" onDropAccepted={changeHandler}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive} //aceitar arquivos que são PDFs
                    isDragReject={isDragReject} //rejeitar arquivos que não são PDFs
                >
                    <input {...getInputProps()} />
                    <FontAwesomeIcon style={{color: "var(--primary)"}} icon={faUpload} size="5x"/>
                    {/* <img src={filesvg} alt="Arraste e solte o PDF aqui" /> */}
                    {renderDragMessage(isDragActive, isDragReject)}
                    <button>
                    <label>Selecionar Arquivos</label>
                    </button>
                </DropContainer>
            )}
        </Dropzone>
    )
}