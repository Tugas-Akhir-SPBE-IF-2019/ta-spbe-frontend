import { GET_ASSESSMENT_RESULT, SET_ASSESSMENT_RESULT, SEND_VALIDATION, SUCCESS_SEND_VALIDATION } from "./constant";

export function getAssessmentResult(params: any) {
    return {
        type: GET_ASSESSMENT_RESULT,
        params
    };
}

export function setAssessmentResult(params: any) {
    return {
        type: SET_ASSESSMENT_RESULT,
        params,
    };
}

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
