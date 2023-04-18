import { put, call, takeLatest } from "redux-saga/effects";
import {
    setEvaluationData,
    successUpdateEvaluationData
} from "./action";
import {
    GET_EVALUATION_DATA,
    UPDATE_EVALUATION_DATA
} from "./constant";
import { callApi } from "../Layout/saga";
import { EVALUATION_DATA_URL } from "../../config/api";

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

export function* handleUpdateEvaluationData(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        EVALUATION_DATA_URL,
        null,
        params,
        true,
        true,
        true
    );
    yield put(successUpdateEvaluationData(res.message));
}

export function* watchEditEvaluationDataSaga() {
    yield takeLatest(GET_EVALUATION_DATA, handleGetEvaluationData);
    yield takeLatest(UPDATE_EVALUATION_DATA, handleUpdateEvaluationData);
}