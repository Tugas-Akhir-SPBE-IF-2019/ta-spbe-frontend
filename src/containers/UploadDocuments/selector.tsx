const uploadMessageSelector = (state: any) => {
    return state?.uploadDocumentsReducer?.uploadMessage
        ? state.uploadDocumentsReducer.uploadMessage
        : "";
};

export {
    uploadMessageSelector,
};
