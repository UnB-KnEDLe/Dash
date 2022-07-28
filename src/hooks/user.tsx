import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
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

type PopupContentType = {
  title: string;
  properties: Object;
} | null;

interface UserContextData {
    handleLogin: (user: userType) => any;
    logout: () => void;
    user: userType | null;
    setUser: (user: userType) => void;
    connectStatus: Status;
    cypher: string;
    handleCypher: (cypher: string) => void;
    history: string[];
    setHistory: (history: string[]) => void;
    popupContent: PopupContentType;
    setPopupContent: (popupContent: PopupContentType) => void;
    closePopup: () => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

type UserProviderProps = {
  children: React.ReactNode;
};

function UserProvider({children}: UserProviderProps ): JSX.Element {
  const [user, setUser] = useState<userType | undefined>();
  const [connectStatus, setConnectStatus] = useState<Status>(Status.Unconnected);
  const [cypher, setCypher] = useState<string>('match p=(Pessoa)-[r]->() return p limit 10');
  var localStorageHistory = typeof window !== "undefined" ? localStorage.getItem("history") : '[]';
  localStorageHistory ??= '[]';
  const [history, setHistory] = useState<string[]>([...JSON.parse(localStorageHistory)].slice(0, 10));
  const [popupContent, setPopupContent] = useState<PopupContentType>();

  const handleCypher = useCallback((cypher: string) => {
    setCypher(cypher);
    if(connectStatus !== Status.Connected) return;
    if(cypher === '') return;
    setHistory( (history) => {
      if (history.includes(cypher))
        history.splice(history.indexOf(cypher), 1);
    
      return [cypher, ...history];

    });
  }, [connectStatus, Status ]);

  const logout = () => {
    setConnectStatus(Status.Unconnected)
    setUser(null)
  };

  const closePopup = () => setPopupContent(null);

  const handleLogin = (userEntry: userType) => {
    const { host, port } = DEFAULT_DB_SETTINGS;
    setUser(userEntry)
    setConnectStatus(Status.Loading);

    createDriver('neo4j', host, port, userEntry?.username, userEntry?.password)
      .verifyConnectivity()
      .then(() => {
        setConnectStatus(Status.Connected)
      })
      .catch(() => setConnectStatus(Status.Failed))

  };

  useEffect(() => localStorage.setItem("history", JSON.stringify(history)), [history]);

  return (
    <UserContext.Provider
      value={{
        handleLogin,
        logout,
        setUser,
        user,
        connectStatus,
        cypher,
        handleCypher,
        history,
        setHistory,
        popupContent,
        setPopupContent,
        closePopup,
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
