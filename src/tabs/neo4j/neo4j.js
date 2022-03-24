import { useReadCypher } from "use-neo4j";
import { useEffect, useRef } from "react";
import NeoVis from "neovis.js";

export default function Neo4j() {
    const vizRef = useRef();
    const query = `match (p:Pessoa) where p.nome contains('MARIA') return p limit 10`
    const { loading, error, records, first } = useReadCypher(query);

    const HOST="164.41.76.30"
    const PORT=8080
    const USER="neo4j"
    const PASSWORD="nido@CIC2021"
    // const VERSION=4
    const DATABASE="neo4j"

    useEffect(() => {
        const config = {
            container_id: vizRef.current.id,
            server_url: "neo4j://"+HOST+":"+PORT,
            server_user: USER,
            server_password: PASSWORD,
            server_scheme: DATABASE,
            labels: {
                Troll: {
                    caption: "user_key",
                    size: "pagerank",
                    community: "community",
                },
            },
            relationships: {
                RETWEETS: {
                    caption: false,
                    thickness: "count",
                },
            },
            initial_cypher: query
        };
        const vis = new NeoVis(config);
        vis.render();
    })
    

    if(!error) console.log(error)


    return (
        <div>
            <div ref={vizRef}/>
        </div>
    );
}

// function drawGraph() {
//     var viz;

//     viz = new NeoVis.default(config);
//     viz.render();
// }