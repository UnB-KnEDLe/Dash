import React from 'react';
import { ActProvider } from './act';
import { UserProvider } from './user';

type AppProviderProps = {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps): JSX.Element {
  return(
    <ActProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </ActProvider>
  )
};

export default AppProvider;