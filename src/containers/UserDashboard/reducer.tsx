import { SET_ASSESSMENT_LIST, SET_ASSESSMENT_HISTORY, SET_INSTITUTION_LIST } from "./constant";

const initialState = {
    assessmentList: [],
    institutionList: [],
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
        case SET_INSTITUTION_LIST:
            return {
                ...state,
                institutionList: action.params,
            };
        default:
            return state;
    }
};

export default userDashboardReducer;
