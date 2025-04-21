import Image from 'next/image'
import React from 'react'

const layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='w-full h-screen overflow-auto flex justify-start items-start'>
            <div className='w-full lg:w-1/2 h-full flex flex-col items-center justify-start py-20 px-6 overflow-auto'>
                {children}
            </div>
            <div className='hidden lg:flex lg:w-1/2 h-full'>
                <Image
                    src={'/images/vectors/auth-vector.svg'}
                    className='w-full h-full object-contain'
                    width={598}
                    height={895}
                    alt='auth-vector' />
            </div>

        </div>
    )
}

export default layout