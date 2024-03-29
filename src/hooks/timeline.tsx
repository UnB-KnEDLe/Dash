import { useToast } from '@chakra-ui/react';
import React, { useState, useCallback, createContext, useContext, Dispatch, SetStateAction } from 'react'
import api from '../services/api';
import { Act, Process, ProcessRequestProps } from '../shared/interfaces/timeline.interface';

interface TimelineContextData {
	acts: Act[];
	processList: Process[];
	handleProcessSearch: (values: ProcessRequestProps) => void;
	getActs: (processNumber: string) => void;
}

const TimelineContext = createContext<TimelineContextData>({} as TimelineContextData)

type TimelineProviderProps = {
	children: React.ReactNode;
}

function TimelineProvider({children}: TimelineProviderProps ): JSX.Element {
	const [acts, setActs] = useState<Act[]>([]);
	const [processList, setProcessList] = useState<Process[]>([]);
	const toast = useToast();

	const clearFields = useCallback( () => {
		setActs([]);
		setProcessList([]);
	}, []);

	const getProcessList = useCallback( async (fields: ProcessRequestProps) => {
		await api.post("/timeline", fields,)
			.then(response => {
				if(response.data == 0) {
					toast({
						title: 'Houve um erro ou a busca não retornou resultados.',
						status: 'warning',
						duration: 8000,
						isClosable: true,
					})
					return [];
				}
				if(response.data.length <= 50) return response.data;
				toast({
					title: 'A pesquisa é limitada a 50 atos. Refine sua busca.',
					status: 'warning',
					duration: 8000,
					isClosable: true,
				})
				return response.data.slice(0, 49);
			})
			.then( data => setProcessList(data) );
	}, []);

	const getActs = useCallback( async (processNumber: string) => {
		await api.get("/response/timeline/acts/data", {params: {numberProcess: processNumber}},)
			.then( response => response.data )
			.then( data => {
				if (!data.length) {
					toast({
						title: "Esse processo não está registrado no nosso banco de dados.",
						status: "error",
						duration: 8000,
						isClosable: true,
					})
				}
				setActs(data);
			} )
	}, [])

	const handleProcessSearch = useCallback( (values: ProcessRequestProps) => {
		clearFields();

		if (values.direct)
			return getActs(values.numberProcess);

		if (values.startDate && values.startDate < "2021-07-29") {
			toast({
				title: 'As pesquisas só são válidas  a partir do dia 29 de julho de 2021.',
				status: 'warning',
				duration: 8000,
				isClosable: true,
			})
			return;
		}

		if (values.startDate && values.endDate) {
			if (values.startDate > values.endDate) {
				toast({
					title: 'A data de fim deve ser menor que a data de início.',
					status: 'warning',
					duration: 8000,
					isClosable: true,
				})
				return;
			}
		}

		delete values.direct;

		getProcessList(values);
	}, []);

	return (
		<TimelineContext.Provider
			value={{
				acts,
				processList,
				handleProcessSearch,
				getActs,
			}}
		>
			{children}
		</TimelineContext.Provider>
	)
}

function useTimeline(): TimelineContextData {
	const context = useContext(TimelineContext);

	if (!context) {
		throw new Error('useTimeline must be used within an AuthProvider');
	}

	return context;
}

export { TimelineProvider, useTimeline }