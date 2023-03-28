import { put, call, takeLatest } from "redux-saga/effects";
import { setAssessmentResult } from "./action";
import { GET_ASSESSMENT_RESULT } from "./constant";
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

export function* watchAssessmentResultSaga() {
    yield takeLatest(GET_ASSESSMENT_RESULT, handleGetAssessmentResult);
}