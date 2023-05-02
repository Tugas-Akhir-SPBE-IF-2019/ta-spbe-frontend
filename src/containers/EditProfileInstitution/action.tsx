import { 
    GET_INSTITUTION_DATA,
    SET_INSTITUTION_DATA,
    UPDATE_INSTITUTION_DATA,
    SUCCESS_UPDATE_INSTITUTION_DATA,
} from "./constant";

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

export function updateInstitutionData(params: any) {
    return {
        type: UPDATE_INSTITUTION_DATA,
        params
    };
}

export function successUpdateInstitutionData(params: any) {
    return {
        type: SUCCESS_UPDATE_INSTITUTION_DATA,
        params,
    };
}