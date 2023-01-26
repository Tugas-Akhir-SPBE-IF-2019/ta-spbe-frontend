import { put, call, takeLatest } from "redux-saga/effects";
import { hitApi, payloadGenerator } from "../../config/api";
import { setLoaderState } from "./action";
import { GET_LOADER_STATE } from "./constant";

export function* setLoader(action: any): any {
    const { params } = action;
    yield put(setLoaderState(params));
}

export function* callApi(
    method: string,
    url: string,
    params: any,
    data: any,
    hasLoader: boolean = false,
    showError: boolean = true,
    showMessage: boolean = false
): any {
    let out: any;
    if (hasLoader) yield put(setLoaderState(true));
    // if (authToken) {
        const payload = payloadGenerator(method, url, params, data);
        try {
            const request = yield call(hitApi, payload);
            const { data, headers } = request;
            const contentType = headers["content-type"]
                ? headers["content-type"].split(";")[0]
                : "";
            // if (authKey && contentType === "text/plain") {
            //     const decrypted: any = yield call(
            //         decryptBody,
            //         data,
            //         base64DecodeUrl(authKey)
            //     );
            //     const { status, message, data: decryptedData } = decrypted;
            //     // console.log("response", decrypted);
            //     if (status === 0) {
            //         if (decryptedData) {
            //             out = decryptedData;
            //         } else {
            //             out = decrypted;
            //         }
            //     } else {
            //         if (showError) {
            //             if (status === 999) {
            //                 yield call(showModal, status, MESSAGE_TRY_AGAIN, showMessage);
            //             } else {
            //                 yield call(showModal, status, message, showMessage);
            //             }
            //         }
            //         out = decrypted;
            //     }
            // } else if (
            //     contentType === "application/json" ||
            //     (!authKey && contentType === "text/plain")
            // ) {
            //     const { status, message, data: plainData } = data;
            //     // console.log("response", data);
            //     if (status === 0) {
            //         if (plainData) {
            //             out = plainData;
            //         } else {
            //             out = data;
            //         }
            //     } else {
            //         if (showError) {
            //             if (status === 999) {
            //                 yield call(showModal, status, MESSAGE_TRY_AGAIN, showMessage);
            //             } else {
            //                 yield call(showModal, status, message, showMessage);
            //             }
            //         }
            //         out = data;
            //     }
            // } else {
                out = request;
            // }
        } catch (error: any) {
            /* console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers); */
            const status = error?.response?.status;
            const message = error?.response?.data?.message;
            // if (showError) {
            //     if (url.includes("https://prod-storage.on5.co.id")) {
            //         yield call(
            //             showModal,
            //             status,
            //             "Maaf, file media tidak dapat ditemukan. Silakan minta untuk mengirimkan kembali",
            //             showError
            //         );
            //     } else {
            //         if (status && message) {
            //             yield call(showModal, status, message, showError);
            //         } else {
            //             yield call(showModal, 999, error.message, showError);
            //         }
            //     }
            // }
        }
        if (hasLoader) {
            yield put(setLoaderState(false));
        }
        return out;
    // } else {
    //     yield put(setLoaderState(false));
    //     yield call(showModal, 999, "Unauthorized");
    // }
}

export function* watchAppSaga() {
    yield takeLatest(GET_LOADER_STATE, setLoader);
}
