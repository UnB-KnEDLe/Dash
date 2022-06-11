import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface RetirementAct {
  cargo: {
    classe: string | null;
    efetivo: string | null;
    nome: string | null;
    padrao: string | null;
    quadro: string | null;
  },
  dodf_data: string | null;
  dodf_nome: string | null;
  dodf_numero: number | null;
  orgao: {
    nome: string | null;
  },
  pessoa: {
    matricula: string | null;
    nome: string | null;
  },
  sei: string | null;
}

interface ActContextData {
  retiramentActs: RetirementAct[];
}

const ActContext = createContext<ActContextData>({} as ActContextData);

type ActProviderProps = {
  children: React.ReactNode;
}
function ActProvider({ children }: ActProviderProps ): JSX.Element {
  const [retiramentActs, setRetiramentActs] = useState<RetirementAct[]>([]);

  const getRetirementActs = useCallback(async () => {
    const response = await api.get('aposentadoria');
      setRetiramentActs(response.data); 
  }, []);

  useEffect(() => {
    getRetirementActs();
  }, [])

  return (
    <ActContext.Provider
      value={{ retiramentActs }}
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