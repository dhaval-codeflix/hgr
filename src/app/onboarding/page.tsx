"use client"
import NextArrowIcon from '@/assets/icons/NextArrowIcon'
import Button from '@/components/form/buttons/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import TypeOfUser from './components/TypeOfUser'
import CurrentRole from './components/CurrentRole'
import TeamSize from './components/TeamSize'
import { cn } from '@/utils/cn'
import HGRUsage from './components/HGRUsage'
import PlatForms from './components/PlatForms'


const OnboardingPage = () => {
    const [activeStep, setActiveStep] = useState<number>(0)
    const steps = [{
        component: <TypeOfUser />,
        image: <Image alt='vector' width={448} height={448} src={'/images/vectors/onboarding/step1.svg'} />
    },
    {
        component: <CurrentRole />,
        image: <Image alt='vector' width={448} height={448} src={'/images/vectors/onboarding/step1.svg'} />
    },
    {
        component: <TeamSize />,
        image: <Image alt='vector' width={678} height={736} src={'/images/vectors/onboarding/team-size.svg'} />
    },
    {
        component: <HGRUsage />,
        image: <Image alt='vector' width={678} height={736} src={'/images/vectors/onboarding/team-size.svg'} />
    },
    {
        component: <PlatForms />,
        image: <Image alt='vector' width={678} height={736} src={'/images/vectors/onboarding/team-size.svg'} />
    },
    ]
    return (
        <div className='flex items-start justify-start overflow-hidden w-screen h-screen'>
            <div className='px-[72px] py-[60px] h-screen overflow-auto w-full flex flex-col justify-between object-center'>
                <div>
                    <div className='space-y-[25px]'>
                        <Image alt='logo' width={138} height={30} src={'/images/logos/main-logo.svg'} />
                        <div className='w-full border-[#EDF0FF] border-[1px] relative flex items-center'>
                            <div className='w-[138px] border-[2px] border-solid-basic-brand-500 absolute'></div>
                        </div>
                    </div>
                    <div className='py-[50px] space-y-[40px]'>
                        {steps[activeStep].component}
                    </div>
                </div>
                <div className='flex justify-between w-full items-center'>
                    <Button
                        onClick={() => {
                            if (activeStep !== 0)
                                setActiveStep(activeStep - 1)
                        }}
                        variant='outline' className='gap-4 w-[180px]'> <NextArrowIcon className='rotate-180' />Back </Button>
                    <Button
                        onClick={() => {
                            if (activeStep !== steps.length - 1)
                                setActiveStep(activeStep + 1)
                        }}
                        className='gap-4 w-[180px]'>Continue <NextArrowIcon /></Button>

                </div>
            </div>
            <div className={cn('w-[575px] shrink-0 bg-[#F4F6FF] h-screen flex justify-center items-center ', activeStep === 2 && 'items-end ')}>
                {steps[activeStep].image}
            </div>
        </div>
    )
}

export default OnboardingPage