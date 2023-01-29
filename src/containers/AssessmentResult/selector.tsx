const assessmentResultSelector = (state: any) => {
    return state?.assessmentResultReducer?.assessmentResult
        ? state.assessmentResultReducer.assessmentResult
        : null;
};

export {
    assessmentResultSelector,
};
