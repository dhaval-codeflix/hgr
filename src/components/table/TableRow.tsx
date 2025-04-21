import { cn } from '@/utils/cn'
import React from 'react'

type TableRowProps = {
    children: React.ReactNode,
    className?: string,
    hasBorder?: boolean,
    isRowSelected?: boolean
}

const TableRow: React.FC<TableRowProps> = ({ children, className, hasBorder = false, isRowSelected = false }) => {
    return (
        <div className={cn('table-row overflow-auto hover:bg-solid-basic-grayBlue-50 hover:shadow-[4px_3px_6px_-3px_rgba(209,213,219,1)]',
            isRowSelected && 'bg-solid-basic-lightBlue-50 shadow-[4px_3px_6px_-3px_rgba(209,213,219,1)] hover:bg-solid-basic-lightBlue-50',
            className,
            hasBorder && 'border-t-[1px] border-solid-basic-neutral-200')}>
            {children}
        </div>
    )
}

export default TableRow
