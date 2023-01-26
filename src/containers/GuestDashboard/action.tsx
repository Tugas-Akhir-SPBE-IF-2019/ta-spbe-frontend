import { GET_INDEX_LIST, SET_INDEX_LIST } from "./constant";

export function getIndexList() {
    return {
        type: GET_INDEX_LIST,
    };
}

export function setIndexList(params: any) {
    return {
        type: SET_INDEX_LIST,
        params,
    };
}
