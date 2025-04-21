import { cn } from '@/utils/cn';
import React, { FC } from 'react'

interface IBoardTab {
    tabLinks: {
        icon: React.JSX.Element;
        name: string;
    }[],
    setActiveTabIndex: (index: number) => void,
    activeTabIndex: number
}

const BoardTab: FC<IBoardTab> = ({ tabLinks, setActiveTabIndex, activeTabIndex }) => {
    return (
        <div className='flex items-center border-b-[0.5px] border-solid-basic-neutral-200'>
            {
                tabLinks.map((i, index) => (
                    <div onClick={() => setActiveTabIndex(index)} className={cn('border-neutral-600 cursor-pointer flex items-center justify-center gap-2 py-2 px-4', activeTabIndex === index && 'border-b-[1px] ')} key={index}>
                        <div className='shrink-0'>{i.icon}</div>
                        <p className={cn('text-sm font-medium leading-[22px]', activeTabIndex === index ? 'text-solid-basic-neutral-600' : 'text-solid-basic-neutral-400')}>{i.name}</p>

                    </div>
                ))
            }
        </div>
    )
}

export default BoardTab