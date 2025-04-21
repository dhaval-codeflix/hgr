import React from 'react'
import FilterIcon from '@/assets/icons/FilterIcon'
import SearchIcon from '@/assets/icons/SearchIcon'
import SortIcon from '@/assets/icons/SortIcon'
import EyeCloseIcon from '@/assets/icons/EyeCloseIcon'
import GroupIcon from '@/assets/icons/GroupIcon'
const BoardTabLinks = () => {
    const tabLinks = [
        {
            icon: <SearchIcon />,
            name: 'Search'
        },
        {
            icon: <FilterIcon />,
            name: 'Filter'
        },
        {
            icon: <SortIcon />,
            name: 'Sort'
        },
        {
            icon: <EyeCloseIcon width={16} height={16} className='text-solid-basic-neutral-500' />,
            name: 'Hide'
        },
        {
            icon: <GroupIcon />,
            name: 'Group Type'
        }
    ]
    return (
        <div className='flex items-center gap-1'>
            {
                tabLinks.map((i, index) => (
                    <div className='flex items-center cursor-pointer py-2 px-4 gap-2' key={index}>
                        <div className='shrink-0'>{i.icon}</div>
                        <p className='font-medium leading-[22px] text-sm text-neutral-500'>{i.name}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default BoardTabLinks