import { Buffer } from "buffer";
import { put, call, takeLatest } from "redux-saga/effects";
import { setAssessmentResult, successDownloadFile } from "./action";
import { GET_ASSESSMENT_RESULT, DOWNLOAD_FILE } from "./constant";
import { callApi } from "../Layout/saga";
import { ASSESSMENT_URL } from "../../config/api";
import { downloadFileAsync } from "../../utils/general";

export function* handleGetAssessmentResult(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        `${ASSESSMENT_URL}/${params}`,
        null,
        null,
        true,
        true,
        true
    );
    yield put(setAssessmentResult(res));
}

export function* handleDownloadFile(action: any): any {
    const { params } = action;
    // yield call(downloadFileAsync, `${ASSESSMENT_URL}/${params}/download`);
    let out = yield call(
        callApi,
        "GET",
        `${ASSESSMENT_URL}/${params}/download`,
        null,
        null,
        true,
        true,
        true
    );
    if (out !== null) {
        const blob = new Blob([out], {type: 'application/pdf'});
        const url = URL.createObjectURL(blob);
        yield call(downloadFileAsync, url);
        yield put(successDownloadFile("File downloaded"));   
    }
    // yield put(successDownloadFile("Download succeed"));
}

export function* watchAssessmentResultSaga() {
    yield takeLatest(GET_ASSESSMENT_RESULT, handleGetAssessmentResult);
    yield takeLatest(DOWNLOAD_FILE, handleDownloadFile);
}