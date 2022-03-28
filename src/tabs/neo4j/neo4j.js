import React, { useEffect, useState, useRef } from "react";
import NeoVis from "neovis.js/dist/neovis.js";
import Loading from "../../components/Loading";

import "./style.css";

const NeoGraph = () => {
  const visRef = useRef();

  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);

  const [cypherText, setCypherText] = useState("");
  const [cypher, setCypher] = useState(cypherText);

  const onRunCypher = () => setCypher(cypherText);

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

  const handleNeoError = (e) => {
    setError(JSON.stringify(e.error_msg));
  };

  const handleNeoCompleted = () => {
    setCompleted(true);
  };

  return (
    <div className="container">
      <div className="vis-input">
        <label>Query: </label>
        <input
          className="search_input"
          value={cypherText}
          onChange={(e) => setCypherText(e.target.value)}
        />
        <button className="btn" onClick={onRunCypher}>
          Executar
        </button>
      </div>
      {cypher && !completed && !error && <Loading state={!completed} />}
      <h2 id="neo-error" className={!error && "hidden"}>
        {error}
      </h2>
      <div id="graph" className={error && "hidden"} ref={visRef} />
    </div>
  );
};

export default NeoGraph;
