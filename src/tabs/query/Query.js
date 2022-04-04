import React, { useEffect, useState, useRef } from "react";
import NeoVis from "neovis.js/dist/neovis.js";
import Loading from "../../components/Loading";

import { Container, InputContainer, Header, Graph } from "../../styles/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faHistory } from "@fortawesome/free-solid-svg-icons";
import QueryModal from "./QueryModal";

const NeoGraph = () => {
  const visRef = useRef();

  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const [cypherText, setCypherText] = useState("");
  const [cypher, setCypher] = useState(cypherText);

  const onRunCypher = () => {
    setCypher(cypherText);
    setHistory([...history, cypherText]);
  }

  const onShowHistory = () => {
    setShowHistory(!showHistory);
  }

  useEffect(() => {
    let vis;

    if (cypher) {
      const config = {
        container_id: visRef.current.id,
        server_url: "neo4j://164.41.76.30:8080",
        server_user: "neo4j",
        server_password: "nido@CIC2021",
        initial_cypher: cypher,
      };

      setError("");
      setCompleted(false);

      vis = new NeoVis(config);
      vis.render();
      vis.registerOnEvent("error", handleNeoError);
      vis.registerOnEvent("completed", handleNeoCompleted);
    }
  }, [cypher]);

  const handleNeoError = (e) => setError(JSON.stringify(e.error_msg));
  const handleNeoCompleted = () => setCompleted(true);

  return (
    <Container>
      <Header showHistoryBtn={history.length}>
        { history.length > 0 && (
          <button className="btn" onClick={onShowHistory}>
            <FontAwesomeIcon icon={faHistory} />
          </button>
        )}
        <InputContainer>
          <FontAwesomeIcon className="input-icon" icon={faGreaterThan}/>
          <input
            className="search_input"
            value={cypherText}
            placeholder="Digite o comando Cypher aqui"
            onChange={(e) => setCypherText(e.target.value)}
          />
          {cypher && !completed && !error && <Loading size="lg" state={!completed} />}
        </InputContainer>
        <button className="btn" onClick={onRunCypher}>
          Consultar
        </button>
      </Header>
      { error && (
        <h2 id="neo-error" className={!error && "hidden"}>
          {error}
        </h2> 
      )}
      { !error && <Graph id="graph" ref={visRef} />}
      { showHistory && <QueryModal history={history} setCypher={setCypher} onClose={onShowHistory}/> }
    </Container>
  );
};

export default NeoGraph;
