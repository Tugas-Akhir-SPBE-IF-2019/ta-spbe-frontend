import { SET_ASSESSMENT_RESULT } from "./constant";

const initialState = {
    assessmentResult: null,
};

const assessmentResultReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ASSESSMENT_RESULT:
            return {
                ...state,
                assessmentResult: action.params,
            };
        default:
            return state;
    }
};

export default assessmentResultReducer;
