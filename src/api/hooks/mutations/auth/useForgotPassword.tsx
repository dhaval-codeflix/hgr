import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';

const useForgotPassword = () => {
    return useMutation({
        mutationFn: async (payload: { email: string }) => {
            return await axiosInterceptorInstance.post(API_PATH.auth.forgotPassword, payload);
        },
        onSuccess: () => {
        },
        onError: (error) => {
            console.error(error)
        },
    });
};

export default useForgotPassword;
