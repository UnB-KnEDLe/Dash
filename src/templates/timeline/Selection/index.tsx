import { Box, Flex, Stack, Radio, RadioGroup, Icon, keyframes } from '@chakra-ui/react';
import Image from 'next/image';
import NotFound from '../../../assets/not-found-field.svg';
import HeadingTwo from '../../../components/Typography/HeadingTwo';
import SmallText from '../../../components/Typography/SmallText';
import { useTimeline } from '../../../hooks/timeline';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';

const animationKeyframes = keyframes`
    0% { transform: scale(1) rotate(0)}
    25% { transform: scale(1.1) rotate(0)}
    50% { transform: scale(1.1) rotate(5deg)}
    75% { transform: scale(1) rotate(0deg)}
    100% { transform: scale(1) rotate(0) }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function Selection() {
    const { processList, getActs, acts } = useTimeline();
    const [value, setValue] = useState(processList[0]?.numero);

    const handleSelection = useCallback( (processNumber: string) => {
        setValue(processNumber);
        getActs(processNumber);
    }, []);

    return (
        <Box
            flex={3}
            padding='2rem'
            borderRadius='0.25rem'
            bgColor='pallete.cardBackground'
            flexDirection='column'
            maxHeight='27rem'
            h='100%'
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
        >
            <Flex h='100%'>
                <Stack spacing="2rem" flex={1} >
                    <Flex h='100%' flexDirection={'column'}>
                        <HeadingTwo headingTwoText='Selecione o processo' />
                        <RadioGroup overflowX='hidden' overflowY="auto" height='100%' pr='.5rem' value={value}>
                            <Stack>
                                { processList.length ? 
                                    processList.map( process => (
                                        <Box
                                            w='100%'
                                            background="pallete.background"
                                            p='.5rem'
                                            borderRadius='.25rem'
                                            _hover={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)" }}
                                            onClick={() => handleSelection(process.numero)}
                                        >
                                            <Radio value={process.numero}>
                                                <Flex gap='.25rem' alignItems='center'>
                                                    <Icon
                                                        as={FaFileAlt}
                                                        mb='.25rem'
                                                        width='.75rem'
                                                        height='.75rem'
                                                    />
                                                    {process.numero}
                                                </Flex>
                                                <SmallText fontSize='.75rem' smallText={process.secretaria}/>
                                            </Radio>
                                        </Box>
                                    )) : (
                                        <Stack spacing='2rem'>
                                            <SmallText smallText="Insira os dados do processo que deseja buscar" />
                                            <Flex
                                                as={motion.div}
                                                flex="1" direction="column"
                                                animation={animation}
                                                align="center"
                                            >
                                                <Image src={NotFound} color="pallete.secondary" alt="Not-Found" width="200" height="200" />
                                            </Flex> 
                                        </Stack>
                                    )
                                }
                            </Stack>
                        </RadioGroup>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    )
}