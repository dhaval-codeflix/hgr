import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';
const useUpdateAssetTypePlatforms = () => {
    return useMutation({
        mutationFn: async ({ id, payload }: {
            id: number,
            payload: { platform_id: number[] }
        }) => {
            return await axiosInterceptorInstance.put(API_PATH.superAdmin.assetType.assetTypesPlatforms + `/${id}`, payload);
        },
    });
};

export default useUpdateAssetTypePlatforms;
