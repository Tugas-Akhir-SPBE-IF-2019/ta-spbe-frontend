import { put, call, takeLatest } from "redux-saga/effects";
import {
    setJobData,
    successUpdateJobData
} from "./action";
import {
    GET_JOB_DATA,
    UPDATE_JOB_DATA
} from "./constant";
import { callApi } from "../Layout/saga";
import { JOB_DATA_URL } from "../../config/api";

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

export function* handleUpdateJobData(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        JOB_DATA_URL,
        null,
        params,
        true,
        true,
        true
    );
    yield put(successUpdateJobData(res.message));
}

export function* watchEditJobDataSaga() {
    yield takeLatest(GET_JOB_DATA, handleGetJobData);
    yield takeLatest(UPDATE_JOB_DATA, handleUpdateJobData);
}