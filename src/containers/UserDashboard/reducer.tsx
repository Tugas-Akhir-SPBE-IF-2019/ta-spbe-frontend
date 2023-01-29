import { SET_ASSESSMENT_LIST } from "./constant";

const initialState = {
    assessmentList: [],
};

const userDashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ASSESSMENT_LIST:
            return {
                ...state,
                assessmentList: action.params,
            };
        default:
            return state;
    }
};

export default userDashboardReducer;
