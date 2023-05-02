import { combineReducers } from "redux";
import layoutReducer from "../Layout/reducer";
import guestDashboardReducer from "../GuestDashboard/reducer";
import uploadDocumentsReducer from "../UploadDocuments/reducer";
import assessmentResultReducer from "../AssessmentResult/reducer";
import validateResultReducer from "../ValidateResult/reducer";
import userDashboardReducer from "../UserDashboard/reducer";
import loginReducer from "../Login/reducer";
import profileReducer from "../Profile/reducer";
import editBiodataReducer from "../EditProfileBio/reducer";
import editEvaluationDataReducer from "../EditProfileSPBE/reducer";
import editJobDataReducer from "../EditProfileWork/reducer";
import editInstitutionDataReducer from "../EditProfileInstitution/reducer";

const Reducer = combineReducers({
    layoutReducer,
    guestDashboardReducer,
    uploadDocumentsReducer,
    assessmentResultReducer,
    validateResultReducer,
    userDashboardReducer,
    loginReducer,
    profileReducer,
    editBiodataReducer,
    editEvaluationDataReducer,
    editJobDataReducer,
    editInstitutionDataReducer
});

export default Reducer;
