import {
    GET_ASSESSMENT_RESULT,
    SET_ASSESSMENT_RESULT,
    DOWNLOAD_FILE,
    SUCCESS_DOWNLOAD_FILE
} from "./constant";

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

export function downloadFile(params: any) {
    return {
        type: DOWNLOAD_FILE,
        params
    };
}

export function successDownloadFile(params: any) {
    return {
        type: SUCCESS_DOWNLOAD_FILE,
        params,
    };
}

