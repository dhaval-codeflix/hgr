import axiosInterceptorInstance from '@/api/axios-interceptor-instance';
import { useMutation } from '@tanstack/react-query';
import { API_PATH } from '@/constants/api-paths';

interface ITakeActionsProps {
    row_id: number[]
    action: 'delete'
}
const useTakeActions = () => {
    // const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: ITakeActionsProps) => {
            return await axiosInterceptorInstance.put(API_PATH.superAdmin.assetType.actions, payload);
        },
        onSuccess: () => {
            // queryClient.invalidateQueries({ queryKey: ['assetTypeGroup'] })
        }
    });
};

export default useTakeActions;
