import { put, takeLatest, call } from "redux-saga/effects";
import { successLoginWithGoogle, setInstitutionData } from "./action";
import { LOGIN_WITH_GOOGLE, GET_INSTITUTION_DATA } from "./constant";
import { callApi } from "../Layout/saga";
import { LOGIN_URL, INSTITUTION_DATA_URL } from "../../config/api";

export function* handleLoginWithGoogle(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        LOGIN_URL,
        null,
        params,
        true,
        true,
        true
    );
    if (res) {
        yield put(successLoginWithGoogle(res));
    }
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

export function* watchLoginSaga() {
    yield takeLatest(LOGIN_WITH_GOOGLE, handleLoginWithGoogle);
    yield takeLatest(GET_INSTITUTION_DATA, handleGetInstitutionData);
}