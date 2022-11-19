import { Flex } from '@chakra-ui/react';
import { Divider } from '../components/Divider';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Container from '../components/Container';
import Results from '../templates/timeline/Results';
import { useEffect } from 'react';
import { useTimeline } from '../hooks/timeline';
import ProcessForm from '../templates/timeline/ProcessForm';
import Selection from '../templates/timeline/Selection';

export default function Timeline(){
	const { secretaries, secretary, actTypeList, setActs } = useTimeline();

	useEffect( () => {
		if(!secretaries) return;
		let newActs = [];
		actTypeList.forEach(type => {
			newActs.push(...secretaries[secretary][type])
		})
		setActs(newActs);
	}, [])

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
						<ProcessForm />
						<Selection />
					</Flex>
					<Divider text="resultado"/>
					<Results/>
				</Flex>
			</Container>
		</Flex>
	)
}