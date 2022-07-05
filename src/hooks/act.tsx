import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface FilterActsProps {
  [key: string]: string | boolean | null | number;
}

interface ActContextData {
  allActsName: {
    [key: string]: string;
  }
  allInitialActs: Object | null | undefined;
  getFieldActs: (act: string, data: Object) => Promise<any>;
  getTableSearchFieldNames: (act: string) => Promise<any>;
  getFieldActsPerPage: (page: number) => Promise<any>;
  resectAllFilterFields: () => void;
  handleSelectAct: (nameActs: string) => void;
  handleSearchActs: (acts: any) => void;
  searchActs: FilterActsProps[];
  selectedAct: string;
  numberOfSearchActs: number;
  getFieldActsWithoutPage: () => Promise<any>;

}

const ActContext = createContext<ActContextData>({} as ActContextData);

type ActProviderProps = {
  children: React.ReactNode;
}
function ActProvider({ children }: ActProviderProps ): JSX.Element {
  const [allActsName, setAllActsName] = useState({})
  const [allInitialActs, setAllInitialActs] = useState<Object | null | undefined>({} as null);
  const [filterData, setFilterData] = useState({});
  const [selectedAct, setSelectedAct] = useState<string>('');
  const [searchActs, setSearchActs] = useState<FilterActsProps[]>([]);
  const [numberOfSearchActs, setNumberOfSearchActs] = useState(1);

  const getAllName = useCallback(async () => {
    const response = await api.get('all/act_types');
    setAllActsName(response.data);
  }, []);

  const getAllActs = useCallback(async () => {
    const response = await api.get('all/fields_by_act');
    setAllInitialActs(response.data);
  }, []);


  const getFieldActs = useCallback(async (act: string, data: Object) => {
    const response = await api.get(`${act}/flat`, {
      params: {
        ...data,
        per_page: 5,
      }
    });

    let numberOfActs = await api.get(`${act}/count`, {
      params: {
        ...data,
      }
    });
    let numberOfActsValue = Math.ceil(numberOfActs.data/5);

    if(numberOfActsValue === 0) setNumberOfSearchActs(1);
    else setNumberOfSearchActs(numberOfActsValue);
    
    setFilterData(data);
    return response.data;
  }, [])

  const getFieldActsPerPage = useCallback(async (page: number) => {
    const response = await api.get(`${selectedAct}/flat`, {
      params: {
        ...filterData,
        per_page: 5,
        page: page
      }
    });
    return setSearchActs(response.data);
  }, [selectedAct, filterData]);

  const getFieldActsWithoutPage = useCallback(async () => {
    const response = await api.get(`${selectedAct}/flat`, {
      params: {
        ...filterData,
        per_page: numberOfSearchActs * 5,
      }
    });
    return response.data;
  }, [selectedAct, filterData, numberOfSearchActs]);

  const getTableSearchFieldNames = useCallback(async (act: string) => {
    const response = await api.get(`${act}/fields`);
    return response.data;
  }, [])

  const resectAllFilterFields = useCallback(() => {
    setFilterData({});
    setSearchActs([]);
  }, [])

  useEffect(() => {
    getAllName();
    getAllActs();
  }, [getAllName, getAllActs]);

  const handleSelectAct = useCallback((nameActs: string) => {
    setSelectedAct(nameActs);
  }, []); 

  const handleSearchActs = useCallback((acts: any) => {
    setSearchActs(acts);
  }, []);

  return (
    <ActContext.Provider
      value={{ 
        allActsName, 
        allInitialActs, 
        getFieldActs,
        getTableSearchFieldNames,
        getFieldActsPerPage,
        resectAllFilterFields,
        handleSelectAct,
        handleSearchActs,
        searchActs,
        selectedAct,
        numberOfSearchActs,
        getFieldActsWithoutPage
      }}
    >
      {children}
    </ActContext.Provider>
  );
};

function useAct(): ActContextData {
  const context = useContext(ActContext);

  if (!context) {
    throw new Error('useAct must be used within an AuthProvider');
  }
 
  return context;
}

export { ActProvider, useAct };