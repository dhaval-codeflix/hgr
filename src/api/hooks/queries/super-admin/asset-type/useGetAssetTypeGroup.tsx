import axiosInterceptorInstance from "@/api/axios-interceptor-instance"
import { API_PATH } from "@/constants/api-paths"
import { useQuery } from "@tanstack/react-query"

const useGetAssetTypeGroup = () => {
    return (
        useQuery({
            queryKey: ['assetTypeGroup'], queryFn: async () => {
                return (await axiosInterceptorInstance.get(API_PATH.superAdmin.assetType.assetTypeGroup))
            }
        })
    )
}

export default useGetAssetTypeGroup