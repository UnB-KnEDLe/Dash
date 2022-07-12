import { Stack, Flex, Icon, Progress } from "@chakra-ui/react";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";
import { FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa';
import { BoxLoading } from 'react-loadingg';
import { useExtract } from "../../hooks/extract";
import { useCallback, useState } from "react";


export default function ExtractFileManager() {
    const { filesUploaded, handleFilesUploaded, setFilesUploaded, loadingFile } = useExtract();
    
    return (
        <Stack spacing="1rem" maxHeight="28rem">
            <Flex flexDirection="column">
                <HeadingTwo headingTwoText="Arquivos" />
                <SmallText
                    smallText="Gerencie o arquivo com extração completa."
                />
            </Flex>
            {filesUploaded.length > 0 ? (
                loadingFile !== 100 
                ? <Progress hasStripe isAnimated value={loadingFile} />
                : <Flex
                    flexDirection="column"
                    gap=".5rem"
                    maxHeight='100%'
                    overflowY='auto'
                    >
                    { filesUploaded.map((fileTarget, index) => (
                        <Flex
                            background={fileTarget?.status ? "pallete.deactivated" : "pallete.secondaryLight10"}
                            borderRadius=".25rem"
                            p='.75rem 1rem'
                            alignItems='center'
                            justifyContent='space-between'
                            marginRight=".25rem"
                            key={index}
                        >
                            <Flex
                                alignItems='center'
                                gap='.75rem'
                            >
                                <SmallText color={fileTarget?.status ? "pallete.text" : "palpallete.deactivatedText"} smallText={fileTarget?.file?.name} />
                            </Flex>
                            <Icon 
                                as={FaTrash}
                                color={fileTarget?.status ? "pallete.secondaryLight10" : "palpallete.deactivatedText"} 
                                onClick={() => setFilesUploaded(filesUploaded.filter(removeFile => removeFile !== fileTarget))}
                            />
                        </Flex>
                    ))}
                </Flex>
            ): (
                <BoxLoading
                    speed="1.5"
                    color="#99A8F4"
                    style={{ alignSelf: 'center', transform: 'scale(2.3)', marginTop: '2.5rem' }}
                />
            )}
        </Stack>
    );
}