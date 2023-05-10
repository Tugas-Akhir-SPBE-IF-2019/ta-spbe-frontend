import { put, call, takeLatest } from "redux-saga/effects";
import {
    setBiodata,
    setEvaluationData,
    setJobData,
    setInstitutionData,
    successDeleteInstitutionEntry
} from "./action";
import {
    GET_BIODATA,
    GET_EVALUATION_DATA,
    GET_JOB_DATA,
    GET_INSTITUTION_DATA,
    DELETE_INSTITUTION_ENTRY
} from "./constant";
import { callApi } from "../Layout/saga";
import {
    BIODATA_URL,
    EVALUATION_DATA_URL,
    JOB_DATA_URL,
    INSTITUTION_DATA_URL
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

export function* handleDeleteInstitutionEntry(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "DELETE",
        `${INSTITUTION_DATA_URL}/${params}`,
        null,
        null,
        true,
        true,
        true
    );
    yield put(successDeleteInstitutionEntry(res.message));
}

export function* watchProfileSaga() {
    yield takeLatest(GET_BIODATA, handleGetBiodata);
    yield takeLatest(GET_EVALUATION_DATA, handleGetEvaluationData);
    yield takeLatest(GET_JOB_DATA, handleGetJobData);
    yield takeLatest(GET_INSTITUTION_DATA, handleGetInstitutionData);
    yield takeLatest(DELETE_INSTITUTION_ENTRY, handleDeleteInstitutionEntry);
}