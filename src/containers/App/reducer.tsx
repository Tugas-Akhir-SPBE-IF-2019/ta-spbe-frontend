import { combineReducers } from "redux";
import layoutReducer from "../Layout/reducer";
import guestDashboardReducer from "../GuestDashboard/reducer";

const Reducer = combineReducers({
    layoutReducer,
    guestDashboardReducer,
});

export default Reducer;
