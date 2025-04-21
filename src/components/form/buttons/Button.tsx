import CircleLoader from "@/components/loaders/CircleLoader";
import { cn } from "@/utils/cn";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    isLoading?: boolean
    variant?: 'primary' | 'outline'
};
const Button: React.FC<ButtonProps> = ({ className = "", isLoading = false, children, variant = 'primary', ...props }) => {
    return (
        <button
            {...props}
            className={cn(
                "h-12 w-full px-6 py-3 shrink-0  font-medium text-lg rounded-[5.6px] flex items-center justify-center disabled:cursor-not-allowed",
                className,
                variant === 'primary' && 'bg-[#132647] text-[#FFFFFF]',
                variant === 'outline' && 'bg-white border-[1px] border-solid-basic-neutral-500'
            )}
        >
            {
                isLoading ? <CircleLoader /> : children
            }
        </button>
    )
}

export default Button
