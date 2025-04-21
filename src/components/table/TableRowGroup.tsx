import { cn } from '@/utils/cn'
import React from 'react'

const TableRowGroup: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <div className={cn('table-row-group', className)}>
            {children}
        </div>
    )
}

export default TableRowGroup
