import { useContext, useEffect } from 'react';
import { TableContext } from '@/components/table/Table';

export const useColumnResize = (
  columnIndex: number,
  cellRef: React.RefObject<HTMLDivElement>,
  minWidth: number = 40,
  maxWidth: number = 500
) => {
  const { 
    updateColumnWidth, 
    setIsResizing, 
    setCurrentResizingColumn 
  } = useContext(TableContext);

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Skip if this is not a valid column index
    if (columnIndex < 0) return;
    
    // Set the current resizing state
    setIsResizing(true);
    setCurrentResizingColumn(columnIndex);

    // Starting measurements
    const startX = e.clientX;
    const startWidth = cellRef.current?.offsetWidth || 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cellRef.current) return;

      // Calculate new width
      let newWidth = startWidth + (e.clientX - startX);
      
      // Apply constraints
      newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
      
      // Update cell width directly for immediate feedback
      cellRef.current.style.width = `${newWidth}px`;
      
      // Always update min-width to ensure columns don't collapse
      cellRef.current.style.minWidth = `${minWidth}px`;
      
      // For special columns like checkboxes and icons that have fixed width
      if (minWidth === maxWidth) {
        cellRef.current.style.maxWidth = `${newWidth}px`;
      }
    };

    const handleMouseUp = () => {
      // Clean up
      setIsResizing(false);
      setCurrentResizingColumn(null);
      
      // Store the final width in context
      if (cellRef.current) {
        updateColumnWidth(columnIndex, cellRef.current.offsetWidth);
      }
      
      // Remove event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Clean up event listeners if component unmounts during resize
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mouseup', () => {});
    };
  }, []);

  return { handleResizeStart };
};
