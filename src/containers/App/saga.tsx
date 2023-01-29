import { all } from "redux-saga/effects";
import { watchAppSaga } from "../Layout/saga";
import { watchGuestDashboardSaga } from "../GuestDashboard/saga";
import { watchUploadDocumentsSaga } from "../UploadDocuments/saga";
import { watchAssessmentResultSaga } from "../AssessmentResult/saga";
import { watchValidateResultSaga } from "../ValidateResult/saga";
import { watchUserDashboardSaga } from "../UserDashboard/saga";

export default function* Saga() {
    yield all([
        watchAppSaga(),
        watchGuestDashboardSaga(),
        watchUploadDocumentsSaga(),
        watchAssessmentResultSaga(),
        watchValidateResultSaga(),
        watchUserDashboardSaga(),
    ]);
}
