import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';
import { IResetPassword } from '@/app/auth/auth.interface';

const useResetPassword = () => {
    return useMutation({
        mutationFn: async (payload: IResetPassword) => {
            return await axiosInterceptorInstance.post(API_PATH.auth.resetPassword, payload);
        },
        onSuccess: () => {
        },
        onError: (error) => {
            console.error(error)
        },
    });
};

export default useResetPassword;
