import { Stack, Flex, Box } from '@chakra-ui/react';
import HeadingTwo from '../../../components/Typography/HeadingTwo';
import SmallText from '../../../components/Typography/SmallText';
import { Input } from '../../../components/Input';
import Button from '../../../components/Button';
import { AiOutlineCalendar, AiOutlineFile, AiOutlineSearch } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Checkbox from '../../../components/Checkbox';
import { useTimeline } from '../../../hooks/timeline';

export default function ProcessForm() {
    const { handleProcessSearch, handleProcessNumberCheck, noProcessNumber } = useTimeline();
    const { register, handleSubmit } = useForm();

    return (
        <Box
            as='div'
            padding='2rem'
            borderRadius='0.25rem'
            bgColor='pallete.cardBackground'
            flexDirection='column'
            flex={4}
            h='100%'
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
        >
            <Stack as="form" onSubmit={handleSubmit(handleProcessSearch)} spacing="2rem" pb="1rem" flex={1}>
                <Flex flexDirection="column" >
                    <HeadingTwo headingTwoText='Data do processo' />
                    <SmallText mb='1rem' smallText='Defina a data da pesquisa dos processos' />
                    <Flex alignItems={'center'} gap='.75rem'>
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
                <Flex flexDirection="column" >
                    <HeadingTwo headingTwoText='Número do processo' />
                    <SmallText mb="1rem" smallText='Digite o número do processo licitatório' />
                    <Input
                        type='text'
                        name='processNumber'
                        placeholder="00410-000243230/2017-06"
                        icon={AiOutlineFile}
                        disabled={noProcessNumber}
                        mb="1rem"
                        {...register("processNumber")}
                    />
                    <Checkbox checked={noProcessNumber} onChange={handleProcessNumberCheck} checkboxText='Sem número de processo'/>
                </Flex>
                <Flex justifyContent='flex-end'>
                    <Button icon={AiOutlineSearch} type="submit" buttonText='Pesquisar' />
                </Flex>
            </Stack>
        </Box>
    )
}