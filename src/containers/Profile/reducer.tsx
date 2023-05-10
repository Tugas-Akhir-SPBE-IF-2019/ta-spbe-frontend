import { 
    SET_BIODATA,
    SET_EVALUATION_DATA,
    SET_JOB_DATA,
    SET_INSTITUTION_DATA,
    SUCCESS_DELETE_INSTITUTION_ENTRY
} from "./constant";

const initialState = {
    biodata: null,
    evaluationData: [],
    jobData: [],
    institutionData: [],
    deleteMessage: "",
};

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_BIODATA:
            return {
                ...state,
                biodata: action.params,
            };
        case SET_EVALUATION_DATA:
            return {
                ...state,
                evaluationData: action.params,
            };
        case SET_JOB_DATA:
            return {
                ...state,
                jobData: action.params,
            };
        case SET_INSTITUTION_DATA:
            return {
                ...state,
                institutionData: action.params,
                deleteMessage: "",
            };
        case SUCCESS_DELETE_INSTITUTION_ENTRY:
            return {
                ...state,
                deleteMessage: action.params,
            };
        default:
            return state;
    }
};

export default profileReducer;
