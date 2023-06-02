import { SET_ASSESSMENT_RESULT, SUCCESS_SEND_VALIDATION } from "./constant";

const initialState = {
    assessmentResult: null,
    validationMessage: "",
};

const validateResultReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ASSESSMENT_RESULT:
            return {
                ...state,
                assessmentResult: action.params,
                validationMessage: "",
            };
        case SUCCESS_SEND_VALIDATION:
            return {
                ...state,
                validationMessage: action.params,
            };
        default:
            return state;
    }
};

export default validateResultReducer;
