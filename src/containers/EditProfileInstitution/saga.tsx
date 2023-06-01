import { put, call, takeLatest } from "redux-saga/effects";
import {
    setInstitutionData,
    successUpdateInstitutionData,
    setInstitutionList
} from "./action";
import {
    GET_INSTITUTION_DATA,
    UPDATE_INSTITUTION_DATA,
    GET_INSTITUTION_LIST
} from "./constant";
import { callApi } from "../Layout/saga";
import { INSTITUTION_DATA_URL, INSTITUTION_LIST_URL } from "../../config/api";

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

export function* handleUpdateInstitutionData(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        INSTITUTION_DATA_URL,
        null,
        params,
        true,
        true,
        true
    );
    yield put(successUpdateInstitutionData(res.message));
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

export function* watchEditInstitutionDataSaga() {
    yield takeLatest(GET_INSTITUTION_DATA, handleGetInstitutionData);
    yield takeLatest(UPDATE_INSTITUTION_DATA, handleUpdateInstitutionData);
    yield takeLatest(GET_INSTITUTION_LIST, handleGetInstitutionList);
}