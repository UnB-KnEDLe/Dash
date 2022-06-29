import { Flex, Image, keyframes } from '@chakra-ui/react';
import { default as DropEl } from 'react-dropzone'
import SmallText from '../Typography/SmallText';
import uploadImage from '../../assets/cloud-upload.svg'
import Button from '../Button';
import { motion } from 'framer-motion';

const animationKeyFrames = keyframes`
    0% {margin-top: 0;}
    50% {margin-top: -.75rem; margin-bottom: .75rem}
    1000% {margin-top: 0;}
`

const animation = `${animationKeyFrames} 3s ease-in-out infinite`;

interface DropzoneProps {
    onDrop: () => void
}

export default function Dropzone({onDrop}: DropzoneProps) {
    return (
        <DropEl onDropAccepted={onDrop}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <Flex
                    border="dashed"
                    borderColor="pallete.text"
                    h="100%"
                    minHeight="12.5rem"
                    borderRadius=".25rem"
                    flexDirection="column"
                    padding='2rem'
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
                    <Button buttonText='Selecionar o arquivo'/>

                </Flex>
            )}
        </DropEl>
    );
}