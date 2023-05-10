import { put, call, takeLatest } from "redux-saga/effects";
import {
    setInstitutionList,
    setEvaluationData,
    successUpdateEvaluationData
} from "./action";
import {
    GET_INSTITUTION_LIST,
    GET_EVALUATION_DATA,
    UPDATE_EVALUATION_DATA
} from "./constant";
import { callApi } from "../Layout/saga";
import { EVALUATION_DATA_URL, INSTITUTION_LIST_URL } from "../../config/api";

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

export function* handleGetInstitutionList(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        INSTITUTION_LIST_URL,
        params,
        null,
        true,
        true,
        true
    );
    yield put(setInstitutionList(res.items));
}

export function* watchEditEvaluationDataSaga() {
    yield takeLatest(GET_EVALUATION_DATA, handleGetEvaluationData);
    yield takeLatest(UPDATE_EVALUATION_DATA, handleUpdateEvaluationData);
    yield takeLatest(GET_INSTITUTION_LIST, handleGetInstitutionList);
}