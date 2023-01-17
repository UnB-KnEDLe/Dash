import { Flex } from '@chakra-ui/react';
import { Divider } from '../components/Divider';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Container from '../components/Container';
import Results from '../templates/timeline/Results';
import ProcessForm from '../templates/timeline/ProcessForm';
import Selection from '../templates/timeline/Selection';

export default function Timeline(){

	return(
		<Flex direction="column" h="100vh">
			<Container>
				<Sidebar />
				<Flex direction="column" w="100%">
					<Header 
						title="Contratos"
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