import React, { useState, useCallback, createContext, useEffect, useContext } from 'react'
import api from '../services/api';
import { SecretariesRequestProps } from '../shared/interfaces/timeline.interface';

interface TimelineContextData {
	secretaries: any[];
	secretary: string;
	actTypeList: string[];
	acts: Array<{
		datePublication: string;
		text: string;
	}>;
	noProcessNumber: boolean;
	processList: string[];
	getProcessList: (fields: {startDate: string, endDate: string, processNumber: string}) => void;
	setActs: React.Dispatch<React.SetStateAction<any[]>>;
	handleSelectedSecretary: (secretary: string) => void;
	handleSelectedActTypes: (actType: any) => void;
	resetAllFields: () => void;
	handleProcessSearch: (values: any) => void;
	handleProcessNumberCheck: (e: any) => void;
	handleSelectedProcess: (selProcess: string) => void;
}

const elements = {}
const TimelineContext = createContext<TimelineContextData>({} as TimelineContextData)

type TimelineProviderProps = {
	children: React.ReactNode;
}

function TimelineProvider({children}: TimelineProviderProps ): JSX.Element {
	const [processList, setProcessList] = useState<string[]>([]);
	const [process, setProcess] = useState<string>("");
	const [secretaries, setSecretaries] = useState([]);
	const [secretary, setSecretary] = useState<any>(null);
	const [actTypeList, setActTypesList] = useState([]);
	const [actType, setActType] = useState<string>("");
	const [acts, setActs] = useState([]);
	const [noProcessNumber, setNoProcessNumber] = useState<boolean>(false);

	const resetAllFields = () => {
		setSecretaries([]);
		secretary([]);
		setActTypesList([]);
		setActs([]);
	}

	useEffect( () => {
		if (!actType) return;
		console.log(actType);
		setActs(secretary[actType]);
	}, [actType, setActType]);

	useEffect( () => {
		if (!secretary) return;
		console.log(secretary)
		setActTypesList(Object.keys(secretary));
		setActType(Object.keys(secretary)[0]);
	}, [secretary]);

	useEffect( () => {
		if (!process) return;
		api.post("/timeline", {numberProcess: process})
			.then( response => {
				setSecretaries(response.data[0]);
				let firstSecretaryIndex = Object.keys(response.data[0])[0]
				setSecretary(response.data[0][firstSecretaryIndex]);
			} )
	}, [process])

	const getProcessList = useCallback(async (fields: SecretariesRequestProps) => {
		await api.post("/timeline", fields,)
			.then( response => {
				setProcessList(response.data);
				setProcess(response.data[0]);
			} );
	}, []);

	const handleSelectedProcess = useCallback( ( selProcess: string ) => {
		setProcess(selProcess);
	}, []);

	const handleSelectedSecretary = useCallback((secretary: string) => {
		setSecretary(secretary);
		setActTypesList(Object.keys(secretary));
		setActType(Object.keys(secretary)[0]);
	}, []);

	const handleSelectedActTypes = useCallback((actTypeStr: any) => {
		setActType(actTypeStr);
	}, [])

	const handleProcessSearch = useCallback(async (values) => {
		if(!!noProcessNumber || values.numberProcess?.length) {
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

	const handleProcessNumberCheck = (e) => {
		let {checked} = e.target;
		setNoProcessNumber(checked);
	}

	return (
		<TimelineContext.Provider
			value={{
				secretaries,
				secretary,
				actTypeList,
				acts,
				noProcessNumber,
				processList,
				getProcessList,
				setActs,
				handleSelectedSecretary,
				handleSelectedActTypes,
				handleProcessSearch,
				handleProcessNumberCheck,
				resetAllFields,
				handleSelectedProcess
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