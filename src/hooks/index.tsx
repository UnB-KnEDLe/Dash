import React from 'react';
import { ActProvider } from './act';
import { ExtractActProvider } from './extract';

type AppProviderProps = {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps): JSX.Element {
  return(
    <ActProvider>
      <ExtractActProvider>
        {children}
      </ExtractActProvider>
    </ActProvider>
  )
   
};

export default AppProvider;