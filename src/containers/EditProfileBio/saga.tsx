import { put, call, takeLatest } from "redux-saga/effects";
import {
    setBiodata,
    successUpdateBiodata
} from "./action";
import {
    GET_BIODATA,
    UPDATE_BIODATA
} from "./constant";
import { callApi } from "../Layout/saga";
import { BIODATA_URL } from "../../config/api";

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

export function* handleUpdateBiodata(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "PUT",
        BIODATA_URL,
        null,
        params,
        true,
        true,
        true
    );
    yield put(successUpdateBiodata(res));
}

export function* watchEditBiodataSaga() {
    yield takeLatest(GET_BIODATA, handleGetBiodata);
    yield takeLatest(UPDATE_BIODATA, handleUpdateBiodata);
}