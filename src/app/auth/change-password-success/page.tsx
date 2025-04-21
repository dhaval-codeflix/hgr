import Button from '@/components/form/buttons/Button'
import { ROUTER_PATH } from '@/constants/router-paths'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

const ChangePasswordSuccessPage = () => {
    return (
        <Fragment>
            <Image
                src={'/images/logos/main-logo.svg'}
                width={138}
                height={30}
                alt='logo' />
            <p className="text-center text-[#1b2b48] text-[32px] font-semibold mt-[40px]">Password Changed <br />
                Successfully</p>

            <div className='w-full md:w-[440px]'>
                <div className="mt-[70px] w-full mb-[120px] min-h-[72px] py-5 bg-[#e9fde7] rounded-md border border-[#073003] justify-center items-center inline-flex overflow-hidden">
                    <p className="text-center text-[#073003] text-sm font-medium">Your password has been changed successfully! <br />Click the &apos;Continue&apos; button below to Sign In.</p>
                </div>
                <Link href={ROUTER_PATH.auth.login}><Button>Continue</Button></Link>

            </div>

        </Fragment>
    )
}

export default ChangePasswordSuccessPage