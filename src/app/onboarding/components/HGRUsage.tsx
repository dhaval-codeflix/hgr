"use client"
import React, { Fragment } from 'react'
import LabelCheckBox from '@/components/form/checkboxs/LabelCheckBox'

const HGRUsage = () => {
    return (
        <Fragment>
            <h1 className='text-[32px] font-semibold text-solid-basic-brand-500'>What would you like to use Hangar for?</h1>
            <div className='flex items-start justify-start flex-wrap gap-10'>
                <LabelCheckBox
                    label='Sell Assets' />
                <LabelCheckBox
                    label='Purchase Asset' />
                <LabelCheckBox
                    label='Manage Asset' />
            </div>
        </Fragment>
    )
}

export default HGRUsage