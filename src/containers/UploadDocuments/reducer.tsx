import { SUCCESS_UPLOAD_DOCUMENTS, SET_INSTITUTION_DATA } from "./constant";

const initialState = {
    uploadMessage: "",
    institutionData: [],
};

const uploadDocumentsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUCCESS_UPLOAD_DOCUMENTS:
            return {
                ...state,
                uploadMessage: action.params,
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

export default uploadDocumentsReducer;
