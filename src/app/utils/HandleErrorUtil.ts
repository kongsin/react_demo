import { AxiosError } from "axios"

export const handleError = (error: unknown) => {
    if (error instanceof AxiosError) {
        if (error.response) {
            return `API Error: ${error.response.status} - ${error.response.statusText}`;
        } else if (error.request) {
            return "Network Error: No response received from server.";
        } else {
            return `Axios Error: ${error.message}`;
        }
    } else if (error instanceof Error) {
        return `Code Error: ${error.message}`;
    } else {
        return "Unknown Error Occurred.";
    } return error
}