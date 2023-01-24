import { GET_LOADER_STATE, SET_LOADER_STATE } from "./constant";

export function getLoaderState(params: any) {
    return {
        type: GET_LOADER_STATE,
        params,
    };
}

export function setLoaderState(params: any) {
    return {
        type: SET_LOADER_STATE,
        params,
    };
}
