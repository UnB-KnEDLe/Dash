import { Box, Flex, Stack, Select } from '@chakra-ui/react';
import HeadingTwo from '../../../components/Typography/HeadingTwo';
import SmallText from '../../../components/Typography/SmallText';
import Checkbox from '../../../components/Checkbox';
import { useTimeline } from '../../../hooks/timeline';
import { BoxLoading } from 'react-loadingg';

export default function Selection() {
    const { secretaries, actTypeList, processList, handleSelectedSecretary, handleSelectedActTypes, handleSelectedProcess } = useTimeline();

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
            h='100%'
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
        >
            <Flex>
                <Stack spacing="2rem" flex={1} >
                    <Flex flexDirection={'column'}>
                        <HeadingTwo headingTwoText='Número do processo' />
                        <SmallText mb='.5rem' smallText='Selecione o número do processo' />
                        <Select onChange={(el) => handleSelectedProcess(el.target.value)}>
                            { processList.map((secretary, index) => (
                                <option key={index} value={secretary}>{secretary}</option>
                            )) }
                        </Select>
                    </Flex>
                    { !!secretaries && <Flex flexDirection={'column'}>
                        <HeadingTwo headingTwoText='Secretarias' />
                        <SmallText mb='.5rem' smallText='Essas foram as secretarias encontradas' />
                        <Select onChange={(el) => handleSelectedSecretary(el.target.value)}>
                            {secretaries.map((secretary, index) => (
                                <option key={index} value={secretary}>{secretary}</option>
                            ))}
                        </Select>
                    </Flex> }
                    { !!actTypeList && (
                        <Flex flexDirection={'column'}>
                            <HeadingTwo headingTwoText='Tipo de ato' />
                            <SmallText mb='.5rem' smallText='Selecione o tipo de ato que deseja visualizar' />
                            <Stack maxH='12rem'>
                                {actTypeList.map((actType, index) => (
                                    <Flex p='.5rem' borderBottom='1px solid gray'>
                                        <Checkbox checked={index === 1} value={actType} onChange={e => handleSelectedActTypes(e.target)} checkboxText={actType}/>
                                    </Flex>
                                ))}
                            </Stack>
                        </Flex>
                    )}
                </Stack>
            </Flex>
        </Box>
    )
}