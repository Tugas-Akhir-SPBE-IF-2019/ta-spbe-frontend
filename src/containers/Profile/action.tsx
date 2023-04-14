import { 
    GET_BIODATA,
    SET_BIODATA,
    GET_EVALUATION_DATA,
    SET_EVALUATION_DATA,
    GET_JOB_DATA,
    SET_JOB_DATA,    
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