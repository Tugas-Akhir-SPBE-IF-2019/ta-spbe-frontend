const evaluationDataSelector = (state: any) => {
    return state?.editEvaluationDataReducer?.evaluationData
        ? state.editEvaluationDataReducer.evaluationData
        : [];
};

const successMessageSelector = (state: any) => {
    return state?.editEvaluationDataReducer?.successMessage
        ? state.editEvaluationDataReducer.successMessage
        : "";
};

export {
    evaluationDataSelector,
    successMessageSelector
};
