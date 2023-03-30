import { put, call, takeLatest } from "redux-saga/effects";
import { setAssessmentResult, successSendValidation } from "./action";
import { GET_ASSESSMENT_RESULT, SEND_VALIDATION } from "./constant";
import { callApi } from "../Layout/saga";
import { ASSESSMENT_URL } from "../../config/api";

export function* handleGetAssessmentResult(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        `${ASSESSMENT_URL}/${params}`,
        null,
        null,
        true,
        true,
        true
    );
    yield put(setAssessmentResult(res));
}

export function* handleSendResultValidation(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "PATCH",
        `${ASSESSMENT_URL}/${params.id}/validate`,
        null,
        params.data,
        true,
        true,
        true
    );
    yield put(successSendValidation(res.message));
}

export function* watchValidateResultSaga() {
    yield takeLatest(GET_ASSESSMENT_RESULT, handleGetAssessmentResult);
    yield takeLatest(SEND_VALIDATION, handleSendResultValidation);
}