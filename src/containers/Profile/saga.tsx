import { put, call, takeLatest } from "redux-saga/effects";
import {
    setBiodata,
    setEvaluationData,
    setJobData
} from "./action";
import {
    GET_BIODATA,
    GET_EVALUATION_DATA,
    GET_JOB_DATA
} from "./constant";
import { callApi } from "../Layout/saga";
import {
    BIODATA_URL,
    EVALUATION_DATA_URL,
    JOB_DATA_URL
} from "../../config/api";

export function* handleGetBiodata(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        BIODATA_URL,
        null,
        null,
        true,
        true,
        true
    );
    yield put(setBiodata(res));
}

export function* handleGetEvaluationData(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        EVALUATION_DATA_URL,
        null,
        null,
        true,
        true,
        true
    );
    yield put(setEvaluationData(res.items));
}

export function* handleGetJobData(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        JOB_DATA_URL,
        null,
        null,
        true,
        true,
        true
    );
    yield put(setJobData(res.items));
}

export function* watchProfileSaga() {
    yield takeLatest(GET_BIODATA, handleGetBiodata);
    yield takeLatest(GET_EVALUATION_DATA, handleGetEvaluationData);
    yield takeLatest(GET_JOB_DATA, handleGetJobData);
}