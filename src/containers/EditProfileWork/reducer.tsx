import { 
    SET_JOB_DATA,
    SUCCESS_UPDATE_JOB_DATA
} from "./constant";

const initialState = {
    jobData: [],
    successMessage: "",
};

const editJobDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_JOB_DATA:
            return {
                ...state,
                jobData: action.params,
            };
        case SUCCESS_UPDATE_JOB_DATA:
            return {
                ...state,
                successMessage: action.params,
            };
        default:
            return state;
    }
};

export default editJobDataReducer;
