import TrueSignIcon from '@/assets/icons/TrueSignIcon'
import { cn } from '@/utils/cn'
import React, { FC, useEffect, useState } from 'react'

interface CheckBoxProps {
    className?: string
    disabled?: boolean
    onClick?: () => void
    isCheckBoxChecked?: boolean
}

const CheckBox: FC<CheckBoxProps> = ({ className = '', disabled = false, onClick, isCheckBoxChecked = false }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    useEffect(() => {
        setIsChecked(isCheckBoxChecked)
    }, [isCheckBoxChecked])
    return (
        <div className='flex items-center'>
            <div
                onClick={() => {
                    if (!disabled) {
                        if (onClick) {
                            onClick()
                        }
                        setIsChecked(!isChecked)
                    }
                }}
                className={
                    cn('cursor-pointer hover:border-solid-basic-neutral-400 border-[1px] flex items-center justify-center w-4 h-4 shrink-0 rounded-[2.8px]',
                        isChecked ? 'bg-solid-basic-brand-500' : 'border-solid-basic-neutral-200',
                        disabled && 'cursor-not-allowed',
                        className)
                }>
                {
                    isChecked &&
                    <TrueSignIcon />
                }
            </div>
        </div>

    )
}

export default CheckBox