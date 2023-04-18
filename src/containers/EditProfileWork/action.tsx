import { 
    GET_JOB_DATA,
    SET_JOB_DATA,
    UPDATE_JOB_DATA,
    SUCCESS_UPDATE_JOB_DATA,
} from "./constant";

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

export function updateJobData(params: any) {
    return {
        type: UPDATE_JOB_DATA,
        params
    };
}

export function successUpdateJobData(params: any) {
    return {
        type: SUCCESS_UPDATE_JOB_DATA,
        params,
    };
}