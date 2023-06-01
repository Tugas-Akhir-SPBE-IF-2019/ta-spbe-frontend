import {
    GET_ASSESSMENT_LIST,
    SET_ASSESSMENT_LIST,
    GET_ASSESSMENT_HISTORY,
    SET_ASSESSMENT_HISTORY,
    GET_INSTITUTION_LIST,
    SET_INSTITUTION_LIST,
} from "./constant";

export function getAssessmentList(params: any) {
    return {
        type: GET_ASSESSMENT_LIST,
        params,
    };
}

export function setAssessmentList(params: any) {
    return {
        type: SET_ASSESSMENT_LIST,
        params,
    };
}

export function getAssessmentHistory(params: any) {
    return {
        type: GET_ASSESSMENT_HISTORY,
        params,
    };
}

export function setAssessmentHistory(params: any) {
    return {
        type: SET_ASSESSMENT_HISTORY,
        params,
    };
}

export function getInstitutionList(params: any) {
    return {
        type: GET_INSTITUTION_LIST,
        params,
    };
}

export function setInstitutionList(params: any) {
    return {
        type: SET_INSTITUTION_LIST,
        params,
    };
}