import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';
const useUpdateAssetTypeBoards = () => {
    return useMutation({
        mutationFn: async ({ id, payload }: {
            id: number,
            payload: { board_id: number[], platform_id: number }
        }) => {
            return await axiosInterceptorInstance.put(API_PATH.superAdmin.assetType.assetTypesBoards + `/${id}`, payload);
        },
    });
};

export default useUpdateAssetTypeBoards;
