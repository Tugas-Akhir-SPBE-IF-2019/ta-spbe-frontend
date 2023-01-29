import { SUCCESS_UPLOAD_DOCUMENTS } from "./constant";

const initialState = {
    uploadMessage: "",
};

const uploadDocumentsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUCCESS_UPLOAD_DOCUMENTS:
            return {
                ...state,
                uploadMessage: action.params,
            };
        default:
            return state;
    }
};

export default uploadDocumentsReducer;
