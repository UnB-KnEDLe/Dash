import { Stack, Flex, Box, Checkbox } from '@chakra-ui/react';
import HeadingTwo from '../../../components/Typography/HeadingTwo';
import SmallText from '../../../components/Typography/SmallText';
import { Input } from '../../../components/Input';
import Button from '../../../components/Button';
import { AiOutlineFile, AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useTimeline } from '../../../hooks/timeline';
import { useState } from 'react';

export default function ProcessForm() {
    const { handleProcessSearch } = useTimeline();
    const { register, handleSubmit, } = useForm();

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
                        />
                        <SmallText mb='-.3rem' smallText="Consulta Direta" />
                    </Flex>
                </Flex>
                <Flex flexDirection="column" >
                    <HeadingTwo headingTwoText='Data do processo' />
                    <SmallText smallText='Defina o período de pesquisa' mb='1rem'/>
                    <Flex gap='1rem' alignItems='center'>
                        <Input
                            type="date"
                            name='startDate'
                            placeholder="01/01/2020"
                            icon={AiOutlineCalendar}
                            {...register("startDate")}
                        />
                        <SmallText smallText='até' />
                        <Input
                            name='endDate'
                            type="date"
                            placeholder="31/12/2020"
                            icon={AiOutlineCalendar}
                            {...register("endDate")} 
                        />
                    </Flex>
                </Flex>
                <Flex justifyContent='flex-end'>
                    <Button icon={AiOutlineSearch} type="submit" buttonText='Pesquisar' />
                </Flex>
            </Stack>
        </Box>
    )
}