'use client'
import React, { useEffect } from 'react'
import Button from '@/components/form/buttons/Button'
import InputField from '@/components/form/inputs/InputField'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { ROUTER_PATH } from '@/constants/router-paths'
import useResetPassword from '@/api/hooks/mutations/auth/useResetPassword'
import { IResetPassword } from '../../auth.interface'
import ErrorText from '@/components/form/ErrorText'
import { getApiErrorMessage } from '@/utils/api/api-response'
const ResetPasswordForm = () => {
    const router = useRouter()
    const resetPasswordMutation = useResetPassword()
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm<IResetPassword>({
        defaultValues: {
            password: '',
            password_confirmation: '',
            email: ''
        }
    })
    useEffect(() => {
        const storedEmail = localStorage.getItem('email') || '';
        reset({
            email: storedEmail,
            password: '',
            password_confirmation: '',
        });
    }, []);
    const password = watch('password')
    return (
        <form onSubmit={handleSubmit(async (data) => {
            try {
                await resetPasswordMutation.mutateAsync(data, {
                    onSuccess: () => {
                        localStorage.removeItem('email')
                        router.push(ROUTER_PATH.auth.changePasswordSuccess)
                    }
                })
            } catch (error) {
                console.error(error)
            }
        })} className='mt-[40px] w-full md:w-[440px]  flex flex-col items-center justify-center gap-10'>
            <InputField isError={!!errors.password} placeholder='Enter New Password' type='password' {...register('password', { required: 'Password is required' })} />
            <InputField isError={!!errors.password_confirmation} placeholder='Confirm New Password' type='password' {...register('password_confirmation', {
                required: 'Password is required',
                validate: value => value === password || 'Passwords do not match'
            })}
            />
            <ErrorText>{getApiErrorMessage(resetPasswordMutation.error)}</ErrorText>
            <Button disabled={isSubmitting} isLoading={isSubmitting}>Change Password</Button>
        </form>
    )
}

export default ResetPasswordForm