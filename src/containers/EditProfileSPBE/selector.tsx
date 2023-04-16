const evaluationDataSelector = (state: any) => {
    return state?.editEvaluationDataReducer?.evaluationData
        ? state.editEvaluationDataReducer.evaluationData
        : [];
};

const successMessageaSelector = (state: any) => {
    return state?.editEvaluationDataReducer?.successMessage
        ? state.editEvaluationDataReducer.successMessage
        : "";
};

export {
    evaluationDataSelector,
    successMessageaSelector
};
