import React, { FC } from 'react'
import {
    Popover as ShadCnPopover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/shadcn-ui/popover"
import { cn } from '@/utils/cn'


type Popover = {
    trigger: React.ReactNode
    children: React.ReactNode
    triggerClass?: string
    contentClass?: string
    onOpenChange?: (val: boolean) => void
}

const Popover: FC<Popover> = ({
    trigger,
    children,
    triggerClass,
    contentClass,
    onOpenChange
}) => {
    return (
        <ShadCnPopover onOpenChange={(e) => onOpenChange && onOpenChange(e)}>
            <PopoverTrigger className={cn(triggerClass)}>{trigger}</PopoverTrigger>
            <PopoverContent className={cn(contentClass)} align='start'>{children}</PopoverContent>
        </ShadCnPopover>
    )
}

export default Popover