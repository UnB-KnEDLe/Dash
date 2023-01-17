import React from 'react';
import { ActProvider } from './act';
import { ExtractActProvider } from './extract';
import { TimelineProvider } from './timeline';
import { UserProvider } from './user';

type AppProviderProps = {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps): JSX.Element {
  return(
    <TimelineProvider>
      <ActProvider>
        <ExtractActProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ExtractActProvider>
      </ActProvider>
    </TimelineProvider>
  )
};

export default AppProvider;