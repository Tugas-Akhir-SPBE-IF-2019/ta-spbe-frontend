import axios from "axios";
import { getAuthToken, getRefreshToken } from "../utils/general";

let CANCEL_TOKEN_SOURCE = axios.CancelToken.source();

const cancelAxiosRequest = () => {
    CANCEL_TOKEN_SOURCE.cancel();
    CANCEL_TOKEN_SOURCE = axios.CancelToken.source();
};

const getApiUrl = () => {
    const url = process.env.REACT_APP_API_URL;
    return url;
};

export const hitApi = (parameters: any) => {
    const { method, url, headers, params, data, responseType } = parameters;
    const timeout = setTimeout(() => {
        cancelAxiosRequest();
    }, 30000);
    return axios({
        method: method,
        url: url,
        headers,
        params: params,
        data: data,
        responseType: responseType,
        cancelToken: CANCEL_TOKEN_SOURCE.token,
    }).then((res) => {
        clearTimeout(timeout);
        return res;
    });
};

export const payloadGenerator = (
    method: string,
    url: string,
    params: any,
    data: any,
) => {
    let header = {};
    if (method === "POST") {
        if (url.includes("/auth/google/validate")) {
            header = {
                "Content-Type": "application/json",
            };
        }
        else if (url.includes("/users")) {
            header = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getAuthToken()}`,
            };
        }
        else {
            header = {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${getAuthToken()}`,
            };
        }
    }
    else if (method === "PUT") {
        header = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getAuthToken()}`,
        };
    }
    else {
        header = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAuthToken()}`,
        };
    }
    let payload = {};
    if (url.includes("download")) {
        payload = {
            method: method ? method : undefined,
            url: url ? url : undefined,
            headers: {
                ...header,
            },
            params,
            data,
            responseType: "blob",
        };
    }
    else {
        payload = {
            method: method ? method : undefined,
            url: url ? url : undefined,
            headers: {
                ...header,
            },
            params,
            data,
        };
    }
    return payload;
};

export const ASSESSMENT_URL = `${getApiUrl()}/assessments`;
export const ASSESSMENT_INDEX_URL = `${ASSESSMENT_URL}/index`;
export const ASSESSMENT_UPLOAD_URL = `${ASSESSMENT_URL}/documents/upload`;
export const LOGIN_URL = `${getApiUrl()}/auth/google/validate`;
export const PROFILE_URL = `${getApiUrl()}/users`;
export const BIODATA_URL = `${PROFILE_URL}/profile`;
export const EVALUATION_DATA_URL = `${PROFILE_URL}/evaluation`;
export const JOB_DATA_URL = `${PROFILE_URL}/job`;
export const INSTITUTION_DATA_URL = `${PROFILE_URL}/institution`;
export const INSTITUTION_LIST_URL = `${getApiUrl()}/institutions`;