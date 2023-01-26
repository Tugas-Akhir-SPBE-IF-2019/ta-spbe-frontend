import { put, takeLatest } from "redux-saga/effects";
import { setIndexList } from "./action";
import { GET_INDEX_LIST } from "./constant";

export function* handleGetIndexList(action: any): any {
    let res = [
        1, 2, 3
    ]
    yield put(setIndexList(res));
}

export function* watchGuestDashboardSaga() {
    yield takeLatest(GET_INDEX_LIST, handleGetIndexList);
}