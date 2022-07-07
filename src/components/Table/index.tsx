import { Table as Tb, Thead, Tbody, Tr, Th, Td, Box, Flex, Icon } from '@chakra-ui/react';
import HeadingTwo from '../Typography/HeadingTwo';
import Button from '../Button';
import { RiDownload2Fill, RiH1 } from 'react-icons/ri';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAct } from '../../hooks/act';
import { TdTable } from './TdTable';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import SmallText from '../Typography/SmallText';
import { CSVLink } from 'react-csv';
import { Loading } from './loading';

interface TableProps {
	title: string;
}

interface FilterActsProps {
	[key: string]: string | boolean | null | number;
}

export default function Table({ title }: TableProps) {
	const [headTableFields, setHeadTableFields] = useState<string[][]>([]);
	const [actualPage, setActualPage] = useState(1);
	const [headerDownloadLink, setHeaderDownloadLink] = useState([]);
	const [dataDownloadLink, setDataDownloadLink] = useState([]);
	const [dowloadReady, setDowloadReady] = useState(false);

	const { getTableSearchFieldNames, getFieldActsPerPage, selectedAct, searchActs, numberOfSearchActs, getFieldActsWithoutPage } = useAct();
	const csvLinkEl = useRef<any>();

	const headTableDownload = useCallback(async () => {
		let headers = [];
		for (const [key, value] of headTableFields) {
			headers.push({
					label: value,
					key
			})
		}
		let acts = await getFieldActsWithoutPage();
		setDataDownloadLink(acts);
		setHeaderDownloadLink(headers);
	}, [headTableFields, getFieldActsWithoutPage])


	const headTable = useCallback(async() => {
		const headFields = await getTableSearchFieldNames(selectedAct);
		setHeadTableFields(Object.entries(headFields));
	},[selectedAct]);

	const handlePage = useCallback(async(valueAdd: number) => {
		setActualPage(prevState => prevState + valueAdd);
	}, [getFieldActsPerPage, actualPage]);
	
	const changePage = useCallback(async() => {
		await getFieldActsPerPage(actualPage);
	}, [actualPage])

	const downloadReport = useCallback(async() => {
		try {
			setDowloadReady(true);
			let headers = [];
			for (const [key, value] of headTableFields) {
				headers.push({
						label: value,
						key
				})
			}
			let acts = await getFieldActsWithoutPage();

			setDataDownloadLink(acts);
			setHeaderDownloadLink(headers);

		}catch (e) {
			setDowloadReady(false);
			console.log(e);
		}
		
		
	}, [headTableFields, getFieldActsWithoutPage]);

	useEffect(() => {
		headTable()
	}, [headTable])

	useEffect(() => {
		changePage();
	}, [changePage])

	useEffect(() => {
		if(dataDownloadLink.length !== 0 && headerDownloadLink.length !== 0) {			
			csvLinkEl?.current?.link.click();
		}
		setDowloadReady(false);
	}, [dataDownloadLink, headerDownloadLink, csvLinkEl])

  return (
		<>
			<Flex
				mb="1rem"
				align="center"
				bgColor="pallete.darkSecondary"
				borderRadius='0.25rem'
				direction="row"
				justifyContent="space-between"
			>
					<Flex alignItems="center"> 
						<HeadingTwo color="pallete.background" ml="2rem" mr="1rem" headingTwoText={title} padding="1rem 0"/>

						<Button loading={dowloadReady} onClick={downloadReport} icon={dowloadReady ? Loading	: RiDownload2Fill } />
						<CSVLink
							headers={headerDownloadLink}
							filename="resultado-pesquisa.csv"
							data={dataDownloadLink}
							ref={csvLinkEl}
						/>

					</Flex>
					<Flex alignItems="center" mr="2rem">
						<Icon pointerEvents={actualPage === 1 ? "none" : "auto"} onClick={() => handlePage(-1)} cursor="pointer" color={actualPage !== 1 ? "pallete.background" : "pallete.text"} as={AiFillLeftCircle} mr="1rem" transform="scale(1.8)"/>
						<SmallText color="pallete.background" smallText={`Página ${actualPage} de ${numberOfSearchActs}`}/>
						<Icon pointerEvents={actualPage === numberOfSearchActs ? "none" : "auto"} onClick={() => handlePage(+1)} cursor="pointer" color={actualPage !== numberOfSearchActs ? "pallete.background" : "pallete.text"} as={AiFillRightCircle} ml="1rem" transform="scale(1.8)"/>
					</Flex>
			</Flex>
			<Box mb="4rem" overflowY="auto" maxHeight={800} width={1200} bgColor="pallete.cardBackground" borderRadius='0.25rem'> 
				<Tb variant="striped" colorScheme="facebook">
					<Thead bgColor="pallete.secondary">
						<Tr>
							{headTableFields.map((item, index) => {
								var thProps = { width: "5rem", height: "2rem", px: "0.75rem"};
								return (
									<Th key={index} fontWeight="bold" color="pallete.background" {...thProps}>
										{item[1]}
									</Th>
								)
							})}
						</Tr>
					</Thead>

					<Tbody fontWeight="500">
						{searchActs.map((dataItem, dataIndex) => (
							<Tr key={dataIndex}>
								{headTableFields.map((headingItem, headingIndex) => {
									var thProps = {width: "5rem", height:"2rem", px: "0.75rem"};
									return (
										<TdTable
											index={headingIndex}
											lineValue={typeof(dataItem[headingItem[0]]) !== typeof(true) 
												&& typeof(dataItem[headingItem[0]]) !== typeof(null)
												&& typeof(dataItem[headingItem[0]]) !== typeof(undefined)
												? String(dataItem[headingItem[0]]) 
												: ''} 
											{...thProps}
										/>
									)
								})}
							</Tr>
						))}
					</Tbody>
				</Tb>
				
			</Box>
		</>
  );
}

