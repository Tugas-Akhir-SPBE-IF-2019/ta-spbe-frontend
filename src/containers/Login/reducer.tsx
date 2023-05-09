import { SUCCESS_LOGIN_WITH_GOOGLE, SET_INSTITUTION_DATA } from "./constant";

const initialState = {
    loginMessage: null,
    institutionData: [],
};

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUCCESS_LOGIN_WITH_GOOGLE:
            return {
                ...state,
                loginMessage: action.params,
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

export default loginReducer;
