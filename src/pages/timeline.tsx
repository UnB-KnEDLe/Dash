import { Flex, Box, Stack, Select } from '@chakra-ui/react';
import Checkbox from '../components/Checkbox';
import { Divider } from '../components/Divider';
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Sidebar } from "../components/Sidebar";
import { AiOutlineCalendar, AiOutlineFile, AiOutlineSearch } from 'react-icons/ai';
import HeadingTwo from '../components/Typography/HeadingTwo';
import SmallText from '../components/Typography/SmallText';
import Container from '../components/Container';
import Button from '../components/Button';
import TimelineComponent from '../components/TimelineComponent';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BoxLoading } from 'react-loadingg';
import { useTimeline } from '../hooks/timeline';

export default function Timeline(){
	const { register, handleSubmit, reset } = useForm();
	const { secretaries, secretary, actTypes, acts, setActs, resetAllFields, handleSelectedSecretary, handleSelectedActTypes } = useTimeline();

	const handleTimelineChanges = useCallback(async (values) => {
		// resetAllFields();
		console.log(Object.keys(values).sort());
		const fieldsLabels = ['fromDate', 'toDate', 'processNumber', 'hasProcessNumber'];
		let fieldFilled = Object.entries(values)
			.filter(field => fieldsLabels.includes(field[0]));
		console.log(fieldFilled);
	}, [])

	useEffect( () => {
		if(!secretaries) return;
		let newActs = [];
		actTypes.forEach(type => {
			newActs.push(...secretaries[secretary][type])
		})
		setActs(newActs);
	}, [])

	const actTypesList = secretary ? Object.keys(secretaries[secretary]) : [];

	return(
		<Flex direction="column" h="100vh">
			<Container>
				<Sidebar />
				<Flex direction="column" w="100%">
					<Header 
					title="Timeline"
					description="Veja todas as etapas do procedimento de um processo licitatório."
					/>
					<Flex flex="1" gap="4" alignItems="flex-start">
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
							<Flex as="form" onSubmit={handleSubmit(handleTimelineChanges)}>
								<Stack spacing="2rem" pb="1rem" flex={1}>
									<Flex flexDirection="column" >
										<HeadingTwo headingTwoText='Data do processo' />
										<SmallText mb='1rem' smallText='Defina a data da pesquisa dos processos' />
										<Flex alignItems={'center'} gap='.75rem'>
											<Input
												name='fromDate'
												label="fromDate"
												type="date"
												placeholder="01/01/2020"
												icon={AiOutlineCalendar}
												{...register("fromDate")}
											/>
											<SmallText smallText='até' />
											<Input
												name='toDate'
												label='toDate'
												type="date"
												placeholder="31/12/2020"
												icon={AiOutlineCalendar}
												{...register("toDate")} 
											/>
										</Flex>
									</Flex>
									<Flex flexDirection="column" >
										<HeadingTwo headingTwoText='Número do processo' />
										<SmallText mb="1rem" smallText='Digite o número do processo licitatório' />
										<Input type='number' {...register("processNumber")} name='' placeholder="00410-000243230/2017-06" icon={AiOutlineFile} mb="1rem"/>
										<Checkbox {...register("hasProcessNumber")} checkboxText='Sem número de processo'/>
									</Flex>
									<Flex justifyContent='flex-end'>
										<Button icon={AiOutlineSearch} onClick={handleTimelineChanges} buttonText='Pesquisar' />
									</Flex>
								</Stack>
							</Flex>
						</Box>
						<Box
							flex={3}
							padding='2rem'
							borderRadius='0.25rem'
							bgColor='pallete.cardBackground'
							flexDirection='column'
							h='100%'
							filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
						>
							{!!secretaries && <Flex>
								<Stack spacing="2rem" flex={1} >
									<Flex flexDirection={'column'}>
										<HeadingTwo headingTwoText='Secretarias' />
										<SmallText mb='.5rem' smallText='Essas foram as secretarias encontradas' />
										<Select onChange={(el) => handleSelectedSecretary(el.target.value)}>
											{secretaries.map((secretary, index) => (
												<option key={index} value={secretary}>{secretary}</option>
											))}
										</Select>
									</Flex>
									{ actTypes && (
										<Flex flexDirection={'column'}>
											<HeadingTwo headingTwoText='Tipo de ato' />
											<SmallText mb='.5rem' smallText='Selecione o tipo de ato que deseja visualizar' />
											<Stack maxH='12rem'>
												{actTypesList.map((actType, index) => (
													<Flex p='.5rem' borderBottom='1px solid gray'>
														<Checkbox checked={index === 1} value={actType} onChange={e => handleSelectedActTypes(e.target)} checkboxText={actType}/>
													</Flex>
												))}
											</Stack>
										</Flex>
									)}
								</Stack>
							</Flex> }
						</Box>
					</Flex>
					{/* <TimelineSelector /> */}
					<Divider text="resultado"/>
					{ (!!secretaries && acts.length) ? <TimelineComponent items={acts}/> :
					<Box
						flex={3}
						padding='2rem'
						borderRadius='0.25rem'
						bgColor='pallete.cardBackground'
						flexDirection='column'
						h='100%'
						filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))">
							<BoxLoading/>
						</Box>}
				</Flex>
			</Container>
		</Flex>
	)
}