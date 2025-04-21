"use client"
import RoundMenuIcon from '@/assets/icons/RoundMenuIcon'
import TabIcon from '@/assets/icons/TabIcon'
import BoardTab from '@/components/tabs/BoardTab'
import BoardTabLinks from '@/components/tabs/BoardTabLinks'
import React, { useState } from 'react'
import MasterGroupView from './components/MasterGroupView'
const MasterPage = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const tabLinks = [{
        icon: <TabIcon />,
        name: 'Main Tab'
    },
    {
        icon: <></>,
        name: 'Request'
    }]
    return (
        <div className='dashboard-container px-0'>
            <div className='flex flex-col gap-4 sticky top-0 left-0 bg-white z-10 px-8'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>

                        <p className='py-[10px] text-2xl font-semibold leading-5'>Master</p>
                    </div>
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
            <div className='px-8'>
                <MasterGroupView />
            </div>
        </div>
    )
}

export default MasterPage