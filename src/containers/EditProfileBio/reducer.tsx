import { 
    SET_BIODATA,
    SUCCESS_UPDATE_BIODATA
} from "./constant";

const initialState = {
    biodata: null,
    successMessage: "",
};

const editBiodataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_BIODATA:
            return {
                ...state,
                biodata: action.params,
            };
        case SUCCESS_UPDATE_BIODATA:
            return {
                ...state,
                successMessage: action.params,
            };
        default:
            return state;
    }
};

export default editBiodataReducer;
