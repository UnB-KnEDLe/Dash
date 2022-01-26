import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from '../styles/app'

export default function UploadComponent({changeHandler}) {
    const renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) return <UploadMessage>Arraste e solte o PDF ou clique para selecionar</UploadMessage>
        if (isDragReject) return <UploadMessage type="error">Este arquivo não é suportado</UploadMessage>
        return <UploadMessage type="success">Arraste e solte o PDF ou clique para selecionar</UploadMessage>;
    };

    return (
        <Dropzone accept="application/pdf" onDropAccepted={changeHandler}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} />
                    <FontAwesomeIcon className="drop-icon" style={{color: "var(--primary)"}} icon={faUpload} size="4x"/>
                    <button className="btn">Adicionar Arquivos</button>
                    {renderDragMessage(isDragActive, isDragReject)}

                </DropContainer>
            )}
        </Dropzone>
    )
}