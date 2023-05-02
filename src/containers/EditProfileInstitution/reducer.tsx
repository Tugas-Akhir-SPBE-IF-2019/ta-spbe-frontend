import { 
    SET_INSTITUTION_DATA,
    SUCCESS_UPDATE_INSTITUTION_DATA
} from "./constant";

const initialState = {
    institutionData: [],
    successMessage: "",
};

const editInstitutionDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INSTITUTION_DATA:
            return {
                ...state,
                institutionData: action.params,
            };
        case SUCCESS_UPDATE_INSTITUTION_DATA:
            return {
                ...state,
                successMessage: action.params,
            };
        default:
            return state;
    }
};

export default editInstitutionDataReducer;
