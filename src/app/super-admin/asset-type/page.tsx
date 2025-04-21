"use client"
import RoundMenuIcon from '@/assets/icons/RoundMenuIcon'
import TabIcon from '@/assets/icons/TabIcon'
import BoardTab from '@/components/tabs/BoardTab'
import BoardTabLinks from '@/components/tabs/BoardTabLinks'
import React, { useState } from 'react'
import AssetTypeGroupView from './components/AssetTypeGroupView'

const AssetType = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const tabLinks = [{
        icon: <TabIcon />,
        name: 'Main Tab'
    }]

    return (
        <div className='dashboard-container'>
            <div className='flex flex-col gap-4 sticky top-0 left-0 bg-white z-10'>
                <div className='flex items-center justify-between'>
                    <p className='py-[10px] text-2xl font-semibold leading-5'>Asset Types</p>
                    <div className='space-x-6 flex items-center'>
                        <RoundMenuIcon />
                    </div>
                </div>
                <BoardTab
                    activeTabIndex={activeTabIndex}
                    setActiveTabIndex={setActiveTabIndex}
                    tabLinks={tabLinks} />
                <BoardTabLinks />
            </div>
            <AssetTypeGroupView />
        </div>
    )
}

export default AssetType