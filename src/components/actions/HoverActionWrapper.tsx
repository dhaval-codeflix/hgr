import React, { FC, useState } from 'react'
import HorizontalThreeDots from '@/assets/icons/HorizontalThreeDots'

import Popover from '@/components/popover/Popover'
import { cn } from '@/utils/cn'
type HoverActionWrapperProps = {
    children: React.ReactNode
}
const HoverActionWrapper: FC<HoverActionWrapperProps> = ({ children }) => {
    const [isActiveAction, setIsActiveAction] = useState<boolean>(false)

    return (
        <Popover onOpenChange={setIsActiveAction} trigger={

            <div className={cn('h-[24px] w-[24px] flex items-center justify-center rounded-[5.6px]', isActiveAction && 'opacity-100 bg-[#00000014]')}>
                <HorizontalThreeDots
                    onClick={() => setIsActiveAction(true)}
                    className={cn('group-hover:opacity-100 opacity-0 ', isActiveAction && 'opacity-100')} />
            </div>
        }>
            {children}
        </Popover>
    )
}

export default HoverActionWrapper