"use client"
import React, { Fragment, useEffect } from 'react'
import { REGEXP_ONLY_DIGITS } from "input-otp"
import Button from '@/components/form/buttons/Button'
import { InputOTP, InputOTPSlot } from '@/components/shadcn-ui/input-otp'
import { useRouter } from 'next/navigation'
import { ROUTER_PATH } from '@/constants/router-paths'
import { Controller, useForm } from 'react-hook-form'
import ErrorText from '@/components/form/ErrorText'
import useVerifyOtp from '@/api/hooks/mutations/auth/useVerifyOtp'
import { getApiErrorMessage } from '@/utils/api/api-response'

const OTPForm = () => {
    const router = useRouter()
    const verifyOtpMutation = useVerifyOtp()
    const form = useForm({
        defaultValues: {
            email: '',
            otp: ''
        }
    })
    const { formState: { errors, isSubmitting } } = form
    useEffect(() => {
        const storedEmail = localStorage.getItem('email') || '';
        form.reset({ email: storedEmail, otp: '' });
    }, []);

    return (
        <form onSubmit={form.handleSubmit(async (data) => {
            try {
                await verifyOtpMutation.mutateAsync(data, {
                    onSuccess: () => {
                        router.push(ROUTER_PATH.auth.resetPassword)
                    }
                });
            } catch (error) {
                console.error(error);
            }
        })}>
            <Fragment>
                <div className='mt-10 flex items-center justify-center'>
                    <Controller
                        control={form.control}
                        rules={{
                            required: "OTP is required",
                            minLength: {
                                value: 6,
                                message: "OTP must be 6 digits long",
                            },
                            maxLength: {
                                value: 6,
                                message: "OTP must be 6 digits long",
                            }
                        }}
                        name="otp"
                        render={({ field: { onChange, value } }) => (
                            <InputOTP onChange={onChange} value={value} maxLength={6} pattern={REGEXP_ONLY_DIGITS} >
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTP>
                        )}
                    />
                </div>
                <ErrorText className='mt-5 text-center'>{errors.otp?.message || getApiErrorMessage(verifyOtpMutation.error)}</ErrorText>
                <Button disabled={isSubmitting} isLoading={isSubmitting} className='w-full md:w-[440px] mt-10'>Verify</Button>
            </Fragment>
        </form>

    )
}

export default OTPForm