import React, { useEffect, useState, useRef } from "react";
import NeoVis from "neovis.js/dist/neovis.js";
import Loading from "../../components/Loading";
import { cypherConfig } from "./queryConfig";

import Popup from "../../components/Popup";

import { FullScreen, useFullScreenHandle } from 'react-full-screen'

import { Container, InputContainer, Header, Graph, FullscreenBtn } from "../../styles/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress, faHistory, faTerminal, faUser } from "@fortawesome/free-solid-svg-icons";
import QueryModal from "./QueryModal";
import QueryUser from "./QueryUser";

const NeoGraph = () => {
  const handleFullscreen = useFullScreenHandle();
  const visRef = useRef();

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

  const handleShowPopup = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  }

  const onError = (err) => {
    if(err.length === 0) return
    setError(err);
    handleShowPopup({error: error})
  }

  const onShowHistory = () => setShowHistory(!showHistory);

  useEffect(() => {
    let vis;

    if (cypher) {
      const config = {
        container_id: visRef.current.id,
        server_user: user.username,
        server_password: user.password,
        initial_cypher: cypher,
        ...cypherConfig,
      }

      onError("");
      setCompleted(false);  

      
      vis = new NeoVis(config);
      vis.registerOnEvent("clickNode", (data) => { 
        handleShowPopup(data.node);
      });
      
      vis.registerOnEvent("clickEdge", (data) => {
        handleShowPopup(data.edge);
      });
        
      vis.render();

      vis.registerOnEvent("error", handleNeoError);
      vis.registerOnEvent("completed",(e) => {
        vis["_network"].on("afterDrawing", handleNeoCompleted);
      });
    }
    
  }, [cypher, showUser, user.password, user.username]);

  useEffect(() => localStorage.setItem("history", JSON.stringify(history)), [history]);

  const handleNeoError = (e) => setError(JSON.stringify(e.error_msg));
  const handleNeoCompleted = () => setCompleted(true);

  const onFullscreen = () => {
    handleFullscreen.active ? handleFullscreen.exit() : handleFullscreen.enter();
  }


  return (
    <Container className="QueryContainer">
      <FullScreen style={{height: "100%"}} handle={handleFullscreen}>
      <Popup show={showPopup} onChange={setShowPopup}>{popupContent}</Popup>
        <FullscreenBtn onClick={onFullscreen}>
          <FontAwesomeIcon size="2x" icon={handleFullscreen.active ? faCompress : faExpand} />
        </FullscreenBtn>
        { showUser ? (
          <QueryUser user={user} setUser={setUser} setShowUser={setShowUser} />
        ) : (
          <>
            <Header showHistoryBtn={history.length} visible={cypherText.length === 0 || (cypher && !completed && !error)}>
              <div className="header-content">
                { history.length > 0 && (
                  <button className="btn" onClick={onShowHistory}>
                    <FontAwesomeIcon icon={faHistory} />
                  </button>
                )}
                <InputContainer>
                  <FontAwesomeIcon className="input-icon" icon={faTerminal}/>
                  <input
                    className="search_input"
                    value={cypherText}
                    placeholder="Digite sua consulta"
                    onChange={(e) => setCypherText(e.target.value)}
                  />
                  {cypher && !completed && !error && <Loading size="lg" state={!completed} />}
                </InputContainer>
                <button className="btn" onClick={onRunCypher}>
                  Consultar
                </button>
                <button className="btn" onClick={() => setShowUser(true)}>
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
            </Header>
          </>
        )}
        <Graph id="graph" ref={visRef} className={(error || showUser) && "hidden"}/>
        { showHistory && <QueryModal history={history} setCypherText={setCypherText} onClose={onShowHistory}/> }
      </FullScreen>
    </Container>
  );
};

export default NeoGraph;
