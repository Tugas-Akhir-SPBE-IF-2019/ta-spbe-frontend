import { SEND_VALIDATION, SUCCESS_SEND_VALIDATION } from "./constant";

export function sendValidation(params: any) {
    return {
        type: SEND_VALIDATION,
        params
    };
}

export function successSendValidation(params: any) {
    return {
        type: SUCCESS_SEND_VALIDATION,
        params,
    };
}
