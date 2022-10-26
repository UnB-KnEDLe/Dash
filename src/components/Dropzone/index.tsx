import { Flex, Image, keyframes, Input } from '@chakra-ui/react';
import { default as DropEl } from 'react-dropzone'
import SmallText from '../Typography/SmallText';
import uploadImage from '../../assets/cloud-upload.svg'
import Button from '../Button';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import { useExtract } from '../../hooks/extract';


const animationKeyFrames = keyframes`
    0% {margin-top: 0;}
    50% {margin-top: -.75rem; margin-bottom: .75rem}
    1000% {margin-top: 0;}
`

const animation = `${animationKeyFrames} 3s ease-in-out infinite`;

export default function Dropzone() {
    const { handleFilesUploaded, filesUploaded, loadingFile } = useExtract();
    const onDrop = useCallback(acceptedFiles => {
    handleFilesUploaded(acceptedFiles);
 
      }, [handleFilesUploaded, filesUploaded])
    
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    

    return (
        <Flex
            as="div"
            border="dashed"
            borderColor="pallete.text"
            h="100%"
            minHeight="12.5rem"
            borderRadius=".25rem"
            flexDirection="column"
            padding='2rem'
            {...getRootProps()}
        >
            <Image
                as={motion.img}
                src={uploadImage.src}
                alt="upload"
                w='auto'
                h='6rem'
                animation={animation}
            />
            <SmallText
                smallText="Arraste e solte o arquivo"
                textAlign="center"
            />
            <Flex margin="1.25rem 0" alignItems="center">
                <Flex h="0.5px" w="100%" bgColor="pallete.text"/>
                    <SmallText margin="0 1rem" color="pallete.text" smallText="ou"/>
                <Flex h="0.5px" w="100%" bgColor="pallete.text"/>
            </Flex>
            <input {...getInputProps()}/>

            {
                isDragActive ?
                <SmallText alignSelf="center" smallText='Arraste um ou mais arquivos' /> :
                <Button buttonText='Selecionar arquivo'/>
            }

        </Flex>
    );
}