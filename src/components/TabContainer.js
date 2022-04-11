import { useState } from "react"
import { TabsContainer, Tabs, Tab, TabContent } from '../styles/tabs'

import Search from '../tabs/search/Search';
import Extract from '../tabs/extract/Extract';
import Query from "../tabs/query/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUpload, faTerminal } from "@fortawesome/free-solid-svg-icons";

export default function TabContainer() {
    const [activeTab, setActiveTab] = useState(2)

    return (
        <TabsContainer>
            <Tabs className="tabs">
                <Tab className="extraction" active={0 === activeTab} onClick={() => setActiveTab(0)}>
                    <FontAwesomeIcon icon={faUpload}/> Extração
                </Tab>
                <Tab className="search" active={1 === activeTab} onClick={() => setActiveTab(1)}>
                    <FontAwesomeIcon icon={faSearch}/> Pesquisa
                </Tab>
                <Tab className="search" active={2 === activeTab} onClick={() => setActiveTab(2)}>
                    <FontAwesomeIcon icon={faTerminal}/> Consulta
                </Tab>
            </Tabs>
            <TabContent active={activeTab === 0}>
                <Extract />
            </TabContent>
            <TabContent active={activeTab === 1}>
                <Search />
            </TabContent>
            <TabContent active={activeTab === 2}>
                <Query/>
            </TabContent>
        </TabsContainer>
    );
}