import { put, takeLatest } from "redux-saga/effects";
import { successSendValidation } from "./action";
import { SEND_VALIDATION } from "./constant";

export function* handleSendResultValidation(action: any): any {
    let res = "Success";
    yield put(successSendValidation(res));
}

export function* watchValidateResultSaga() {
    yield takeLatest(SEND_VALIDATION, handleSendResultValidation);
}