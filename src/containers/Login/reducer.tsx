import { SUCCESS_LOGIN_WITH_GOOGLE } from "./constant";

const initialState = {
    loginMessage: null,
};

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUCCESS_LOGIN_WITH_GOOGLE:
            return {
                ...state,
                loginMessage: action.params,
            };
        default:
            return state;
    }
};

export default loginReducer;
