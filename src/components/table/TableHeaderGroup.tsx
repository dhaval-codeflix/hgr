import { cn } from '@/utils/cn'
import React from 'react'

const TableHeaderGroup: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <div className={cn('table-header-group', className)}>
            {children}
        </div>
    )
}

export default TableHeaderGroup
