import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';
import { UpdatePayload } from '@/components/form/combobox/SingleSelectComboBox';
const useUpdateAssetTypeList = () => {
    return useMutation({
        mutationFn: async ({ payload }: {
            payload: UpdatePayload
        }) => {
            return await axiosInterceptorInstance.put(API_PATH.superAdmin.assetType.masterAssetType, {
                update_list: payload
            });
        },
    });
};

export default useUpdateAssetTypeList;
