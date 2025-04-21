import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
import { cn } from '@/utils/cn';

const SortableTableCell: React.FC<{ children: React.ReactNode, className?: string, id: string, variant?: 'heading' | 'cell', hasBorder?: boolean }> = ({ children, className, id, variant = 'cell', hasBorder = true }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        // transform,
        transition,
    } = useSortable({ id: id });

    const style = {
        // transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div className={cn('table-cell cursor-grab active:cursor-grabbing  text-sm text-solid-basic-neutral-600 leading-[22px] px-4 py-2 ',
            variant === 'heading' && 'bg-solid-basic-grayBlue-50 font-semibold capitalize',
            variant === 'cell' && 'font-medium',
            hasBorder && 'border-[1px] border-solid-basic-neutral-200',
            className)} ref={setNodeRef} style={style} {...attributes} {...listeners}>

            {children}
        </div>
    );
}

export default SortableTableCell