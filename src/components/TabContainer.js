import { useState } from "react"
import { TabsContainer, Tabs, Tab } from '../styles/tabs'

import Search from '../tabs/search/Search';
import Extract from '../tabs/extract/Extract';
import Query from "../tabs/query/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUpload, faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function TabContainer() {
    const [activeTab, setActiveTab] = useState(0)

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
                    <FontAwesomeIcon icon={faDatabase}/> Consulta
                </Tab>
            </Tabs>
            { activeTab === 0 && <Extract /> }
            { activeTab === 1 && <Search /> }
            { activeTab === 2 && <Query/> }
        </TabsContainer>
    );
}