
import { cn } from '@/utils/cn'
import React, { createContext, useState } from 'react'

interface ITableContext {
    updateColumnWidth: (columnIndex: number, width: number) => void;
    setIsResizing: (isResizing: boolean) => void;
    setCurrentResizingColumn: (columnIndex: number | null) => void;
    columnWidths: { [key: number]: number };
}

export const TableContext = createContext<ITableContext>({
    updateColumnWidth: () => {},
    setIsResizing: () => {},
    setCurrentResizingColumn: () => {},
    columnWidths: {},
});

interface ITableProps {
    isSkeleton?: boolean;
    children: React.ReactNode;
    className?: string;
    layout?: 'table-fixed' | 'table-auto';
    resizable?: boolean;
}

const Table: React.FC<ITableProps> = ({ 
    isSkeleton = false, 
    children, 
    className, 
    layout = 'table-auto', 
    resizable = false 
}) => {
    const [isResizing, setIsResizing] = useState(false);
    const [currentResizingColumn, setCurrentResizingColumn] = useState<number | null>(null);
    const [columnWidths, setColumnWidths] = useState<{ [key: number]: number }>({});

    const updateColumnWidth = (columnIndex: number, width: number) => {
        setColumnWidths(prev => ({
            ...prev,
            [columnIndex]: width
        }));
    };

    return (
        <TableContext.Provider value={{ 
            updateColumnWidth, 
            setIsResizing, 
            setCurrentResizingColumn,
            columnWidths 
        }}>
            <div className={cn(
                'table border-separate border-[1px] border-solid-basic-neutral-200 rounded-md overflow-hidden', 
                className, 
                layout, 
                isSkeleton && 'border-transparent',
                isResizing && 'select-none'
            )}>
                {children}
            </div>
        </TableContext.Provider>
    )
}

export default Table
