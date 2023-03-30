const assessmentResultSelector = (state: any) => {
    return state?.validateResultReducer?.assessmentResult
        ? state.validateResultReducer.assessmentResult
        : null;
};

const validationMessageSelector = (state: any) => {
    return state?.validateResultReducer?.validationMessage
        ? state.validateResultReducer.validationMessage
        : null;
};

export {
    assessmentResultSelector,
    validationMessageSelector,
};
