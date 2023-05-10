import { put, call, takeLatest } from "redux-saga/effects";
import { successUploadDocuments, setInstitutionData } from "./action";
import { UPLOAD_DOCUMENTS, GET_INSTITUTION_DATA } from "./constant";
import { callApi } from "../Layout/saga";
import { ASSESSMENT_UPLOAD_URL, INSTITUTION_DATA_URL } from "../../config/api";

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

export function* handleGetInstitutionData(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        INSTITUTION_DATA_URL,
        null,
        null,
        true,
        true,
        true
    );
    yield put(setInstitutionData(res.items));
}

export function* watchUploadDocumentsSaga() {
    yield takeLatest(UPLOAD_DOCUMENTS, handleUploadDocuments);
    yield takeLatest(GET_INSTITUTION_DATA, handleGetInstitutionData);
}