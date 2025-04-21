'use client'
import DownArrowIcon from '@/assets/icons/DownArrowIcon'
import Image from 'next/image'
import React from 'react'
import Popover from '../popover/Popover'
import { PopoverClose } from '@radix-ui/react-popover'
import { deleteCookie } from 'cookies-next/client'
import { redirect } from 'next/navigation'
import { ROUTER_PATH } from '@/constants/router-paths'

const TopBar = () => {
    return (
        <div className='h-14 shrink-0 bg-solid-basic-brand-500 px-6 flex items-center w-full justify-between top-0'>
            <div className='flex items-center gap-[10px]'>
                {/* <Image src={'/images/Menu.svg'} width={21} height={21} alt='menu' /> */}
                <Image src={'/images/logos/main-logo-white.svg'} width={138} height={30} alt='logo' />
                <p className='text-base font-extrabold text-white'></p>
            </div>
            <Popover
                contentClass='min-w-[155px] w-full'
                trigger={<div className='h-8 bg-white rounded-[5.6px] flex items-center justify-between'>
                    <div className='flex items-center gap-2 px-2 cursor-pointer'>
                        <p className='text-sm font-normal text-solid-basic-neutral-800'>Super Admin</p>
                        <DownArrowIcon />
                    </div>
                    <Image src={'/images/admin.png'} alt='admin' width={32} height={32} />
                </div>}>
                <div className='popover-item'>
                    <PopoverClose
                        onClick={() => {
                            deleteCookie('token')
                            redirect(ROUTER_PATH.auth.login)
                        }}
                        className="popover-item-close">
                        Logout
                    </PopoverClose>
                </div>

            </Popover>

        </div>
    )
}

export default TopBar