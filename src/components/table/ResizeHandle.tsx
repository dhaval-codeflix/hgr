import { cn } from '@/utils/cn'
import React, { useContext } from 'react';
import { TableContext } from './Table';

interface ResizeHandleProps {
  onResizeStart: (e: React.MouseEvent) => void;
  columnIndex: number;
  isResizing?: boolean;
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({ 
  onResizeStart, 
  columnIndex,
  isResizing = false
}) => {
  const { setHoveredColumnLine } = useContext(TableContext);
  
  // Add a more visible handle to improve usability
  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    onResizeStart(e);
  };
  
  return (
    <div 
      className="absolute top-0 right-0 w-4 h-full cursor-col-resize z-10"
      data-col-index={columnIndex}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setHoveredColumnLine(columnIndex)}
      onMouseLeave={() => setHoveredColumnLine(null)}
    >
      {/* Invisible hit area for better click/drag targeting */}
      <div className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default ResizeHandle;
