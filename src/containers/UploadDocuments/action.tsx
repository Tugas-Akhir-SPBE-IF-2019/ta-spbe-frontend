import {
    UPLOAD_DOCUMENTS,
    SUCCESS_UPLOAD_DOCUMENTS,
    GET_INSTITUTION_DATA,
    SET_INSTITUTION_DATA
} from "./constant";

export function uploadDocuments(params: any) {
    return {
        type: UPLOAD_DOCUMENTS,
        params,
    };
}

export function successUploadDocuments(params: any) {
    return {
        type: SUCCESS_UPLOAD_DOCUMENTS,
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
