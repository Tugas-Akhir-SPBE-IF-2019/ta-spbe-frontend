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
    // const key = getAppAuthKey();
    // const token = encryptJWTTokenV2(getAppAuthToken(), key);
    // let extendedBearer = appendSecret(token, key);
    let header = {};
    // if (key != null && key !== "") {
    //     header = {
    //         "Content-Type": "text/plain",
    //         Authorization: `Bearer ${extendedBearer?.token}`,
    //         "X-DGP-nonce": extendedBearer?.nonce,
    //     };
    //     if (data) {
    //         if (url.includes("complaint-handling/update-status")) {
    //             data = data;
    //         } else {
    //             data = encrypt(JSON.stringify(data), base64DecodeUrl(key));
    //         }
    //     }
    // } else {
        header = {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getAppAuthToken()}`,
        };
    // }
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