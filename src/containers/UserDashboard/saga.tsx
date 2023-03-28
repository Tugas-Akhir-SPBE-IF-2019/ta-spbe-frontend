import { put, call, takeLatest } from "redux-saga/effects";
import { setAssessmentList } from "./action";
import { GET_ASSESSMENT_LIST } from "./constant";
import { callApi } from "../Layout/saga";
import { ASSESSMENT_URL } from "../../config/api";
import { sortByDate } from "../../utils/helper";

export function* handleGetAssessmentList(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        ASSESSMENT_URL,
        null,
        null,
        true,
        true,
        true
    );
    let sortedRes = sortByDate(res.items)
    yield put(setAssessmentList(sortedRes));
}

export function* watchUserDashboardSaga() {
    yield takeLatest(GET_ASSESSMENT_LIST, handleGetAssessmentList);
}