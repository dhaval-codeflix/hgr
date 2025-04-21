"use client"
import RoundMenuIcon from '@/assets/icons/RoundMenuIcon'
import TabIcon from '@/assets/icons/TabIcon'
import Accordion from '@/components/accordions/BoardAccordion'
import Board from '@/components/boards/Board'
import BoardTab from '@/components/tabs/BoardTab'
import BoardTabLinks from '@/components/tabs/BoardTabLinks'
import React, { useState } from 'react'

const TemplateCenterPage = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [title, setTitle] = useState('Type')

    const tabLinks = [{
        icon: <TabIcon />,
        name: 'Main Tab'
    }]

    return (
        <div className='px-8 py-4 w-full flex flex-col gap-4 h-full overflow-auto'>
            <div className='flex flex-col gap-4 sticky top-0 left-0 bg-white z-10'>
                <div className='flex items-center justify-between'>
                    <p className='py-[10px] text-2xl font-semibold leading-5'>Template Center</p>
                    <div className='space-x-6 flex items-center'>
                        {/* <RoundMenuIcon /> */}
                        <RoundMenuIcon />
                    </div>
                </div>
                <BoardTab
                    activeTabIndex={activeTabIndex}
                    setActiveTabIndex={setActiveTabIndex}
                    tabLinks={tabLinks} />
                <BoardTabLinks />
            </div>
            <Accordion setTitle={setTitle} title={title}>
                <Board />
            </Accordion>
        </div>
    )
}

export default TemplateCenterPage