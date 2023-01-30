import { put, takeLatest } from "redux-saga/effects";
import { setAssessmentList } from "./action";
import { GET_ASSESSMENT_LIST } from "./constant";

export function* handleGetAssessmentList(action: any): any {
    let res = [
        1, 2, 3
    ];
    yield put(setAssessmentList(res));
}

export function* watchUserDashboardSaga() {
    yield takeLatest(GET_ASSESSMENT_LIST, handleGetAssessmentList);
}