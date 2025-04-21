import Image from 'next/image'
import React, { Fragment } from 'react'
import ResetPasswordForm from './components/ResetPasswordForm'

const ResetPasswordPage = () => {
    return (
        <Fragment>
            <Image
                src={'/images/logos/main-logo.svg'}
                width={138}
                height={30}
                alt='logo' />
            <p className="text-center text-[#1b2b48] text-[32px] font-semibold mt-[40px]">Reset Password</p>
            <p className='w-full sm:w-[400px] mt-4 text-center font-medium text-base text-[#666]'>Create a new password for your account.
                Ensure it’s strong and secure to keep your account safe.</p>
            <ResetPasswordForm />
        </Fragment>
    )
}

export default ResetPasswordPage