import { useState } from "react"
import { Tabs, Tab } from '../styles/tabs'
import { BigCard } from '../styles/app'

import ActsData, { Acts } from '../tabs/acts/Acts';
import EntitiesData, { Entities } from '../tabs/entities/Entities';
import SearchData, { Search } from '../tabs/search/Search';
import "./simples.css"

export default function TabContainer() {
    const [activeTab, setActiveTab] = useState(0)
    // const tabs = [ActsData, EntitiesData, SearchData, AdvancedSearchData]
    const tabs = [ActsData, EntitiesData, SearchData]

    return (
        <BigCard>
            <Tabs>
                {tabs.map((tab, index) => (
                    <Tab active={ index === activeTab } key={index} onClick={() => setActiveTab(index)}>
                        {tab.title}
                    </Tab>
                ))}
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