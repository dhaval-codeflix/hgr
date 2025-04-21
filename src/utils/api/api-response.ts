import { IApiError } from "@/api/interfaces/common.interface";
import { AxiosError } from "axios";

export const getApiErrorMessage = (error: Error | null): string => {
    if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<IApiError>;
        return axiosError.response?.data?.message || "Unknown error occurred";
    }
    return "";
};
