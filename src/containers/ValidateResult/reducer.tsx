import { SUCCESS_SEND_VALIDATION } from "./constant";

const initialState = {
    validationMessage: "",
};

const validateResultReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUCCESS_SEND_VALIDATION:
            return {
                ...state,
                validationMessage: action.params,
            };
        default:
            return state;
    }
};

export default validateResultReducer;
