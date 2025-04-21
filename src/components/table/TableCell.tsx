import { cn } from '@/utils/cn'
import React, { useContext, useRef, useState } from 'react'
import { TableContext } from './Table'
import { useColumnResize } from '@/hooks/custom/useColumnResize'

type TableCellProps = {
    children: React.ReactNode;
    className?: string;
    childrenClassName?: string;
    variant?: 'heading' | 'cell' | 'skeleton';
    align?: 'left' | 'center' | 'right';
    hasBorder?: boolean;
    columnIndex?: number;
}

const TableCell: React.FC<TableCellProps> = (props) => {
    const { 
        children, 
        className, 
        variant = 'cell', 
        hasBorder = true, 
        align = 'center', 
        childrenClassName,
        columnIndex 
    } = props;

    const cellRef = useRef<HTMLDivElement>(null);
    const { columnWidths, setIsResizing, setCurrentResizingColumn } = useContext(TableContext);

    // State to manage the visibility of the tooltip
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const { handleResizeStart } = useColumnResize(
        columnIndex || -1,
        cellRef,
        10, // Minimum width
        800  // Maximum width
    );

    // Function to show the tooltip
    const showTooltip = () => {
        setTooltipVisible(true);
    };

    // Function to hide the tooltip
    const hideTooltip = () => {
        setTooltipVisible(false);
    };

    return (
        <div 
            ref={cellRef}
            style={columnIndex !== undefined ? { width: columnWidths[columnIndex] || 'auto' } : undefined}
            className={cn('table-cell relative min-w-[40px] h-full text-sm align-middle text-solid-basic-neutral-600 group/cell',
                variant === 'heading' && 'bg-solid-basic-grayBlue-50 font-semibold capitalize border-t-0 border-l-[1px] first:rounded-tl-md first:border-l-0 last:rounded-tr-md hover:bg-solid-basic-grayBlue-100',
                variant === 'cell' && 'font-medium border-t border-l first:border-l-0 group-hover/cell:bg-solid-basic-grayBlue-50/30',
                variant === 'skeleton' && 'bg-transparent p-0 border-[6px] border-white',
                hasBorder ? 'border-solid-basic-neutral-200' : 'border-transparent',
                className
            )}
            data-column-index={columnIndex}
        >
            <div className={cn('flex items-center text-nowrap w-full h-[40px]',
                align === 'left' ? 'justify-start px-6' : align === 'center' ? 'justify-center' : 'justify-end',
                childrenClassName
            )}>
                {children}
            </div>

            {variant === 'heading' && columnIndex !== undefined && (
                <>
                    <div className="absolute inset-0 -z-10 pointer-events-none opacity-0 group-hover/cell:opacity-100 transition-opacity">
                        <div className="absolute top-0 right-0 w-[2px] h-[100vh] bg-blue-500" />
                    </div>
                    <div
                        className="absolute top-0 right-0 w-2 h-full cursor-col-resize hover:bg-blue-500 transition-colors opacity-0 group-hover:opacity-100 z-10"
                        onMouseEnter={showTooltip} // Show tooltip on hover
                        onMouseLeave={hideTooltip} // Hide tooltip when hover ends
                        onMouseDown={handleResizeStart} // Handle the resize start
                    />
                    {/* Tooltip component */}
                    {isTooltipVisible && (
                        <div className="absolute top-0 right-0 p-2 bg-black text-white text-xs rounded-md">
                            Resize Column
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default TableCell;
