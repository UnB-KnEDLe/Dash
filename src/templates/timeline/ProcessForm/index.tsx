import { Stack, Flex, Box, Checkbox } from '@chakra-ui/react';
import HeadingTwo from '../../../components/Typography/HeadingTwo';
import SmallText from '../../../components/Typography/SmallText';
import { Input } from '../../../components/Input';
import Button from '../../../components/Button';
import { AiOutlineFile, AiOutlineSearch} from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useTimeline } from '../../../hooks/timeline';
import { RangeDatepicker } from 'chakra-dayzed-datepicker';
import { useState } from 'react';

export default function ProcessForm() {
    const { handleProcessSearch, selectedDates, setSelectedDates } = useTimeline();
    const { register, handleSubmit, } = useForm();
    const [haveDate, setHaveDate] = useState<boolean>(true);

    return (
        <Box
            as='div'
            padding='2rem'
            borderRadius='0.25rem'
            bgColor='pallete.cardBackground'
            flexDirection='column'
            flex={3}
            h='100%'
            zIndex='20'
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
        >
            <Stack as="form" onSubmit={handleSubmit(handleProcessSearch)} spacing="1rem" flex={1}>
                <Flex flexDirection="column" >
                    <HeadingTwo headingTwoText='Número do processo' />
                    <SmallText mb="1rem" smallText='Pesquise pelo número do processo licitatório' />
                    <Input
                        type='text'
                        name='numberProcess'
                        placeholder="00410-000243230/2017-06"
                        icon={AiOutlineFile}
                        mb='1rem'
                        {...register("numberProcess")}
                    />
                    <Flex alignItems='center' gap='.5rem'>
                        <Checkbox
                            borderColor='pallete.text'
                            {...register("direct")}
                            checked={haveDate}
                            onChange={ () => setHaveDate(!haveDate) }
                        />
                        <SmallText mb='-.3rem' smallText="Consulta Direta" />
                    </Flex>
                </Flex>
                <Flex flexDirection="column" >
                    <HeadingTwo headingTwoText='Data do processo' />
                    <SmallText mb='1rem' smallText='Defina o período da pesquisa dos processos' />
                    <RangeDatepicker
                        disabled={!haveDate}
                        selectedDates={selectedDates}
                        onDateChange={setSelectedDates}
                        configs={{
                            dateFormat:"dd/MM/yyyy",
                            dayNames: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
                            monthNames: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                        }}
                        propsConfigs={{
                            dateNavBtnProps: {
                            },
                            inputProps: {
                                background: "white",
                                borderColor: "pallete.secondary",
                                borderWidth: "2px"
                            },
                            popoverCompProps: {
                                popoverContentProps: {
                                    color: "pallete.text",
                                    border: "pallete.secondary"
                                },
                            },
                            dayOfMonthBtnProps: {
                                defaultBtnProps: {
                                    _hover: {
                                        background: 'pallete.secondaryLight50',
                                    }
                                },
                                todayBtnProps: {
                                    background: "pallete.secondaryLight100"
                                }
                            }
                        }}
                    />
                </Flex>
                <Flex justifyContent='flex-end'>
                    <Button icon={AiOutlineSearch} type="submit" buttonText='Pesquisar' />
                </Flex>
            </Stack>
        </Box>
    )
}