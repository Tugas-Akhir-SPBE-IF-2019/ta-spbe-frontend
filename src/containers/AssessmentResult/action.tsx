import { GET_ASSESSMENT_RESULT, SET_ASSESSMENT_RESULT } from "./constant";

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
