const assessmentResultSelector = (state: any) => {
    return state?.assessmentResultReducer?.assessmentResult
        ? state.assessmentResultReducer.assessmentResult
        : null;
};

const downloadMessageSelector = (state: any) => {
    return state?.assessmentResultReducer?.downloadMessage
        ? state.assessmentResultReducer.downloadMessage
        : null;
};

export {
    assessmentResultSelector,
    downloadMessageSelector,
};
