import { cn } from '@/utils/cn';
import React from 'react'

const ErrorText = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string
}) => {
    return (
        <p className={cn('text-[#FF0000] font-medium text-sm text-left w-full', className)}>{children}</p>
    )
}

export default ErrorText