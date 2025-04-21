"use client"
import React, { Fragment } from 'react'
import LabelCheckBox from '@/components/form/checkboxs/LabelCheckBox'

const TeamSize = () => {
    return (
        <Fragment>
            <h1 className='text-[32px] font-semibold text-solid-basic-brand-500'>How many people are on your team?</h1>
            <div className='flex items-start justify-start flex-wrap gap-10'>
                <LabelCheckBox
                    label='Only me' />
                <LabelCheckBox
                    label='02-10' />
                <LabelCheckBox
                    label='11-50' />
                <LabelCheckBox
                    label='51-100' />
                <LabelCheckBox
                    label='101-500' />
                <LabelCheckBox
                    label='500+' />
            </div>
        </Fragment>
    )
}

export default TeamSize