import React, { createContext, useState, useContext } from 'react';

const QueryContext = createContext();

export default function QueryProvider({ children }) {
    const [popupContent, setPopupContent] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const [user, setUser] = useState({});
    const [showUser, setShowUser] = useState(true);

    const [error, setError] = useState("");
    const [completed, setCompleted] = useState(false);

    const localStorageHistory = localStorage.getItem("history");
    const [history, setHistory] = useState([...new Set(JSON.parse(localStorageHistory))]);
    const [showHistory, setShowHistory] = useState(false);

    const [cypherText, setCypherText] = useState("");
    const [cypher, setCypher] = useState(cypherText);

    const onRunCypher = () => {
        setCypher(cypherText);
        setShowPopup(false);
        setPopupContent({});
        if (cypherText === "") return;
        setHistory([cypherText, ...history.filter(item => item !== cypherText && item !== "")]);
    }

    return (
        <QueryContext.Provider value={{
            popupContent, setPopupContent,
            showPopup, setShowPopup,
            user, setUser,
            showUser, setShowUser,
            error, setError,
            completed, setCompleted,
            history, setHistory,
            showHistory, setShowHistory,
            cypherText, setCypherText,
            cypher, setCypher, onRunCypher,
        }}>
            {children}
        </QueryContext.Provider>
    )
}

export function usePopupContent() {
    const { popupContent, setPopupContent, showPopup, setShowPopup } = useContext(QueryContext);
    return { popupContent, setPopupContent, showPopup, setShowPopup };
}

export function useUser() {
    const { user, setUser, showUser, setShowUser } = useContext(QueryContext);
    return { user, setUser, showUser, setShowUser };
}

export function useError() {
    const { error, setError } = useContext(QueryContext);
    return { error, setError };
}

export function useCompleted() {
    const { completed, setCompleted } = useContext(QueryContext);
    return { completed, setCompleted };
}

export function useHistory() {
    const { history, setHistory, showHistory, setShowHistory  } = useContext(QueryContext);
    return { history, setHistory, showHistory, setShowHistory  };
}

export function useCypher() {
    const { cypher, setCypher, cypherText, setCypherText, onRunCypher } = useContext(QueryContext);
    return { cypher, setCypher, cypherText, setCypherText, onRunCypher };
}