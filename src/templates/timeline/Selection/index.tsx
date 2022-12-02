import { Box, Flex, Stack, Radio, RadioGroup, Icon } from '@chakra-ui/react';
import HeadingTwo from '../../../components/Typography/HeadingTwo';
import SmallText from '../../../components/Typography/SmallText';
import { useTimeline } from '../../../hooks/timeline';
import { BoxLoading } from 'react-loadingg';
import { useCallback, useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';

export default function Selection() {
    const { processList, getActs } = useTimeline();
    const [value, setValue] = useState(processList[0]?.numero);

    const handleSelection = useCallback( (processNumber: string) => {
        setValue(processNumber);
        getActs(processNumber);
    }, []);

    if (!processList.length) {
        return (
            <Box
                flex={3}
                padding='2rem'
                borderRadius='0.25rem'
                bgColor='pallete.cardBackground'
                flexDirection='column'
                h='100%'
                filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
            >
                <BoxLoading/>
            </Box>
        )
    }

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
                        <RadioGroup overflowY="auto" height='100%' pr='.5rem' value={value}>
                            <Stack>
                                { processList.map( process => (
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
                                )) }
                            </Stack>
                        </RadioGroup>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    )
}