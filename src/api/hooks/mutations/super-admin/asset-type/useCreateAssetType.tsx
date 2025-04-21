import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';
const useCreateAssetType = () => {
    return useMutation({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        mutationFn: async (_i: string) => {
            return await axiosInterceptorInstance.post(API_PATH.superAdmin.assetType.assetTypes);
        },
    });
};

export default useCreateAssetType;
