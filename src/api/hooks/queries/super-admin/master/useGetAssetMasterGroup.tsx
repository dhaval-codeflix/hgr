import axiosInterceptorInstance from "@/api/axios-interceptor-instance"
import { API_PATH } from "@/constants/api-paths"
import { useQuery } from "@tanstack/react-query"

const useGetAssetMasterGroup = () => {
    return (
        useQuery({
            queryKey: ['assetMaster'], queryFn: async () => {
                return (await axiosInterceptorInstance.get(API_PATH.superAdmin.master.assetMaster))
            }
        })
    )
}

export default useGetAssetMasterGroup