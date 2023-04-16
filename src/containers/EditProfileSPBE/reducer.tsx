import { 
    SET_EVALUATION_DATA,
    SUCCESS_UPDATE_EVALUATION_DATA
} from "./constant";

const initialState = {
    evaluationData: [],
    successMessage: "",
};

const editEvaluationDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_EVALUATION_DATA:
            return {
                ...state,
                evaluationData: action.params,
            };
        case SUCCESS_UPDATE_EVALUATION_DATA:
            return {
                ...state,
                successMessage: action.params,
            };
        default:
            return state;
    }
};

export default editEvaluationDataReducer;
