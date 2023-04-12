import { put, call, takeLatest } from "redux-saga/effects";
import { successUploadDocuments } from "./action";
import { UPLOAD_DOCUMENTS } from "./constant";
import { callApi } from "../Layout/saga";
import { ASSESSMENT_UPLOAD_URL } from "../../config/api";

export function* handleUploadDocuments(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        ASSESSMENT_UPLOAD_URL,
        null,
        params,
        true,
        true,
        true
    );
    yield put(successUploadDocuments(res.string));
}

export function* watchUploadDocumentsSaga() {
    yield takeLatest(UPLOAD_DOCUMENTS, handleUploadDocuments);
}