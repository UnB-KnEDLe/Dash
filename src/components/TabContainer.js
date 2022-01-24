import { useState } from "react"
import { Tabs, Tab } from '../styles/tabs'
import { BigCard } from '../styles/app'

import Search from '../tabs/search/Search';
import Extract from '../tabs/extract/Extract';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUpload } from "@fortawesome/free-solid-svg-icons";

export default function TabContainer() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <BigCard style={{overflowX: 'hidden'}}>
            <Tabs className="tabs">
                <Tab className="extraction" active={0 === activeTab} onClick={() => setActiveTab(0)}>
                    <FontAwesomeIcon icon={faUpload}/> Extração
                </Tab>
                <Tab className="search" active={1 === activeTab} onClick={() => setActiveTab(1)}>
                    <FontAwesomeIcon icon={faSearch}/> Pesquisa
                </Tab>
            </Tabs>
            <div className={activeTab !== 0 ? "hidden" : ""} >
                <Extract />
            </div>
            <div className={activeTab !== 1 ? "hidden" : ""} >
                <Search />
            </div>
        </BigCard>
    );
}