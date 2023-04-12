import { put, takeLatest, call } from "redux-saga/effects";
import { successLoginWithGoogle } from "./action";
import { LOGIN_WITH_GOOGLE } from "./constant";
import { callApi } from "../Layout/saga";
import { LOGIN_URL } from "../../config/api";

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

export function* watchLoginSaga() {
    yield takeLatest(LOGIN_WITH_GOOGLE, handleLoginWithGoogle);
}