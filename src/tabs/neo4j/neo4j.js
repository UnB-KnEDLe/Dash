
import React, { useEffect, useRef } from "react";
import Neovis from "neovis.js/dist/neovis.js";

const NeoGraph = (props) => {
  const visRef = useRef();

  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: "neo4j://164.41.76.30:8080",
      server_user: "neo4j",
      server_password: "nido@CIC2021",
      initial_cypher:
        "match (p:Pessoa) where p.nome contains('MARIA') return p limit 10",
    };
    const vis = new Neovis(config);
    vis.render();
  }, []);

  return (
    <div
      id={"hehe"}
      ref={visRef}
    />
  );
};

export default NeoGraph;