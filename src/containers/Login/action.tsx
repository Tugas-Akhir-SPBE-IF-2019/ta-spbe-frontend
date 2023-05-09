import {
    LOGIN_WITH_GOOGLE,
    SUCCESS_LOGIN_WITH_GOOGLE,
    GET_INSTITUTION_DATA,
    SET_INSTITUTION_DATA
} from "./constant";

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

export function getInstitutionData() {
    return {
        type: GET_INSTITUTION_DATA,
    };
}

export function setInstitutionData(params: any) {
    return {
        type: SET_INSTITUTION_DATA,
        params,
    };
}
