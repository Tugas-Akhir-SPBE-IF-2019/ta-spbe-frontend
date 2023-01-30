import { put, takeLatest } from "redux-saga/effects";
import { successLoginWithGoogle } from "./action";
import { SUCCESS_LOGIN_WITH_GOOGLE } from "./constant";

export function* handleLoginWithGoogle(action: any): any {
    let res = "Success";
    yield put(successLoginWithGoogle(res));
}

export function* watchLoginSaga() {
    yield takeLatest(SUCCESS_LOGIN_WITH_GOOGLE, handleLoginWithGoogle);
}