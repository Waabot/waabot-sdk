import axios from 'axios';
import { ENDPOINT } from '../constant/default';

/**
 * Axios Instance
 */
export const axiosInstance = axios.create({
    baseURL: ENDPOINT,
    timeout: 4000,
    headers: {}
})
// axiosInstance.interceptors.response.use((res: AxiosResponse<any, any>) => {
//     res.data
// })

/**
 * Send Request
 * @param path 
 * @param method 
 * @param data 
 * @returns 
 */
export const sendRequest = async (path: string, method: 'post' | 'get', data: any = {}) => {
    try {
        return method === 'post' ? axiosInstance.post(path, data) : axios.get(path, { params: data })
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message)
        }
        throw error;
    }
}