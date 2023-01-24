import { all } from "redux-saga/effects";
import { watchAppSaga } from "../Layout/saga";

export default function* Saga() {
    yield all([
        watchAppSaga(),
    ]);
}
