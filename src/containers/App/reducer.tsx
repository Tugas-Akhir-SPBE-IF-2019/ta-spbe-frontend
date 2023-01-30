import { combineReducers } from "redux";
import layoutReducer from "../Layout/reducer";
import guestDashboardReducer from "../GuestDashboard/reducer";
import uploadDocumentsReducer from "../UploadDocuments/reducer";
import assessmentResultReducer from "../AssessmentResult/reducer";
import validateResultReducer from "../ValidateResult/reducer";
import userDashboardReducer from "../UserDashboard/reducer";

const Reducer = combineReducers({
    layoutReducer,
    guestDashboardReducer,
    uploadDocumentsReducer,
    assessmentResultReducer,
    validateResultReducer,
    userDashboardReducer,
});

export default Reducer;
