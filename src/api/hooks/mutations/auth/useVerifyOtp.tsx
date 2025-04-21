import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';

const useVerifyOtp = () => {
    return useMutation({
        mutationFn: async (payload: { email: string, otp: string }) => {
            return await axiosInterceptorInstance.post(API_PATH.auth.verifyOtp, payload);
        },
        onSuccess: () => {
        },
        onError: (error) => {
            console.error(error)
        },
    });
};

export default useVerifyOtp;
