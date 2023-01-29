import { put, takeLatest } from "redux-saga/effects";
import { setAssessmentResult } from "./action";
import { GET_ASSESSMENT_RESULT } from "./constant";

export function* handleGetAssessmentResult(action: any): any {
    let res = "Success";
    yield put(setAssessmentResult(res));
}

export function* watchAssessmentResultSaga() {
    yield takeLatest(GET_ASSESSMENT_RESULT, handleGetAssessmentResult);
}