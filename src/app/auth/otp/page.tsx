'use client'
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import OTPForm from './components/OTPForm'

const OTPPage = () => {
    const [email, setEmail] = useState<string>('')
    useEffect(() => {
        setEmail(localStorage.getItem('email') || '')
    }, [])
    return (
        <Fragment>
            <Image
                src={'/images/logos/main-logo.svg'}
                width={138}
                height={30}
                alt='logo' />
            <p className="text-center text-[#1b2b48] text-[32px] font-semibold mt-[40px]">Enter the OTP</p>
            <p className='w-full mt-4 text-center font-medium text-base text-[#666]'>Enter the OTP sent to email address {email}</p>
            <OTPForm />
        </Fragment>
    )
}

export default OTPPage