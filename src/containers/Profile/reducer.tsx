import { 
    SET_BIODATA,
    SET_EVALUATION_DATA,
    SET_JOB_DATA,
    SET_INSTITUTION_DATA
} from "./constant";

const initialState = {
    biodata: null,
    evaluationData: [],
    jobData: [],
    institutionData: [],
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
            };
        default:
            return state;
    }
};

export default profileReducer;
