import axios from "axios";

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
    const { method, url, headers, params, data } = parameters;
    const timeout = setTimeout(() => {
        cancelAxiosRequest();
    }, 30000);
    return axios({
        method: method,
        url: url,
        headers,
        params: params,
        data: data,
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
        header = {
            "Content-Type": "multipart/form-data",
        };
    }
    else {
        header = {
            "Content-Type": "application/json",
        };
    }
    const payload = {
        method: method ? method : undefined,
        url: url ? url : undefined,
        headers: {
            ...header,
        },
        params,
        data,
    };
    return payload;
};

export const ASSESSMENT_URL = `${getApiUrl()}/assessments`;
export const ASSESSMENT_INDEX_URL = `${ASSESSMENT_URL}/index`;
export const ASSESSMENT_UPLOAD_URL = `${ASSESSMENT_URL}/documents/upload`;