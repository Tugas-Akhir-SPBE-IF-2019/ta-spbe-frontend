import { all } from "redux-saga/effects";
import { watchAppSaga } from "../Layout/saga";
import { watchGuestDashboardSaga } from "../GuestDashboard/saga";
import { watchUploadDocumentsSaga } from "../UploadDocuments/saga";

export default function* Saga() {
    yield all([
        watchAppSaga(),
        watchGuestDashboardSaga(),
        watchUploadDocumentsSaga(),
    ]);
}
