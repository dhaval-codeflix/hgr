import React, { FC, useState } from 'react'
import HorizontalThreeDots from '@/assets/icons/HorizontalThreeDots'

import Popover from '@/components/popover/Popover'
import { cn } from '@/utils/cn'
type TableActionWrapper = {
    remove: (val: number) => void
    rowIndex: number
    children: React.ReactNode

}
const TableActionWrapper: FC<TableActionWrapper> = ({ children }) => {
    const [isActiveAction, setIsActiveAction] = useState<boolean>(false)

    return (
        <div className='absolute pr-10 h-[40px] -left-[38px] top-0'>
            <div className="cursor-pointer h-[40px] flex items-center justify-center absolute top-0 left-[9px] "
            >
                <Popover onOpenChange={setIsActiveAction} trigger={<div className={cn('h-[24px] w-[24px] flex items-center justify-center rounded-[5.6px]', isActiveAction && 'opacity-100 bg-[#00000014]')}>
                    <HorizontalThreeDots
                        onClick={() => setIsActiveAction(true)}
                        className={cn('group-hover:opacity-100 opacity-0', isActiveAction && 'opacity-100')} />
                </div>}>
                    {children}
                </Popover>
            </div>
        </div>
    )
}

export default TableActionWrapper