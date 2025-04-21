'use client'
import React from 'react'
import Button from '@/components/form/buttons/Button'
import InputField from '@/components/form/inputs/InputField'
import { useForm } from 'react-hook-form'
import { ROUTER_PATH } from '@/constants/router-paths'
import { useRouter } from 'next/navigation'
import useForgotPassword from '@/api/hooks/mutations/auth/useForgotPassword'
import ErrorText from '@/components/form/ErrorText'
import { getApiErrorMessage } from '@/utils/api/api-response'
const ForgotPasswordForm = () => {
    const router = useRouter()
    const forgotPasswordMutation = useForgotPassword()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email: '',
        }
    })
    return (
        <form onSubmit={handleSubmit(async (data) => {
            try {
                await forgotPasswordMutation.mutateAsync(data, {
                    onSuccess: () => {
                        localStorage.setItem('email', data.email)
                        router.push(ROUTER_PATH.auth.otp)
                    }
                })
            } catch (error) {
                console.error(error)
            }
        })} className='mt-[40px] w-full md:w-[440px]  flex flex-col items-center justify-center gap-10'>
            <div className='w-full'>
                <InputField isError={!!errors.email} placeholder='Email' type='email' {...register('email', { required: 'Email is required' })} />
                <ErrorText className='mt-5'>{getApiErrorMessage(forgotPasswordMutation.error)}</ErrorText>
            </div>
            <Button isLoading={isSubmitting} disabled={isSubmitting}>Reset Password</Button>

        </form>
    )
}

export default ForgotPasswordForm