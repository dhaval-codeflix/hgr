import Image from 'next/image'
import React, { Fragment } from 'react'
import LoginForm from './components/LoginForm'

const LoginPage = () => {
    return (
        <Fragment>
            <Image
                src={'/images/logos/main-logo.svg'}
                width={138}
                height={30}
                alt='logo' />
            <p className="text-center text-[#1b2b48] text-[32px] font-semibold mt-[40px]">Welcome to Hanger</p>
            <LoginForm />
        </Fragment>
    )
}

export default LoginPage