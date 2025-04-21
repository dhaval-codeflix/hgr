import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';
const useCreateAssetTypeItem = () => {
    return useMutation({
        mutationFn: async (name: string) => {
            return await axiosInterceptorInstance.post(API_PATH.superAdmin.assetType.masterAssetType, {
                name: name
            });
        },
    });
};

export default useCreateAssetTypeItem;
