import { Flex, SimpleGrid, Box, Stack, Select } from '@chakra-ui/react';
import Checkbox from '../components/Checkbox';
import { Divider } from '../components/Divider';
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Sidebar } from "../components/Sidebar";
import { AiOutlineCalendar, AiOutlineConsoleSql, AiOutlineFile, AiOutlineSearch } from 'react-icons/ai';
import HeadingTwo from '../components/Typography/HeadingTwo';
import SmallText from '../components/Typography/SmallText';
import Container from '../components/Container';
import Button from '../components/Button';
import TimelineComponent from '../components/TimelineComponent';
import TimelineSelector from '../components/TimelineComponent/TimelineSelector';
import { useCallback, useEffect, useState } from 'react';

const elements = {
	'SECRETARIA DE ESTADO DE TRABALHO': {
		'AVISO DE PRORROGAÇÃO DE PRAZOS': [
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
		]
	},
	'SECRETARIA DE ESTADO DE SAUDE': {
		'EDITAL DE CHAMAMENTO PÚBLICO Nº 16/2021': [
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
		],
		'EXTRATO DO TERMO DE FOMENTO Nº 05/2021': [
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
			{
				datePublication: "10/10/2022",
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi qui laborum, autem nam assumenda repudiandae animi atque aspernatur asperiores dolorum culpa. Dolore, delectus.'
			},
		],
	}
}

const secretaries = Object.keys(elements);

export default function Timeline(){
	const [secretary, setSecretary] = useState(null);
	const [actTypes, setActTypes] = useState([]);
	const [acts, setActs] = useState([]);

	const handleSelectedSecretary = useCallback((secretary: string) => {
		setSecretary(secretary);
		setActTypes([]);
	}, []);

	const handleSelectedActTypes = useCallback((actType: any) => {
		let {checked, value} = actType;
		let newActTypes = actTypes;
		if(checked && !newActTypes.includes(value)) {
			newActTypes.push(value);
			setActTypes(newActTypes);
			return;
		}
		newActTypes = newActTypes.filter(act => act != value);
		setActTypes(newActTypes);
	}, [])

	useEffect( () => {
		let newActs = [];
		actTypes.forEach(type => {
			newActs.push(...elements[secretary][type])
		})
		setActs(newActs);
	},  )

	const actTypesList = secretary ? Object.keys(elements[secretary]) : [];

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
							<Flex>
								<Stack spacing="2rem" pb="1rem" flex={1}>
								<Flex flexDirection="column" >
										<HeadingTwo headingTwoText='Data do processo' />
										<SmallText mb='1rem' smallText='Defina a data da pesquisa dos processos' />
										<Flex alignItems={'center'} gap='.75rem'>
											<Input name='' type="date" placeholder="01/01/2020" icon={AiOutlineCalendar}/>
											<SmallText smallText='até' />
											<Input name='' type="date" placeholder="31/12/2020" icon={AiOutlineCalendar}/>
										</Flex>
									</Flex>
									<Flex flexDirection="column" >
										<HeadingTwo headingTwoText='Número do processo' />
										<SmallText mb="1rem" smallText='Digite o número do processo licitatório' />
										<Input type='number' name='' placeholder="00410-000243230/2017-06" icon={AiOutlineFile} mb="1rem"/>
										<Checkbox checkboxText='Sem número de processo'/>
									</Flex>
									<Flex justifyContent='flex-end'>
										<Button icon={AiOutlineSearch} buttonText='Pesquisar' />
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
							<Flex>
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
							</Flex>
						</Box>
					</Flex>
					{/* <TimelineSelector /> */}
					<Divider text="resultado"/>
					{ acts.length ? <TimelineComponent items={acts}/> : null}
				</Flex>
			</Container>
		</Flex>
	)
}