import { LOGIN_WITH_GOOGLE, SUCCESS_LOGIN_WITH_GOOGLE } from "./constant";

export function loginWithGoogle(params: any) {
    return {
        type: LOGIN_WITH_GOOGLE,
        params
    };
}

export function successLoginWithGoogle(params: any) {
    return {
        type: SUCCESS_LOGIN_WITH_GOOGLE,
        params,
    };
}
