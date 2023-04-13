import { 
    GET_BIODATA,
    SET_BIODATA,
    UPDATE_BIODATA,
    SUCCESS_UPDATE_BIODATA
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

export function updateBiodata(params: any) {
    return {
        type: UPDATE_BIODATA,
        params
    };
}

export function successUpdateBiodata(params: any) {
    return {
        type: SUCCESS_UPDATE_BIODATA,
        params,
    };
}