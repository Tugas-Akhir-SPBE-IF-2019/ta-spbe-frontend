import { put, call, takeLatest } from "redux-saga/effects";
import { setIndexList } from "./action";
import { GET_INDEX_LIST } from "./constant";
import { callApi } from "../Layout/saga";
import { ASSESSMENT_INDEX_URL } from "../../config/api";
import { sortByDate } from "../../utils/helper";

export function* handleGetIndexList(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        ASSESSMENT_INDEX_URL,
        params,
        null,
        true,
        true,
        true
    );
    let sortedRes = sortByDate(res.items)
    yield put(setIndexList(sortedRes));
}

export function* watchGuestDashboardSaga() {
    yield takeLatest(GET_INDEX_LIST, handleGetIndexList);
}