import React from 'react';
import { ActProvider } from './act';
import { ExtractActProvider } from './extract';
import { UserProvider } from './user';

type AppProviderProps = {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps): JSX.Element {
  return(
    <ActProvider>
      <ExtractActProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </ExtractActProvider>
    </ActProvider>
  )
};

export default AppProvider;