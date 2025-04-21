"use client"
import React, { Fragment } from 'react'
import LabelCheckBox from '@/components/form/checkboxs/LabelCheckBox'

const TypeOfUser = () => {
    return (
        <Fragment>
            <h1 className='text-[32px] font-semibold text-solid-basic-brand-500'>Hey there, which type of user you are ?</h1>
            <div className='flex items-start justify-start flex-wrap gap-10'>
                <LabelCheckBox
                    label='Airline' />
                <LabelCheckBox
                    label='Lessor' />
                <LabelCheckBox
                    label='Broker' />
                <LabelCheckBox
                    label='MRO' />
                <LabelCheckBox
                    label='Teardown' />
                <LabelCheckBox
                    label='Valuation' />
            </div>
        </Fragment>
    )
}

export default TypeOfUser