import { Table as Tb, Thead, Tbody, Tr, Th, Box, Flex, Icon, Switch, Text } from '@chakra-ui/react';
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
import { useExtract } from '../../hooks/extract';

interface TableProps {
	title: string;
}

export default function TableExtract({ title }: TableProps) {
	const {headerActText, bodyActText, allTexts, headerActTextDownload, handleBodyText, bodyActTextDownload, setBodyActTextDownload } = useExtract();

	const [switchView, setSwitchView] = useState(false);
	const [switchHeader, setSwitchHeader] = useState([]);
	const [switchBody, setSwitchBody] = useState([]);

	
	const [dowloadActReady, setDowloadActReady] = useState(false);

	const csvLinkEl = useRef<any>();

	const downloadReport = useCallback(() => {
		setDowloadActReady(true);
		setBodyActTextDownload(handleBodyText());
		
	}, [handleBodyText, setBodyActTextDownload]);

	const handleSwitchView = useCallback(() => {
		setSwitchView(prev => !prev);
	}, []);

	const handleEntitiesOrTextActs = useCallback(() => {
		if(switchView) {
			setSwitchHeader(headerActText);
			setSwitchBody(bodyActText);
			return;
		}
		setSwitchHeader(["Texto"]);
		setSwitchBody(allTexts);

	}, [switchView, headerActText, bodyActText, allTexts])

	useEffect(() => {
		handleEntitiesOrTextActs();
	}, [handleEntitiesOrTextActs])

	useEffect(() => {
		setDowloadActReady(false);
		if(headerActTextDownload.length !== 0 && bodyActTextDownload.length !== 0) {			
			csvLinkEl?.current?.link.click();
		}
	}, [headerActTextDownload, bodyActTextDownload, csvLinkEl])

	

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
						<HeadingTwo color="pallete.background" ml="2rem" mr="1rem" headingTwoText={!switchView ? title: "Entidades Extraídas"} padding="1rem 0"/>
						<Switch onChange={handleSwitchView} colorScheme='facebook' size='md'/>
						<Button marginLeft="1.5rem" loading={dowloadActReady} onClick={downloadReport} icon={dowloadActReady ? Loading	: RiDownload2Fill } />
						<CSVLink
							headers={headerActTextDownload}
							filename="resultado-extracao.csv"
							data={bodyActTextDownload}
							ref={csvLinkEl}
						/>
					</Flex>
			</Flex>
			<Box mb="4rem" overflowY="auto" maxHeight={800} bgColor="pallete.cardBackground" borderRadius='0.25rem'> 
				<Tb variant="striped" colorScheme="facebook">
					<Thead bgColor="pallete.secondary">
						<Tr>
							{switchHeader.map((item, index) => {
								var thProps = { width: "5rem", height: "2rem", px: "0.75rem"};
								return (
									<Th key={index} fontWeight="bold" color="pallete.background" {...thProps}>
										{item}
									</Th>
								)
							})}
						</Tr>
					</Thead>
					
					{!switchView ? (
						<Tbody fontWeight="500">
						{switchBody.map((dataItem, dataIndex) => (
							<Tr key={dataIndex}>
								{switchHeader.map((headingIndex) => {
									var thProps = {width: "5rem", height:"2rem", px: "0.75rem"};
									return (
										<TdTable
											index={headingIndex}
											position={dataIndex}
											hasSwitchView={switchView}
											lineValue={String(dataItem)} 
											{...thProps}
										/>
									)
								})}
							</Tr>
						))}
					</Tbody>
					) 
					: 
					(
						<Tbody fontWeight="500">
							{switchBody.map((dataItem, dataIndex) => (
								<Tr key={dataIndex}>
									{switchHeader.map((headingItem, headingIndex) => {
										var thProps = {width: "5rem", height:"2rem", px: "0.75rem"};
										return (
											<TdTable
												index={headingIndex}
												position={dataIndex}
												hasSwitchView={switchView}
												lineValue={switchView ? (typeof(dataItem[headingIndex]) !== typeof(true) 
													&& typeof(dataItem[headingIndex]) !== typeof(null)
													&& typeof(dataItem[headingIndex]) !== typeof(undefined)
													? String(dataItem[headingIndex]) 
													: '') : String(dataItem)} 
												{...thProps}
											/>
										)
									})}
								</Tr>
							))}
						</Tbody>
					)}
					
				</Tb>
				
			</Box>
		</>
  );
}

