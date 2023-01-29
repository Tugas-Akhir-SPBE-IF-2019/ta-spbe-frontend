const validationMessageSelector = (state: any) => {
    return state?.validateResultReducer?.validationMessage
        ? state.validateResultReducer.validationMessage
        : null;
};

export {
    validationMessageSelector,
};
