import { 
    GET_EVALUATION_DATA,
    SET_EVALUATION_DATA,
    UPDATE_EVALUATION_DATA,
    SUCCESS_UPDATE_EVALUATION_DATA
} from "./constant";

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

export function updateEvaluationData(params: any) {
    return {
        type: UPDATE_EVALUATION_DATA,
        params
    };
}

export function successUpdateEvaluationData(params: any) {
    return {
        type: SUCCESS_UPDATE_EVALUATION_DATA,
        params,
    };
}