"use client"
import React, { Fragment } from 'react'
import LabelCheckBox from '@/components/form/checkboxs/LabelCheckBox'

const CurrentRole = () => {
    return (
        <Fragment>
            <h1 className='text-[32px] font-semibold text-solid-basic-brand-500'>Hey there, what best describes your current role ?</h1>
            <div className='flex items-start justify-start flex-wrap gap-10'>
                <LabelCheckBox
                    label='Manager' />
                <LabelCheckBox
                    label='Executive (e.g VP or C-Suite)' />
                <LabelCheckBox
                    label='Team Leader' />
                <LabelCheckBox
                    label='Director' />
                <LabelCheckBox
                    label='Business Owner' />
                <LabelCheckBox
                    label='Team Member / Individual Contributor' />
                <LabelCheckBox
                    label='Other' />
            </div>
        </Fragment>
    )
}

export default CurrentRole