import { cn } from '@/utils/cn'
import React from 'react'

type TableCellProps = {
    children: React.ReactNode,
    className?: string,
    childrenClassName?: string,
    variant?: 'heading' | 'cell' | 'skeleton',
    align?: 'left' | 'center' | 'right'
    hasBorder?: boolean
}
const TableCell: React.FC<TableCellProps> = (props) => {
    const { children, className, variant = 'cell', hasBorder = true, align = 'center', childrenClassName } = props

    return (
        <div className={cn('table-cell min-w-[230px] h-full text-sm align-middle text-solid-basic-neutral-600',
            variant === 'heading' && 'bg-solid-basic-grayBlue-50 font-semibold capitalize border-t-0 border-l-[1px] first:rounded-tl-md first:border-l-0 last:rounded-tr-md',
            variant === 'cell' && 'font-medium border-t border-l first:border-l-0 ',
            variant === 'skeleton' && 'bg-transparent p-0 border-[6px] border-white',
            hasBorder ? ' border-solid-basic-neutral-200' : 'border-transparent',
            className)}>
            <div className={cn('flex items-center text-nowrap w-full h-[40px]',
                align === 'left' ? 'justify-start px-6 ' : align === 'center' ? 'justify-center' : 'justify-end',
                childrenClassName
            )}>
                {children}
            </div>
        </div>
    )
}

export default TableCell
