import SideBar from '@/components/navigations/SideBar'
import TopBar from '@/components/navigations/TopBar'
import React, { FC } from 'react'

const layout: FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className='w-full h-screen'>
            <TopBar />
            <div className='flex w-full h-[calc(100vh-64px)]'>
                <SideBar />
                {children}
            </div >
        </div>
    )
}

export default layout