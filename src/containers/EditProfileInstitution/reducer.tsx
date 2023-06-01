import { 
    SET_INSTITUTION_DATA,
    SUCCESS_UPDATE_INSTITUTION_DATA,
    SET_INSTITUTION_LIST
} from "./constant";

const initialState = {
    institutionList: [],
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
        case SET_INSTITUTION_LIST:
            return {
                ...state,
                institutionList: action.params,
            };
        default:
            return state;
    }
};

export default editInstitutionDataReducer;
