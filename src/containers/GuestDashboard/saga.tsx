import { put, call, takeLatest } from "redux-saga/effects";
import { setIndexList, setInstitutionList } from "./action";
import { GET_INDEX_LIST, GET_INSTITUTION_LIST } from "./constant";
import { callApi } from "../Layout/saga";
import { ASSESSMENT_INDEX_URL, INSTITUTION_LIST_URL } from "../../config/api";
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
    yield put(setIndexList(res));
}

export function* handleGetInstitutionList(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        INSTITUTION_LIST_URL,
        params,
        null,
        true,
        true,
        true
    );
    yield put(setInstitutionList(res.items));
}

export function* watchGuestDashboardSaga() {
    yield takeLatest(GET_INDEX_LIST, handleGetIndexList);
    yield takeLatest(GET_INSTITUTION_LIST, handleGetInstitutionList);
}