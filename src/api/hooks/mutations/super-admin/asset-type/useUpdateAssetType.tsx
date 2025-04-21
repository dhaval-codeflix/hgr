import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';
interface IUpdateAssetType {
    master_asset_types_id: number
}
interface IDeleteAssetType {
    is_deleted: number
}
const useUpdateAssetType = () => {
    return useMutation({
        mutationFn: async ({ rowId, payload }: { rowId: number, payload: IUpdateAssetType | IDeleteAssetType }) => {
            return await axiosInterceptorInstance.put(API_PATH.superAdmin.assetType.assetTypes + `/${rowId}`, payload);
        },
    });
};

export default useUpdateAssetType;
