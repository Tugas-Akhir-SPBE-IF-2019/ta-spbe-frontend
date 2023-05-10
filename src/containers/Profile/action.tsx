import { 
    GET_BIODATA,
    SET_BIODATA,
    GET_EVALUATION_DATA,
    SET_EVALUATION_DATA,
    GET_JOB_DATA,
    SET_JOB_DATA,
    GET_INSTITUTION_DATA,
    SET_INSTITUTION_DATA,
    DELETE_INSTITUTION_ENTRY,
    SUCCESS_DELETE_INSTITUTION_ENTRY,
} from "./constant";

export function getBiodata() {
    return {
        type: GET_BIODATA,
    };
}

export function setBiodata(params: any) {
    return {
        type: SET_BIODATA,
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

export function getJobData() {
    return {
        type: GET_JOB_DATA,
    };
}

export function setJobData(params: any) {
    return {
        type: SET_JOB_DATA,
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

export function deleteInstitutionEntry(params: any) {
    return {
        type: DELETE_INSTITUTION_ENTRY,
        params,
    };
}

export function successDeleteInstitutionEntry(params: any) {
    return {
        type: SUCCESS_DELETE_INSTITUTION_ENTRY,
        params,
    };
}