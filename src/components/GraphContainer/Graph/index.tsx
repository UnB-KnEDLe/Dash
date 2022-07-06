import { useLayoutEffect, useRef } from "react";
import { Flex } from '@chakra-ui/react';
import NeoVis, { NEOVIS_DEFAULT_CONFIG, NeoVisEvents } from "neovis.js";

interface GraphProps {
  username?: string;
  password?: string;
  cypher: string;
}

function Graph({ username, password, cypher} : GraphProps) {
  const visRef = useRef<HTMLDivElement>();

  const handleCompleted = (vis: any) => {
    console.log(vis.nodes);
  }
  useLayoutEffect(() => {
    if (cypher) {
      const config = {
        containerId: visRef?.current?.id,
        neo4j: {
          serverUser: "neo4j",
          serverPassword: "nido@CIC2021",
          serverUrl: "neo4j://164.41.76.30:8080"
        },
        initialCypher: "match (a) return a limit 10",
        [NEOVIS_DEFAULT_CONFIG]: {
          title: 'nome'
        }
      }
      
      let vis = new NeoVis(config);
      vis.render();
      vis.registerOnEvent(NeoVisEvents.ClickNodeEvent, () => handleCompleted(vis))
    }
  }, [cypher]);

  return (
    <Flex ref={visRef} id="viz" w="100%"></Flex>
  )
}

export default Graph;