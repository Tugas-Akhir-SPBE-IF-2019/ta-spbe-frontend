import { toast } from "react-toastify";

export const getAuthToken = () => {
    const data = localStorage.getItem("AUTH_TOKEN");
    if (data) {
        return data;
    }
    return "";
};

export const getRefreshToken = () => {
    const data = localStorage.getItem("REFRESH_TOKEN");
    if (data) {
        return data;
    }
    return "";
};

export const showToast = (message: string) => {
    toast.error(message);
};