import { BASE_URL } from '@/constants/api-paths';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const axiosInterceptorInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("token")
        if (accessToken) {
            if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;