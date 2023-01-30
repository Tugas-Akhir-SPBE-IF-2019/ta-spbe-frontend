import { combineReducers } from "redux";
import layoutReducer from "../Layout/reducer";
import guestDashboardReducer from "../GuestDashboard/reducer";
import uploadDocumentsReducer from "../UploadDocuments/reducer";

const Reducer = combineReducers({
    layoutReducer,
    guestDashboardReducer,
    uploadDocumentsReducer,
});

export default Reducer;
