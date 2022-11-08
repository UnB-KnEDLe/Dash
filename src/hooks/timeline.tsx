import React, { useState, useCallback, createContext, useEffect, useContext } from 'react'

interface TimelineContextData {
	secretaries: any[];
	secretary: string;
	actTypes: string[];
	acts: Array<{
		datePublication: string;
		text: string;
	}>;
	setActs: React.Dispatch<React.SetStateAction<any[]>>;
	handleSelectedSecretary: (secretary: string) => void;
	handleSelectedActTypes: (actType: any) => void;
	resetAllFields: () => void;
}
const elements = {}
const TimelineContext = createContext<TimelineContextData>({} as TimelineContextData)

type TimelineProviderProps = {
	children: React.ReactNode;
}

function TimelineProvider({children}: TimelineProviderProps ): JSX.Element {
	const [secretaries, setSecretaries] = useState([]);
	const [secretary, setSecretary] = useState(null);
	const [actTypes, setActTypes] = useState([]);
	const [acts, setActs] = useState([]);

	const getTimelineData = useCallback( () => {
		console.log("jonatas")
	}, []);

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

	const resetAllFields = useCallback( () => {
		console.log("Jonatas");
	}, [])

	useEffect( () => {
		let newActs = [];
		actTypes.forEach(type => {
			newActs.push(...elements[secretary][type])
		})
		setActs(newActs);
	}, [])

	return (
		<TimelineContext.Provider
			value={{
				secretaries,
				secretary,
				actTypes,
				acts,
				setActs,
				handleSelectedSecretary,
				handleSelectedActTypes,
				resetAllFields,
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