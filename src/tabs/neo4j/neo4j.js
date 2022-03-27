import React, { useEffect, useState, useRef } from "react";
import Neovis from "neovis.js/dist/neovis.js";

import "./style.css"

const NeoGraph = () => {
    const visRef = useRef();
    const [cypherText, setCypherText] = useState("match (p:Pessoa) where p.nome contains('MARIA') return p limit 10");
    const [cypher, setCypher] = useState(cypherText);

    const onRunCypher = () => setCypher(cypherText);

    useEffect(() => {
        const config = {
            container_id: visRef.current.id,
            server_url: "neo4j://164.41.76.30:8080",
            server_user: "neo4j",
            server_password: "nido@CIC2021",
            initial_cypher: cypher,
        };
        const vis = new Neovis(config);
        vis.render();
    }, [cypher]);

    return (
        <div className="container">
            <div className="vis-input">
                <label>Query: </label>
                <input className="search_input" value={cypherText} onChange={(e) => setCypherText(e.target.value)} />
                <button class="btn" onClick={onRunCypher}>Executar</button>
            </div>
            <div id="graph" ref={visRef} />
        </div>
    );
};

export default NeoGraph;