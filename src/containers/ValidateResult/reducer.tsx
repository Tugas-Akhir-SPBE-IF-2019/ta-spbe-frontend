import { SET_ASSESSMENT_RESULT, SET_ASSESSMENT_VALIDATION, SUCCESS_SEND_VALIDATION } from "./constant";

const initialState = {
    assessmentResult: null,
    assessmentValidation: [],
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
        case SET_ASSESSMENT_VALIDATION:
            return {
                ...state,
                assessmentValidation: action.params,
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
