import React, { createContext, useCallback, useContext, useState } from 'react';
import { createDriver } from 'use-neo4j';
import { DEFAULT_DB_SETTINGS } from '../constants/db.constants';

enum Status {
  Connected = 1,
  Unconnected,
  Failed,
  Loading,
}

type userType = {
  username: string;
  password: string;
}

interface UserContextData {
    handleLogin: (user: userType) => any;
    isLoggedIn: () => boolean;
    logout: () => void;
    user: userType | null;
    connectStatus: Status;
    isLoading: boolean;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

type UserProviderProps = {
  children: React.ReactNode;
};

function UserProvider({children}: UserProviderProps ): JSX.Element {
  const [user, setUser] = useState<userType>();
  const [connectStatus, setConnectStatus] = useState<Status>(Status.Unconnected);

  const isLoading = connectStatus === Status.Loading;
  const isLoggedIn = () => user !== null;
  const logout = () => setUser(null);

  const handleLogin = useCallback((userEntry: userType) => {
    setUser(userEntry);

    const { host, port } = DEFAULT_DB_SETTINGS;
    setConnectStatus(Status.Loading);

    createDriver('neo4j', host, port, user?.username, user?.password)
      .verifyConnectivity()
      .then(() => {
        setUser({ username: user?.username, password: user?.password });
        setConnectStatus(Status.Connected);
      })
      .catch(e => {console.log(e); setConnectStatus(Status.Failed) })
      .finally(() => setConnectStatus(Status.Unconnected));

  }, [user]);


  console.log(user)

  return (
    <UserContext.Provider
      value={{
        handleLogin,
        isLoggedIn,
        logout,
        user,
        connectStatus,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}

export { UserProvider, useUser, Status };