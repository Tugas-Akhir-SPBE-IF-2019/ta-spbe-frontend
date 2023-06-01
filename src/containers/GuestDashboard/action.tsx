import {
    GET_INDEX_LIST,
    SET_INDEX_LIST,
    GET_INSTITUTION_LIST,
    SET_INSTITUTION_LIST,
} from "./constant";

export function getIndexList(params: any) {
    return {
        type: GET_INDEX_LIST,
        params,
    };
}

export function setIndexList(params: any) {
    return {
        type: SET_INDEX_LIST,
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