import { SET_ASSESSMENT_RESULT, SUCCESS_DOWNLOAD_FILE } from "./constant";

const initialState = {
    assessmentResult: null,
    downloadMessage: "",
};

const assessmentResultReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ASSESSMENT_RESULT:
            return {
                ...state,
                assessmentResult: action.params,
            };
        case SUCCESS_DOWNLOAD_FILE:
            return {
                ...state,
                downloadMessage: action.params,
            };
        default:
            return state;
    }
};

export default assessmentResultReducer;
