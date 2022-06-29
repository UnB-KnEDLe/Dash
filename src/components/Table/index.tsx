import { Table as Tb, Thead, Tbody, Tr, Th, Td, Box, Flex } from '@chakra-ui/react';
import HeadingTwo from '../Typography/HeadingTwo';
import Button from '../Button';
import { Input } from '../Input';
import { RiDownload2Fill } from 'react-icons/ri';
import { FaSearch } from "react-icons/fa";

interface TableProps {
	heading: {name: string, key: string}[];
	data: any[];
	title: string;
}

export default function Table({heading, data, title}: TableProps) {
	return (
		<Box bgColor="pallete.cardBackground" borderRadius='0.25rem' padding="3rem"> 
			<Flex justify="space-between" width="100%" direction="row">
				<Flex width="100%">
					<HeadingTwo marginBottom="1.5rem" mr="1rem" headingTwoText={title}/>
					<Button icon={RiDownload2Fill}/>
				</Flex>
				<Input margin="0 auto" w="100%" name='table-search' placeholder='Ex: Joao da Silva' type='text' icon={FaSearch} />
			</Flex>

			<Tb variant="striped" colorScheme="facebook">
				<Thead bgColor="pallete.secondary">
					<Tr>
						{heading.map((item, index) => {
							var thProps = index <= 1 ? ({px: ".25rem", maxWidth: "5rem", pl: "1.75rem"}) : ({px: null, maxWidth: null, pl: null});
							return (
								<Th fontWeight="bold" color="pallete.background" {...thProps}>
									{item.name}
								</Th>
							)
						})}
					</Tr>
				</Thead>

				<Tbody fontWeight="500">
					{data.map((dataItem, dataIndex) => (
						<Tr key={dataIndex}>
							{heading.map((headingItem, headingIndex) => {
								var tdProps = headingIndex <= 1 ? ({px: ".25rem", maxWidth: "5rem", pl: "1.75rem"}) : ({px: null, maxWidth: null, pl: null});
								return (
									<Td  key={headingIndex} {...tdProps}>
										{dataItem[headingItem.key]}
									</Td>
								)
							})}
						</Tr>
					))}
				</Tbody>
			</Tb>
		</Box>
	);
}

