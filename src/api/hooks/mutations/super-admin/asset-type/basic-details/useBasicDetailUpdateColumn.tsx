import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';

interface IBasicDetailUpdateColumn {
    id: number | null,
    column_name: string,
}

interface IBasicDetailDeleteColumn {
    id: number | null,
    is_deleted: 1,
}

const useBasicDetailUpdateColumn = () => {
    return useMutation({
        mutationFn: async (payload: IBasicDetailUpdateColumn | IBasicDetailDeleteColumn) => {
            return await axiosInterceptorInstance.put(API_PATH.superAdmin.assetType.basicDetails.basicDetailColumn, payload);
        },
    });
};

export default useBasicDetailUpdateColumn;
