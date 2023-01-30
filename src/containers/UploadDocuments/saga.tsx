import { put, takeLatest } from "redux-saga/effects";
import { successUploadDocuments } from "./action";
import { UPLOAD_DOCUMENTS } from "./constant";

export function* handleUploadDocuments(action: any): any {
    let res = "Success";
    yield put(successUploadDocuments(res));
}

export function* watchUploadDocumentsSaga() {
    yield takeLatest(UPLOAD_DOCUMENTS, handleUploadDocuments);
}