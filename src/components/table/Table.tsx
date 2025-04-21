import { cn } from '@/utils/cn'
import React, { createContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'table_column_widths';

interface TableContextType {
  columnWidths: Record<number, number>;
  updateColumnWidth: (columnIndex: number, width: number) => void;
  isResizing: boolean;
  setIsResizing: (value: boolean) => void;
  currentResizingColumn: number | null;
  setCurrentResizingColumn: (index: number | null) => void;
  hoveredColumnLine: number | null;
  setHoveredColumnLine: (index: number | null) => void;
}

export const TableContext = createContext<TableContextType>({
  columnWidths: {},
  updateColumnWidth: () => {},
  isResizing: false,
  setIsResizing: () => {},
  currentResizingColumn: null,
  setCurrentResizingColumn: () => {},
  hoveredColumnLine: null,
  setHoveredColumnLine: () => {},
});

interface ITableProps {
  isSkeleton?: boolean;
  children: React.ReactNode;
  className?: string;
  layout?: 'table-fixed' | 'table-auto';
  tableId?: string;
}

const loadColumnWidths = (tableId: string): Record<number, number> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const saved = localStorage.getItem(`${STORAGE_KEY}_${tableId}`);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Failed to load column widths from localStorage', error);
    return {};
  }
};

const saveColumnWidths = (tableId: string, widths: Record<number, number>): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(`${STORAGE_KEY}_${tableId}`, JSON.stringify(widths));
  } catch (error) {
    console.error('Failed to save column widths to localStorage', error);
  }
};

const Table: React.FC<ITableProps> = ({ 
  isSkeleton = false, 
  children, 
  className, 
  layout = 'table-auto',
  tableId = 'default_table' 
}) => {
  const [columnWidths, setColumnWidths] = useState<Record<number, number>>({});
  const [isResizing, setIsResizing] = useState(false);
  const [currentResizingColumn, setCurrentResizingColumn] = useState<number | null>(null);
  const [hoveredColumnLine, setHoveredColumnLine] = useState<number | null>(null);

  // Load saved column widths on component mount
  useEffect(() => {
    setColumnWidths(loadColumnWidths(tableId));
  }, [tableId]);

  // Save column widths when they change
  useEffect(() => {
    if (Object.keys(columnWidths).length > 0) {
      saveColumnWidths(tableId, columnWidths);
    }
  }, [columnWidths, tableId]);

  const updateColumnWidth = (columnIndex: number, width: number) => {
    setColumnWidths(prev => ({
      ...prev,
      [columnIndex]: width
    }));
  };

  // Add an overlay when resizing to capture mouse events better
  useEffect(() => {
    if (isResizing) {
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 z-50 cursor-col-resize';
      document.body.appendChild(overlay);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      
      return () => {
        document.body.removeChild(overlay);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };
    }
  }, [isResizing]);

  // Apply column highlighting CSS based on current resizing or hover state
  useEffect(() => {
    if (!tableId) return;
    
    const tableElement = document.getElementById(tableId);
    if (!tableElement) return;
    
    // Remove any existing highlight styles
    const existingStyles = document.getElementById(`${tableId}-column-styles`);
    if (existingStyles) {
      existingStyles.remove();
    }
    
    // If we have a column to highlight (either from resizing or hovering)
    const highlightColumn = currentResizingColumn !== null ? currentResizingColumn : hoveredColumnLine;
    if (highlightColumn !== null) {
      const styleEl = document.createElement('style');
      styleEl.id = `${tableId}-column-styles`;
      
      // Target all cells with the matching column index
      const color = currentResizingColumn !== null ? 'rgb(59, 130, 246)' : 'rgb(59, 130, 246)';
      const width = currentResizingColumn !== null ? '2px' : '1px';
      
      styleEl.innerHTML = `
        #${tableId} [data-col-index="${highlightColumn}"] {
          border-right-color: ${color} !important;
          border-right-width: ${width} !important;
        }
      `;
      
      document.head.appendChild(styleEl);
    }
    
    return () => {
      // Clean up on unmount or when dependencies change
      const style = document.getElementById(`${tableId}-column-styles`);
      if (style) {
        style.remove();
      }
    };
  }, [tableId, currentResizingColumn, hoveredColumnLine]);

  return (
    <TableContext.Provider value={{ 
      columnWidths, 
      updateColumnWidth, 
      isResizing, 
      setIsResizing,
      currentResizingColumn,
      setCurrentResizingColumn,
      hoveredColumnLine,
      setHoveredColumnLine
    }}>
      <div 
        className={cn('table border-separate border-[1px] border-solid-basic-neutral-200 rounded-md', className, layout, isSkeleton && 'border-transparent')}
        id={tableId}
      >
        {children}
      </div>
    </TableContext.Provider>
  );
};

export default Table;
