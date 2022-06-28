import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ENDPOINT_ACTS } from '../constants/search.constants';
import api from '../services/api';

interface ActContextData {
  allActsName: {
    [key: string]: string;
  }
  allInitialActs: Object | null | undefined;
  getFieldActs: (act: string, data: Object) => Promise<void>
}



const ActContext = createContext<ActContextData>({} as ActContextData);

type ActProviderProps = {
  children: React.ReactNode;
}
function ActProvider({ children }: ActProviderProps ): JSX.Element {
  const [allActsName, setAllActsName] = useState({})
  const [allInitialActs, setAllInitialActs] = useState<Object | null | undefined>({} as null);


  const getAllName = useCallback(async () => {
    const response = await api.get('all/act_types');
    setAllActsName(response.data);
  }, []);

  const getAllActs = useCallback(async () => {
    const response = await api.get('all/fields_by_act');
    setAllInitialActs(response.data);
  }, []);


  const getFieldActs = useCallback(async (act: string, data: Object) => {
    const response = await api.get(`${ENDPOINT_ACTS[act]}`, {
      data
    });
    return response.data;
  }, [allInitialActs])

  useEffect(() => {
    getAllName();
    getAllActs();
  }, [getAllName, getAllActs]);

  return (
    <ActContext.Provider
      value={{ 
        allActsName, 
        allInitialActs, 
        getFieldActs 
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