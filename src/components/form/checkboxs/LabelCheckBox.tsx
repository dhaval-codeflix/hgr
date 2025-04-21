import TrueSignIcon from '@/assets/icons/TrueSignIcon'
import { cn } from '@/utils/cn'
import React, { FC, useEffect, useState } from 'react'

interface LabelCheckBoxProps {
    className?: string
    disabled?: boolean
    onClick?: () => void
    isCheckBoxChecked?: boolean
    label: string
}

const LabelCheckBox: FC<LabelCheckBoxProps> = ({ className = '', disabled = false, onClick, isCheckBoxChecked = false, label }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    useEffect(() => {
        setIsChecked(isCheckBoxChecked)
    }, [isCheckBoxChecked])
    return (
        <div onClick={() => {
            if (!disabled) {
                if (onClick) {
                    onClick()
                }
                setIsChecked(!isChecked)
            }
        }} className='p-3 space-x-4 cursor-pointer flex select-none items-center border-[1.5px] min-w-[208px] max-w-fit shrink-0 border-solid-basic-brand-500 rounded-[5.6px]'>
            <div className='flex items-center'>
                <div
                    className={
                        cn('cursor-pointer border-transparent border-[1px] flex items-center justify-center w-5 h-5 shrink-0 rounded-[2.8px]',
                            isChecked ? 'bg-solid-basic-brand-500' : 'border-solid-basic-neutral-600',
                            disabled && 'cursor-not-allowed',
                            className)
                    }>
                    {
                        isChecked &&
                        <TrueSignIcon />
                    }
                </div>
            </div>
            <p className='text-solid-basic-brand-500 text-[20px] font-normal capitalize'>{label}</p>
        </div>
    )
}

export default LabelCheckBox