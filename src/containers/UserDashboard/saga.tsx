import { put, call, takeLatest } from "redux-saga/effects";
import { setAssessmentList, setAssessmentHistory } from "./action";
import { GET_ASSESSMENT_LIST, GET_ASSESSMENT_HISTORY } from "./constant";
import { callApi } from "../Layout/saga";
import { ASSESSMENT_URL } from "../../config/api";

export function* handleGetAssessmentList(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        ASSESSMENT_URL,
        params,
        null,
        true,
        true,
        true
    );
    yield put(setAssessmentList(res));
}

export function* handleGetAssessmentHistory(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        `${ASSESSMENT_URL}/${params}/histories`,
        null,
        null,
        true,
        true,
        true
    );
    yield put(setAssessmentHistory(res));
}

export function* watchUserDashboardSaga() {
    yield takeLatest(GET_ASSESSMENT_LIST, handleGetAssessmentList);
    yield takeLatest(GET_ASSESSMENT_HISTORY, handleGetAssessmentHistory);
}