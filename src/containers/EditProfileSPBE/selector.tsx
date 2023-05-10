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

const institutionListSelector = (state: any) => {
    return state?.editEvaluationDataReducer?.institutionList
        ? state.editEvaluationDataReducer.institutionList
        : [];
};

export {
    evaluationDataSelector,
    successMessageSelector,
    institutionListSelector
};
