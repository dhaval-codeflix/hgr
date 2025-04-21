import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';

interface IBasicDetailCreateColumn {
    asset_type_id: number,
    master_data_type_id: number,
    column_name: string
}

const useBasicDetailCreateColumn = () => {
    return useMutation({
        mutationFn: async (payload: IBasicDetailCreateColumn) => {
            return await axiosInterceptorInstance.post(API_PATH.superAdmin.assetType.basicDetails.basicDetailColumn, payload);
        },
    });
};

export default useBasicDetailCreateColumn;
