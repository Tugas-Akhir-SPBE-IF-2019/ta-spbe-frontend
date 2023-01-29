import { UPLOAD_DOCUMENTS, SUCCESS_UPLOAD_DOCUMENTS } from "./constant";

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
