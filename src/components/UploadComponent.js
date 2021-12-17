import Dropzone from 'react-dropzone';
import filesvg from '../assets/file.svg';
import { DropContainer } from '../styles/app'

export default function UploadComponent({changeHandler, type, setType, renderDragMessage, tables}) {
    return (
        <Dropzone accept="application/pdf" onDropAccepted={changeHandler}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive} //aceitar arquivos que são PDFs
                isDragReject={isDragReject} //rejeitar arquivos que não são PDFs
            >
                <input {...getInputProps()} />
                <img src={ filesvg } alt="file" />
                {renderDragMessage(isDragActive, isDragReject)}
                <button>
                <label>Selecionar Arquivos</label>
                </button>
            </DropContainer>
            )}
        </Dropzone>
    )
}