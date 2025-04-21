import axiosInterceptorInstance from "@/api/axios-interceptor-instance"
import { API_PATH } from "@/constants/api-paths"
import { useQuery } from "@tanstack/react-query"

const useGetBasicDetails = (assetTypeId: string) => {
    return (
        useQuery({
            queryKey: ['basicDetails'], queryFn: async () => {
                return (await axiosInterceptorInstance.get(API_PATH.superAdmin.assetType.basicDetails.basicDetail + `/${assetTypeId}`))
            },
            enabled: !!assetTypeId
        })
    )
}

export default useGetBasicDetails