import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';

export interface FilterActProps {
  [key: string]: {
    label: string;
    status: boolean;
  }
}

export interface AllInitialActsProps {
  [key: string]: {
    [key: string]: FilterActProps[];
  }
}

interface ActContextData {
  allActsName: {
    [key: string]: string;
  }
  allInitialActs: Object | null | undefined;
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

  useEffect(() => {
    getAllName();
    getAllActs();
  }, [getAllName, getAllActs]);

  return (
    <ActContext.Provider
      value={{ allActsName, allInitialActs }}
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