import React, { useState } from "react";
import { cn } from "@/utils/cn";
import EyeCloseIcon from "@/assets/icons/EyeCloseIcon";
import EyeOpenIcon from "@/assets/icons/EyeOpenIcon";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    isError?: boolean
    className?: string;
};

const InputField: React.FC<InputProps> = ({ isError = false, type, className = "", ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    return (
        <div className="w-full relative flex items-center">
            <input
                type={showPassword ? 'text' : type}
                {...props}
                className={cn(
                    "relative text-[#666666] text-lg font-medium w-full h-12 px-6 py-3 rounded-[5.8px] border-[#808080] focus:outline-none border-[1.5px] leading-[28.8px]",
                    isError && 'border-[#FF0000]',
                    className
                )}
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6"
                >
                    {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
                </button>
            )}

        </div>
    );
};

export default InputField;
