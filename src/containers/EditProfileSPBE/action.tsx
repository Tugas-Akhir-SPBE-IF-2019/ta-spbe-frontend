import {
    GET_INSTITUTION_LIST,
    SET_INSTITUTION_LIST,
    GET_EVALUATION_DATA,
    SET_EVALUATION_DATA,
    UPDATE_EVALUATION_DATA,
    SUCCESS_UPDATE_EVALUATION_DATA
} from "./constant";

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

export function getEvaluationData() {
    return {
        type: GET_EVALUATION_DATA,
    };
}

export function setEvaluationData(params: any) {
    return {
        type: SET_EVALUATION_DATA,
        params,
    };
}

export function updateEvaluationData(params: any) {
    return {
        type: UPDATE_EVALUATION_DATA,
        params
    };
}

export function successUpdateEvaluationData(params: any) {
    return {
        type: SUCCESS_UPDATE_EVALUATION_DATA,
        params,
    };
}