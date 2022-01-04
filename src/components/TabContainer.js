import { useState } from "react"
import { Tabs, Tab } from '../styles/tabs'
import { BigCard } from '../styles/app'

import Acts from '../tabs/acts/Acts';
import Entities from '../tabs/entities/Entities';
import Search from '../tabs/search/Search';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faSearch, faTable } from "@fortawesome/free-solid-svg-icons";

export default function TabContainer() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <BigCard>
            <Tabs>
                <Tab active={0 === activeTab} onClick={() => setActiveTab(0)}>
                    <FontAwesomeIcon icon={faAlignJustify}/> Extrair Atos
                </Tab>
                <Tab active={1 === activeTab} onClick={() => setActiveTab(1)}>
                    <FontAwesomeIcon icon={faTable}/> Extrair Entidades
                </Tab>
                <Tab active={2 === activeTab} onClick={() => setActiveTab(2)}>
                    <FontAwesomeIcon icon={faSearch}/> Pesquisar
                </Tab>
            </Tabs>            
            <div className={activeTab !== 0 ? "hidden" : ""} >
                <Acts />
            </div>
            <div className={activeTab !== 1 ? "hidden" : ""}>
                <Entities />
            </div>
            <div className={activeTab !== 2 ? "hidden" : ""} >
                <Search />
            </div>
        </BigCard>
    );
}