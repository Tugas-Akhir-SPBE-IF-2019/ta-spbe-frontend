import { put, call, takeLatest } from "redux-saga/effects";
import { setAssessmentList } from "./action";
import { GET_ASSESSMENT_LIST } from "./constant";
import { callApi } from "../Layout/saga";
import { ASSESSMENT_URL } from "../../config/api";
import { sortByDate } from "../../utils/helper";

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

export function* watchUserDashboardSaga() {
    yield takeLatest(GET_ASSESSMENT_LIST, handleGetAssessmentList);
}