import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export abstract class HttpClient {
    private instance: AxiosInstance;

    constructor(_baseURL: string, _headers: RawAxiosRequestHeaders) {
        this.instance = axios.create({
            baseURL: _baseURL,
            headers: _headers,
        });
    }

    // Generic GET request
    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.get(url, config);
        return response.data;
    }

    // Generic POST request
    async post<I, T>(url: string, data: I, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.post(url, data, config);
        return response.data;
    }

    // Generic PUT request
    async put<I, T>(url: string, data: I, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.put(url, data, config);
        return response.data;
    }

    // Generic DELETE request
    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.delete(url, config);
        return response.data;
    }
}