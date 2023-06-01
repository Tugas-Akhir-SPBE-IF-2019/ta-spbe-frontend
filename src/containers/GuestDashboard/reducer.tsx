import { SET_INDEX_LIST, SET_INSTITUTION_LIST } from "./constant";

const initialState = {
    indexList: [],
    institutionList: [],
};

const guestDashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INDEX_LIST:
            return {
                ...state,
                indexList: action.params,
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

export default guestDashboardReducer;
