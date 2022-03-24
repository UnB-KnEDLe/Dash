import { useState } from "react"
import { Tabs, Tab } from '../styles/tabs'
import { Container } from '../styles/app'

import Search from '../tabs/search/Search';
import Extract from '../tabs/extract/Extract';
import NeoGraph from "../tabs/neo4j/neo4j";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUpload, faHatCowboySide } from "@fortawesome/free-solid-svg-icons";

export default function TabContainer() {
    const [activeTab, setActiveTab] = useState(2)

    return (
        <Container style={{overflowX: 'hidden'}}>
            <Tabs className="tabs">
                <Tab className="extraction" active={0 === activeTab} onClick={() => setActiveTab(0)}>
                    <FontAwesomeIcon icon={faUpload}/> Extração
                </Tab>
                <Tab className="search" active={1 === activeTab} onClick={() => setActiveTab(1)}>
                    <FontAwesomeIcon icon={faSearch}/> Pesquisa
                </Tab>
                <Tab className="search" active={2 === activeTab} onClick={() => setActiveTab(2)}>
                    <FontAwesomeIcon icon={faHatCowboySide}/> Neo4J
                </Tab>
            </Tabs>
            <div className={activeTab !== 0 ? "hidden" : ""} >
                <Extract />
            </div>
            <div className={activeTab !== 1 ? "hidden" : ""} >
                <Search />
            </div>
            <div className={activeTab !== 2 ? "hidden" : ""} >
                <NeoGraph/>
            </div>
        </Container>
    );
}