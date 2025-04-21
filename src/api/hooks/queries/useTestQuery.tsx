
import axiosInterceptorInstance from '@/api/axios-interceptor-instance'
import { API_PATH } from '@/constants/api-paths'
import { useQuery } from '@tanstack/react-query'

const useTestQuery = () => {
    return (
        useQuery({
            queryKey: ['text'], queryFn: async () => {
                return (await axiosInterceptorInstance.get(API_PATH.testQuery))
            }
        })
    )
}

export default useTestQuery