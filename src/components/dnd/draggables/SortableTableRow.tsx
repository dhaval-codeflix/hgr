import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { cn } from '@/utils/cn';

const SortableTableRow: React.FC<{ children: React.ReactNode, className?: string, id: string, hasBorder?: boolean }> = ({ children, className, id, hasBorder = true }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div className={cn('table-row',
            className,
            hasBorder && 'border-[1px] border-solid-basic-neutral-200')} ref={setNodeRef} style={style} {...attributes} {...listeners}>

            {children}
        </div>
    );
}

export default SortableTableRow