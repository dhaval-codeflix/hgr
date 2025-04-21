"use client"
import BackArrowIcon from '@/assets/icons/BackArrowIcon'
import RoundMenuIcon from '@/assets/icons/RoundMenuIcon'
import TabIcon from '@/assets/icons/TabIcon'
import BoardTab from '@/components/tabs/BoardTab'
import BoardTabLinks from '@/components/tabs/BoardTabLinks'
import { ROUTER_PATH } from '@/constants/router-paths'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import BasicDetailsGroupView from '../components/BasicDetailsGroupView'

const BasicDetailsPage = ({
    params: paramsPromise
}: {
    params: Promise<{ slug: string[] }>
}) => {
    const router = useRouter()
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const params = React.use(paramsPromise)
    return (
        <div className='dashboard-container'>
            <div className='flex flex-col gap-4 sticky top-0 left-0 bg-white z-10'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <BackArrowIcon className='cursor-pointer' onClick={() => {
                            router.push(ROUTER_PATH.superAdmin.assetType.path)
                        }} />
                        <p className='py-[10px] text-2xl font-semibold leading-5'>Basic Details</p>
                    </div>
                    <div className='space-x-6 flex items-center'>
                        <RoundMenuIcon />
                    </div>
                </div>
                <BoardTab
                    activeTabIndex={activeTabIndex}
                    setActiveTabIndex={setActiveTabIndex}
                    tabLinks={[{ icon: <TabIcon />, name: 'Main Tab' }]} />
                <BoardTabLinks />
            </div>
            <BasicDetailsGroupView
                assetTypeId={params.slug[0]}
            />
        </div>
    )
}

export default BasicDetailsPage
