import { useToast } from '@chakra-ui/react';
import React, { useState, useCallback, createContext, useEffect, useContext } from 'react'
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
		await api.post("/timeline", {numberProcess: processNumber},)
			.then( response => response.data )
			.then( data => {
				if (!data[0].length) {
					toast({
						title: "Esse processo não está registrado no nosso banco de dados.",
						status: "error",
						duration: 8000,
						isClosable: true,
					})
				}
				setActs(data[0]);
			} )
	}, [])

	const handleProcessSearch = useCallback( async (values) => {
		clearFields();

		if(values.numberProcess?.length) {
			let entry = {numberProcess: values.numberProcess}
			getProcessList(entry);
			return;
		}

		const entries = Object.entries(values)
			.filter(field => field[1])
			.map(([label, value]:[string, string]) => {
				if (label == "numberProcess") return [label, value];

				let [year, month, day] = value.split('-');
				value =  `${day}/${month}/${year}`;
				return [label, value];
			});
		
		let fieldFilled = Object.fromEntries(entries);
		getProcessList(fieldFilled);
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