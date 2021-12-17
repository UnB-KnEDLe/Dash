import { useState } from "react"
import { Tabs, Tab } from '../styles/tabs'
import { BigCard } from '../styles/app'

import ActsData, { Acts } from '../tabs/acts/Acts';
import EntitiesData, { Entities } from '../tabs/entities/Entities';
import SearchData, { Search } from '../tabs/search/Search';
// import AdvancedSearchData, { AdvancedSearch } from "../tabs/advancedSearch/AdvancedSearch";

export default function TabContainer(props) {
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
            { activeTab === 0 && (
                <Acts />
            ) }
            { activeTab === 1 && (
                <Entities />
            ) }
            { activeTab === 2 && (
                <Search />
            ) }
            {/* { activeTab === 3 && (
                <AdvancedSearch />
            ) } */}
        </BigCard>
    );
}