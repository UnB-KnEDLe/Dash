import React from 'react';
import { ActProvider } from './act';

type AppProviderProps = {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps): JSX.Element {
  return(
    <ActProvider>  
      {children}
    </ActProvider>
  )
   
};

export default AppProvider;