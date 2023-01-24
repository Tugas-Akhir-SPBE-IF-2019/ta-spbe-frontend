import { SET_LOADER_STATE } from "./constant";

const initialState = {
    loading: true,
};

const layoutReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LOADER_STATE:
            return {
                ...state,
                loading: action.params,
            };
        default:
            return state;
    }
};

export default layoutReducer;
