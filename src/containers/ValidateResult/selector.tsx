const assessmentResultSelector = (state: any) => {
    return state?.validateResultReducer?.assessmentResult
        ? state.validateResultReducer.assessmentResult
        : null;
};

const assessmentValidationSelector = (state: any) => {
    return state?.validateResultReducer?.assessmentValidation
        ? state.validateResultReducer.assessmentValidation
        : [];
};

const validationMessageSelector = (state: any) => {
    return state?.validateResultReducer?.validationMessage
        ? state.validateResultReducer.validationMessage
        : null;
};

export {
    assessmentResultSelector,
    assessmentValidationSelector,
    validationMessageSelector,
};
