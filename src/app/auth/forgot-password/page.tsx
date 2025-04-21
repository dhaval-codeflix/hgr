import Image from 'next/image'
import React, { Fragment } from 'react'
import ForgotPasswordForm from './components/ForgotPasswordForm'

const ForgotPasswordPage = () => {
    return (
        <Fragment>
            <Image
                src={'/images/logos/main-logo.svg'}
                width={138}
                height={30}
                alt='logo' />
            <p className="text-center text-[#1b2b48] text-[32px] font-semibold mt-[40px]">Forgot Password?</p>
            <p className='w-full sm:w-[400px] mt-4 text-center font-medium text-base text-[#666]'>Enter your registered email address, and we&apos;ll send a
                One-Time Password (OTP) to verify your identity.</p>
            <ForgotPasswordForm />
        </Fragment>
    )
}

export default ForgotPasswordPage