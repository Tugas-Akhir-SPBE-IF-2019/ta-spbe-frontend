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

export const downloadFileAsync = async (data: any) => {
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "");
    link.click();
  };