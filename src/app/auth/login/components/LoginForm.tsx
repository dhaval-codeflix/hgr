'use client'
import React from 'react'
import Button from '@/components/form/buttons/Button'
import InputField from '@/components/form/inputs/InputField'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { ROUTER_PATH } from '@/constants/router-paths'
import useLogin from '@/api/hooks/mutations/auth/useLogin'
import { getApiErrorMessage } from '@/utils/api/api-response'
import ErrorText from '@/components/form/ErrorText'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const loginMutation = useLogin()
    const router = useRouter()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email_phone: '',
            password: ''
        }
    })
    return (
        <form onSubmit={handleSubmit(async (data) => {
            try {
                await loginMutation.mutateAsync(data, {
                    onSuccess: () => {
                        router.push(ROUTER_PATH.superAdmin.dashboard.path)
                    }
                });
            } catch (error) {
                console.error(error);
            }
        })} className='mt-[40px] w-full md:w-[440px]  flex flex-col items-center justify-center gap-10'>
            <InputField isError={!!errors.email_phone} placeholder='Email' type='email' {...register('email_phone', { required: 'Email is required' })} />
            <InputField isError={!!errors.password} placeholder='Password' type='password' {...register('password', { required: 'Password is required' })} />
            <div className='flex md:flex-row flex-col md:items-center md:gap-0 items-start gap-4 justify-between w-full'>
                <ErrorText>{getApiErrorMessage(loginMutation.error)}</ErrorText>
                <Link className='text-sm font-medium shrink-0' href={ROUTER_PATH.auth.forgotPassword}>Forgot password?</Link>
            </div>
            <Button isLoading={isSubmitting} disabled={isSubmitting}>Sign In</Button>
        </form>
    )
}

export default LoginForm