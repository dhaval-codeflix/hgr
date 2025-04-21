import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';
import { ILoginPayload } from '@/app/auth/auth.interface';
import { deleteCookie, setCookie } from 'cookies-next';

const useLogin = () => {
    return useMutation({
        mutationFn: async (payload: ILoginPayload) => {
            return await axiosInterceptorInstance.post(API_PATH.auth.login, payload, {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
        },
        onSuccess: (response) => {
            const token = response.data.data._token
            setCookie('token', token)
        },
        onError: () => {
            deleteCookie('token')
        },
    });
};

export default useLogin;
