import { Stack, Flex } from "@chakra-ui/react";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";
import { FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa';
import { BoxLoading } from 'react-loadingg';

interface ExtractFileManagerProps {
    fileList: Array<{
        id: string;
        name: string;
        viewState: boolean;
        changeView?: () => void; // Remove opcional set
        deleteFunction?: () => void; // Remove opcional set
    }>;
}

export default function ExtractFileManager({ fileList }: ExtractFileManagerProps) {
    return (
        <Stack spacing="1rem" maxHeight="28rem">
            <Flex flexDirection="column">
                <HeadingTwo headingTwoText="Arquivos" />
                <SmallText
                    smallText="Gerencie os arquivos com extração completa."
                />
            </Flex>
            {fileList.length > 0 ? (
                <Flex
                    flexDirection="column"
                    gap=".5rem"
                    maxHeight='100%'
                    overflowY='auto'
                >
                    { fileList.map((file, index) => (
                        <Flex
                            background="pallete.background"
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
                                {file.viewState ? (
                                    <FaEye onClick={file.changeView} />
                                ) : (
                                    <FaEyeSlash onClick={file.changeView} />
                                )}
                                <SmallText smallText={file.name} />
                            </Flex>
                            <FaTrash onClick={file.deleteFunction}/>
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