import { SET_INDEX_LIST } from "./constant";

const initialState = {
    indexList: [],
};

const guestDashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INDEX_LIST:
            return {
                ...state,
                indexList: action.params,
            };
        default:
            return state;
    }
};

export default guestDashboardReducer;
