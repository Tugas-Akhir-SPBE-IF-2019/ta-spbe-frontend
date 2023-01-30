import { GET_ASSESSMENT_LIST, SET_ASSESSMENT_LIST } from "./constant";

export function getAssessmentList() {
    return {
        type: GET_ASSESSMENT_LIST,
    };
}

export function setAssessmentList(params: any) {
    return {
        type: SET_ASSESSMENT_LIST,
        params,
    };
}
