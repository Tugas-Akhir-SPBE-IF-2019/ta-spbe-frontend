import { SET_ASSESSMENT_LIST, SET_ASSESSMENT_HISTORY } from "./constant";

const initialState = {
    assessmentList: [],
    history: null,
};

const userDashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ASSESSMENT_LIST:
            return {
                ...state,
                assessmentList: action.params,
            };
        case SET_ASSESSMENT_HISTORY:
            return {
                ...state,
                history: action.params,
            };
        default:
            return state;
    }
};

export default userDashboardReducer;
