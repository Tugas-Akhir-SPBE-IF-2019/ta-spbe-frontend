import { put, takeLatest } from "redux-saga/effects";
import { setLoaderState } from "./action";
import { GET_LOADER_STATE } from "./constant";

export function* setLoader(action: any): any {
    const { params } = action;
    yield put(setLoaderState(params));
}

export function* watchAppSaga() {
    yield takeLatest(GET_LOADER_STATE, setLoader);
}