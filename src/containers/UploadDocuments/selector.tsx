const uploadMessageSelector = (state: any) => {
    return state?.uploadDocumentsReducer?.uploadMessage
        ? state.uploadDocumentsReducer.uploadMessage
        : "";
};

const institutionDataSelector = (state: any) => {
    return state?.uploadDocumentsReducer?.institutionData
        ? state.uploadDocumentsReducer.institutionData
        : [];
};

export {
    uploadMessageSelector,
    institutionDataSelector,
};
