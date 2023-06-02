import {
    SET_INSTITUTION_LIST,
    SET_EVALUATION_DATA,
    SUCCESS_UPDATE_EVALUATION_DATA
} from "./constant";

const initialState = {
    institutionList: [],
    evaluationData: [],
    successMessage: "",
};

const editEvaluationDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_EVALUATION_DATA:
            return {
                ...state,
                evaluationData: action.params,
                successMessage: "",
            };
        case SUCCESS_UPDATE_EVALUATION_DATA:
            return {
                ...state,
                successMessage: action.params,
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

export default editEvaluationDataReducer;
