"use client"
import React, { Fragment } from 'react'
import LabelCheckBox from '@/components/form/checkboxs/LabelCheckBox'

const PlatForms = () => {
    return (
        <Fragment>
            <h1 className='text-[32px] font-semibold text-solid-basic-brand-500'>Which other platforms would you like to explore?</h1>
            <div className='flex items-start justify-start flex-wrap gap-10'>
                <LabelCheckBox
                    label='Brokerage' />
                <LabelCheckBox
                    label='Records Platform' />
            </div>
        </Fragment>
    )
}

export default PlatForms